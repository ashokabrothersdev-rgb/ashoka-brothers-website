"use server";
import {
  contactFormSchema,
  type ContactFormSchemaType,
} from "@/lib/contact-form.validations";
import { requiredEnv, signServiceAccountJwt, TOKEN_URL } from "@/lib/utils";

type FormActionResult = {
  ok: boolean;
  message: string;
};

let tokenCache: { accessToken: string; expiresAt: number } | null = null;

/**
 * Handle the contact form submission.
 * @param input The contact form data.
 * @returns The result of the form submission.
 */
export async function formAction(
  input: ContactFormSchemaType,
): Promise<FormActionResult> {
  const parsed = contactFormSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues[0]?.message ?? "Please check the form.",
    };
  }

  try {
    await appendContactRow(parsed.data);
  } catch (error) {
    console.error("Failed to save contact form to Google Sheets", error);
    return {
      ok: false,
      message: "Something went wrong. Please try again.",
    };
  }

  return {
    ok: true,
    message: "Thank you. We will get in touch soon.",
  };
}

/**
 * Append a contact row to the Google Sheets.
 * @param data The contact data to append.
 */
async function appendContactRow(data: ContactFormSchemaType) {
  const spreadsheetId = requiredEnv("GOOGLE_SHEET_ID");
  const sheetName = process.env.GOOGLE_SHEET_NAME?.trim() || "Sheet1";
  const accessToken = await getAccessToken();
  const range = `'${sheetName.replaceAll("'", "''")}'!A:D`;
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append`,
  );

  url.searchParams.set("valueInputOption", "USER_ENTERED");
  url.searchParams.set("insertDataOption", "INSERT_ROWS");

  const submittedAt = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [[data.name, data.email, data.phone, submittedAt]],
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(
      `Google Sheets append failed (${response.status}): ${detail}`,
    );
  }
}

/**
 * Get an access token from Google for the Sheets API.
 * @returns The access token.
 */
async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  if (tokenCache && tokenCache.expiresAt > now + 60) {
    return tokenCache.accessToken;
  }

  const clientEmail = requiredEnv("GOOGLE_SHEETS_CLIENT_EMAIL");
  const privateKey = requiredEnv("GOOGLE_SHEETS_PRIVATE_KEY").replace(
    /\\n/g,
    "\n",
  );
  const assertion = signServiceAccountJwt({ clientEmail, privateKey, now });

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Google auth failed (${response.status}): ${detail}`);
  }

  const token = (await response.json()) as {
    access_token?: string;
    expires_in?: number;
  };

  if (!token.access_token) {
    throw new Error("Google auth response did not include an access token.");
  }

  tokenCache = {
    accessToken: token.access_token,
    expiresAt: now + (token.expires_in ?? 3600),
  };

  return token.access_token;
}
