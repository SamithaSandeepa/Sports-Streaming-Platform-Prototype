"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { token, logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-secondary shadow-md relative z-20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="text-primary font-bold text-2xl">STREAM</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
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

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMobileMenu}
        >
          <div
            className="bg-secondary h-full w-64 right-0 absolute p-6 shadow-lg transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mt-8">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-primary font-medium text-lg block"
                    onClick={toggleMobileMenu}
                  >
                    LIVE STREAMING
                  </Link>
                </li>
                <li>
                  <Link
                    href="/on-demand"
                    className="text-white hover:text-primary font-medium text-lg block"
                    onClick={toggleMobileMenu}
                  >
                    ON-DEMAND
                  </Link>
                </li>
                {token && (
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-white hover:text-primary font-medium text-lg block"
                      onClick={toggleMobileMenu}
                    >
                      DASHBOARD
                    </Link>
                  </li>
                )}
                <li className="pt-6 border-t border-gray-700">
                  {!token ? (
                    <div className="space-y-4">
                      <Link
                        href="/auth/signin"
                        className="text-white hover:text-primary font-medium text-lg block"
                        onClick={toggleMobileMenu}
                      >
                        Login
                      </Link>
                      <Link
                        href="/auth/signup"
                        className="bg-primary text-white px-4 py-2 rounded-md font-medium block text-center hover:bg-primary-dark transition-colors"
                        onClick={toggleMobileMenu}
                      >
                        Sign Up
                      </Link>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        logout();
                        toggleMobileMenu();
                      }}
                      className="bg-red-600 text-white px-4 py-2 rounded-md font-medium w-full hover:bg-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
