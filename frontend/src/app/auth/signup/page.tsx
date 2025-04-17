"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { signup as apiSignup } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-white">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label htmlFor="confirm" className="block text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              id="confirm"
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
