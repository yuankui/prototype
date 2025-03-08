"use client";

import Link from "next/link";
import { useAuth } from "@/providers/auth-provider";

export function Navbar() {
  const { user, logout, loading } = useAuth();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Prototype
        </Link>
        
        <div className="flex items-center space-x-4">
          {loading ? (
            <div>Loading...</div>
          ) : user ? (
            <>
              <span className="text-gray-700">
                Hello, {user.name || user.email}
              </span>
              <button
                onClick={() => logout()}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}