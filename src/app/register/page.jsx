"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
const RegisterPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await authClient.signUp.email({
      email,
      password,
      name,
      image: photo || "https://i.ibb.co/4pDNDk1/avatar.png",
    });

    if (error) {
      setError(error.message || "Registration failed");
      setLoading(false);
    } else {
      router.push("/login");
    }
  };

  // 🔵 Google Register
  const handleGoogleRegister = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="mb-4 min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
      
      {/* 🔥 Card */}
      <div className="max-w-6xl mx-auto p-4 bg-white rounded-2xl shadow-xl ">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account 
        </h2>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm text-gray-600">
              Photo URL (optional)
            </label>
            <input
              type="text"
              placeholder="Enter image link"
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="mb-2 w-full mt-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50"
          >
            {loading ? "Creating..." : "Register"}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleRegister}
          className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition font-medium"
        >
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;