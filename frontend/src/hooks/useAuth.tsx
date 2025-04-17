"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { getToken, clearToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

const AuthContext = createContext<{ token: string | null; logout(): void }>({
  token: null,
  logout() {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    setToken(getToken());
  }, []);
  const logout = () => {
    clearToken();
    setToken(null);
    router.push("/");
  };
  return (
    <AuthContext.Provider value={{ token, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
