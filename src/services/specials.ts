import { getToken } from "./auth";
export type SpecialDto = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  category: string;
  image_url: string | null;
  start_date: string;
  end_date: string | null;
  active: boolean;
};

const API_URL: string = (import.meta as any).env?.VITE_API_URL as string;
if (!API_URL) {
  throw new Error("Missing VITE_API_URL env var");
}

export async function listSpecials(): Promise<SpecialDto[]> {
  const res = await fetch(API_URL, { method: "GET" });
  if (!res.ok) throw new Error(`Failed to fetch specials: ${res.status}`);
  return res.json();
}

async function parseJsonIfAny<T>(res: Response): Promise<T | null> {
  // Some backends return 204 or empty body for POST/PATCH
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export async function createSpecial(
  payload: Omit<SpecialDto, "id">
): Promise<SpecialDto | null> {
  const token = getToken();
  if (!token) throw new Error("Unauthorized: missing token");
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to create special: ${res.status}`);
  return parseJsonIfAny<SpecialDto>(res);
}

export async function updateSpecial(
  id: number,
  payload: Partial<Omit<SpecialDto, "id">>
): Promise<SpecialDto | null> {
  const token = getToken();
  if (!token) throw new Error("Unauthorized: missing token");
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to update special: ${res.status}`);
  return parseJsonIfAny<SpecialDto>(res);
}

export async function deleteSpecial(id: number): Promise<void> {
  const token = getToken();
  if (!token) throw new Error("Unauthorized: missing token");
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to delete special: ${res.status}`);
}
