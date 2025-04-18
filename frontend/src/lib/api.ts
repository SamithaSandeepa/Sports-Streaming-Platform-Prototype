// src/lib/api.ts
import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

interface AuthResponse {
  token: string;
}

export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/api/auth/login", {
    email,
    password,
  });
  return data;
}

export async function signup(
  email: string,
  password: string
): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/api/auth/signup", {
    email,
    password,
  });
  return data;
}

export async function fetchMatches(token: string) {
  const { data } = await api.get("/api/matches", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}
