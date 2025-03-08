"use client";

import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { redirect } from "next/navigation";

export default function AuthPage() {
  const { user } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");

  // Redirect if already authenticated
  if (user) {
    redirect("/");
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 ${
            mode === "login" 
              ? "bg-blue-500 text-white" 
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setMode("login")}
        >
          Login
        </button>
        <button
          className={`flex-1 py-2 ${
            mode === "register" 
              ? "bg-blue-500 text-white" 
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setMode("register")}
        >
          Register
        </button>
      </div>

      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}