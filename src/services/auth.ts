const ENV = (import.meta as any).env || {};
const ENV_API_URL: string | undefined = ENV.VITE_API_URL;
const ENV_AUTH_BASE: string | undefined = ENV.VITE_AUTH_BASE_URL;

// Derive auth base only from env. Prefer explicit VITE_AUTH_BASE_URL, else base of VITE_API_URL.
if (!ENV_AUTH_BASE && !ENV_API_URL) {
  throw new Error("Missing VITE_AUTH_BASE_URL or VITE_API_URL env var");
}
export const AUTH_BASE_URL: string =
  ENV_AUTH_BASE || new URL(ENV_API_URL as string).origin;

export type TokenResponse = {
  access_token: string;
  token_type: string;
};

export type UserMe = {
  username: string;
  full_name: string;
  email: string;
  disabled?: boolean | null;
};

export const TOKEN_STORAGE_KEY = "cafespecial.auth.token";

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}

export async function login(
  username: string,
  password: string
): Promise<TokenResponse> {
  const body = new URLSearchParams();
  body.set("username", username);
  body.set("password", password);
  // OAuth2PasswordRequestForm may expect grant_type (empty), scope etc., but not required here
  const res = await fetch(`${AUTH_BASE_URL}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    throw new Error(`Login failed: ${res.status}`);
  }
  return res.json();
}

export async function getMe(token: string): Promise<UserMe> {
  const res = await fetch(`${AUTH_BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error(`Auth check failed: ${res.status}`);
  }
  return res.json();
}
