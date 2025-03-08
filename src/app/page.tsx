"use client";

import { UserList } from "@/components/UserList";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/providers/auth-provider";

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <div>
      <Navbar />
      <div>
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : user ? (
          <UserList />
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Welcome to Prototype</h2>
            <p className="text-gray-600 mb-6">Please log in to see the user list.</p>
          </div>
        )}
      </div>
    </div>
  );
}
