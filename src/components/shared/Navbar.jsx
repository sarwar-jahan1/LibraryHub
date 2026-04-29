"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ name: "Sarwar" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
        >
          LibraryHub
        </Link>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/books" className="hover:text-blue-600 transition">
            All Books
          </Link>
          <Link href="/profile" className="hover:text-blue-600 transition">
            My Profile
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-gray-700 font-semibold">
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}