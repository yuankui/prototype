"use client";

import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import styles from "@/styles/auth.module.css";
import btnStyles from "@/styles/buttons.module.css";

export function RegisterForm() {
  const { register, loading } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      await register(name, email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to register");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Register</h2>
      
      {error && (
        <div className={styles.formError}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={styles.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={styles.formInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`${btnStyles.btn} ${btnStyles.btnPrimary} ${styles.formSubmit}`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}