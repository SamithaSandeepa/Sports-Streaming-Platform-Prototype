// src/app/auth/signup/page.tsx
"use client";

import { useState } from "react";
import { signup } from "@/lib/api";
import { setToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      const { token } = await signup(email, password);
      setToken(token);
      router.push("/dashboard");
    } catch {
      setError("Sign‑up failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="confirm">
              Confirm Password
            </label>
            <input
              id="confirm"
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
