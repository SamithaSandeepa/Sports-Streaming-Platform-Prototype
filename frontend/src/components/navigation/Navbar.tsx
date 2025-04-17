"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { token, logout } = useAuth();

  return (
    <header className="bg-secondary shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand + Primary nav */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-10">
            <div className="text-primary font-bold text-2xl">STREAM</div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-primary font-medium"
                >
                  LIVE STREAMING
                </Link>
              </li>
              <li>
                <Link
                  href="/on-demand"
                  className="text-white hover:text-primary font-medium"
                >
                  ON-DEMAND
                </Link>
              </li>
              {token && (
                <li>
                  <Link
                    href="/dashboard"
                    className="text-white hover:text-primary font-medium"
                  >
                    DASHBOARD
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {/* Search + Auth buttons */}
        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-secondary border border-gray-600 rounded-md px-3 py-1 text-white"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-primary"
            >
              <FaSearch size={18} />
            </button>
          )}

          {!token ? (
            <>
              <Link
                href="/auth/signin"
                className="text-white px-4 py-2 rounded-md font-medium hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
