// src/app/auth/signup/page.tsx
"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { signup as apiSignup } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    const { login } = useAuth();
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const { token } = await apiSignup(email, password);
      login(token);
      toast.success("Account created!");
      router.push("/dashboard");
    } catch {
      toast.error("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full border rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>

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
              className="w-full px-3 py-2 bg-white rounded focus:outline-none"
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
              className="w-full px-3 py-2 bg-white rounded focus:outline-none"
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
              className="w-full px-3 py-2 bg-white rounded focus:outline-none mb-4"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors "
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <a
            href="/auth/signin"
            className="text-primary hover:underline font-medium"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
