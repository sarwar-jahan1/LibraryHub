import React from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 🔷 Left */}
        <div className="md:pr-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            LibraryHub
          </h2>
          <p className="text-sm leading-relaxed">
            Your digital library to explore and borrow books anytime, anywhere.
          </p>
        </div>

        {/* 🔷 Center */}
        <div className="md:text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h3>
          <p>Email: ABC@libraryhub.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* 🔷 Right */}
        <div className="md:text-right">
          <h3 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h3>
          <div className="flex md:justify-end gap-4 text-xl">
            <Link href="#" className="hover:text-blue-500">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaGithub />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </Link>
          </div>
        </div>

      </div>

      {/* 🔷 Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} LibraryHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;