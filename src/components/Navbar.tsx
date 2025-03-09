"use client";

import Link from "next/link";
import { useAuth } from "@/providers/auth-provider";
import styles from "@/styles/layout.module.css";
import btnStyles from "@/styles/buttons.module.css";

export function Navbar() {
  const { user, logout, loading } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarContainer} ${styles.appContainer}`}>
        <Link href="/" className={styles.navbarLogo}>
          Prototype
        </Link>

        <div className={styles.navbarActions}>
          {loading ? (
            <div>Loading...</div>
          ) : user ? (
            <>
              <span className={styles.userInfo}>Hello, {user.name || user.email}</span>
              <button
                onClick={() => logout()}
                className={`${btnStyles.btn} ${btnStyles.btnDanger}`}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/auth" className={`${btnStyles.btn} ${btnStyles.btnPrimary}`}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
