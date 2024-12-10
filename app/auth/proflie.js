"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; // Ensure your Firebase configuration is correctly imported
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setError("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Reset Password
        </h1>
        {message && (
          <p className="text-green-600 bg-green-100 p-2 rounded mb-4 text-center">
            {message}
          </p>
        )}
        {error && (
          <p className="text-red-600 bg-red-100 p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-center">
          Remembered your password?{" "}
          <Link href="/login">
            <a className="text-blue-500 hover:underline">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
