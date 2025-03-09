"use client";

import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { redirect } from "next/navigation";
import styles from "@/styles/auth.module.css";

export default function AuthPage() {
  const { user } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");

  // Redirect if already authenticated
  if (user) {
    redirect("/");
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${mode === "login" ? styles.activeTab : styles.inactiveTab}`}
          onClick={() => setMode("login")}
        >
          Login
        </button>
        <button
          className={`${styles.tab} ${mode === "register" ? styles.activeTab : styles.inactiveTab}`}
          onClick={() => setMode("register")}
        >
          Register
        </button>
      </div>

      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
