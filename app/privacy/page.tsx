import type { Metadata } from "next";
import styles from "../styles/Privacy.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Littera",
  description: "Littera のプライバシーポリシーページです。",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <h1 className={styles.title}>プライバシーポリシー</h1>
      </section>
    </main>
  );
}
