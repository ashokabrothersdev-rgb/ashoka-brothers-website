"use server";
import {
  contactFormSchema,
  type ContactFormSchemaType,
} from "@/lib/contact-form.validations";
import { requiredEnv } from "@/lib/utils";

type FormActionResult = {
  ok: boolean;
  message: string;
};

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
    await sendToWebhook(parsed.data);
  } catch (error) {
    console.error("Failed to send contact form to the Make webhook", error);
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
 * Send a contact submission to the Make webhook, which adds it as a row in
 * the leads Google Sheet. The API key stays on the server.
 * @param data The contact data to send.
 */
async function sendToWebhook(data: ContactFormSchemaType) {
  const url = requiredEnv("MAKE_WEBHOOK_URL");
  const apiKey = requiredEnv("MAKE_WEBHOOK_API_KEY");

  const submittedAt = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-make-apikey": apiKey,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      submittedAt,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Make webhook failed (${response.status}): ${detail}`);
  }
}
