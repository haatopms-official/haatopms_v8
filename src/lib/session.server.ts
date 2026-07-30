import { createHmac } from "node:crypto";

export interface SessionPayload {
  id: string;
  username: string;
  role: "superuser" | "director" | "admin" | "manager";
  name?: string;
  surname?: string;
  exp: number;
}

function getSecret(): string {
  const secret = process.env.APP_SESSION_SECRET;
  if (!secret) throw new Error("Missing APP_SESSION_SECRET env variable");
  return secret;
}

export function createSessionToken(payload: Omit<SessionPayload, "exp">, hoursValid = 14): string {
  const full: SessionPayload = { ...payload, exp: Math.floor(Date.now() / 1000) + hoursValid * 3600 };
  const body = Buffer.from(JSON.stringify(full)).toString("base64url");
  const sig = createHmac("sha256", getSecret()).update(body).digest("base64url");
  return `${body}.${sig}`;
}

export function verifySessionToken(token: string): SessionPayload | null {
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = createHmac("sha256", getSecret()).update(body).digest("base64url");
  if (sig !== expected) return null;
  const payload = JSON.parse(Buffer.from(body, "base64url").toString()) as SessionPayload;
  if (payload.exp < Math.floor(Date.now() / 1000)) return null;
  return payload;
}