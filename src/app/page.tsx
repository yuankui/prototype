"use client";

import { UserList } from "@/components/UserList";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/providers/auth-provider";
import styles from "@/styles/layout.module.css";

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <div>
      <Navbar />
      <div className={`${styles.pageContent} ${styles.appContainer}`}>
        {loading ? (
          <div className={styles.welcome}>Loading...</div>
        ) : user ? (
          <UserList />
        ) : (
          <div className={styles.welcome}>
            <h2 className={styles.welcomeTitle}>Welcome to Prototype</h2>
            <p className={styles.welcomeMessage}>Please log in to see the user list.</p>
          </div>
        )}
      </div>
    </div>
  );
}
