"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 🔥 logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* 🔷 Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          LibraryHub
        </Link>

        {/* 🔷 Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/books" className="hover:text-blue-600">
            All Books
          </Link>
          <Link href="/profile" className="hover:text-blue-600">
            My Profile
          </Link>
        </div>

        {/* 🔷 Right */}
        <div className="flex items-center gap-4">
          
          {/* Auth */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden md:block font-medium text-gray-700">
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}

          {/* 🔷 Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 🔷 Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/books" onClick={() => setMenuOpen(false)}>
            All Books
          </Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>
            My Profile
          </Link>
        </div>
      )}
    </nav>
  );
}