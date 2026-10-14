import { createSign } from "node:crypto";

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
export const TOKEN_URL = "https://oauth2.googleapis.com/token";

function base64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

export function requiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

export function signServiceAccountJwt({
  clientEmail,
  privateKey,
  now,
}: {
  clientEmail: string;
  privateKey: string;
  now: number;
}) {
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64Url(
    JSON.stringify({
      iss: clientEmail,
      scope: SHEETS_SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );
  const unsigned = `${header}.${payload}`;
  const signer = createSign("RSA-SHA256");

  signer.update(unsigned);
  signer.end();

  return `${unsigned}.${signer.sign(privateKey, "base64url")}`;
}

