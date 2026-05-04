"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    setMenuOpen(false);
    router.refresh();
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50 mb-4">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-bold text-blue-600">
          LibraryHub
        </Link>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/books">All Books</Link>
          <Link href="/profile">My Profile</Link>
        </div>

        <div className="flex items-center gap-4">
          
          {isPending ? (
            <span className="text-sm text-gray-400">Loading...</span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <span className="hidden md:block font-medium text-gray-700">
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </Link>
          )}

          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/books" onClick={() => setMenuOpen(false)}>All Books</Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link>
        </div>
      )}
    </nav>
  );
}