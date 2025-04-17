// simple cookie-based storage
export function setToken(token: string) {
  document.cookie = `token=${token}; path=/; secure; sameSite=strict`;
}
export function getToken(): string | null {
  const match = document.cookie.match(/(^|; )token=([^;]+)/);
  return match?.[2] || null;
}
export function clearToken() {
  document.cookie = "token=; Max-Age=0; path=/";
}
