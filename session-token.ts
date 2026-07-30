// src/lib/session-token.ts (new, tiny helper)
export function getToken(): string {
  const t = typeof window !== "undefined" ? sessionStorage.getItem("hotel_session_token") : null;
  if (!t) throw new Error("No active session");
  return t;
}