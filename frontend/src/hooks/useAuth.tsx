"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { getToken as getCookieToken } from "@/lib/auth";

interface AuthContextValue {
  token: string | null;
  login(token: string): void;
  logout(): void;
}

const AuthContext = createContext<AuthContextValue>({
  token: null,
  login() {},
  logout() {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  // on first mount, read any existing cookie
  useEffect(() => {
    setToken(getCookieToken());
  }, []);

  // this replaces your standalone setToken(cookie)
  function login(newToken: string) {
    document.cookie = `token=${newToken}; path=/; secure; samesite=strict`;

    setToken(newToken);
  }

  function logout() {
    document.cookie = "token=; path=/; max-age=0";
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
