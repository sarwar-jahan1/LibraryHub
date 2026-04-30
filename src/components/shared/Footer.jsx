import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* TOP */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">LibraryHub</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Discover, explore, and borrow your favorite books anytime. Your
            modern digital library experience starts here.
          </p>
        </div>

        {/* CENTER */}
        <div className="md:text-center">
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm text-gray-400">abc@libraryhub.com</p>
          <p className="text-sm text-gray-400">+880 1234-567890</p>
          <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
        </div>

        {/* RIGHT */}
        <div className="md:text-right">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>

          <div className="flex md:justify-end gap-4 text-lg">
            <Link href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-gray-400 transition">
              <FaGithub />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} LibraryHub. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
