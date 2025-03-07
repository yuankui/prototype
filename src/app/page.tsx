"use client";

import styles from "./page.module.css";
import { UserList } from "@/components/UserList";

export default function Home() {
  return (
    <div className={styles.page}>
      <UserList />
    </div>
  );
}
