import type { Metadata } from "next";
import styles from "../styles/Privacy.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Littera",
  description: "Littera のプライバシーポリシーページです。",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="section">
        <h1 className="pageTitle">プライバシーポリシー</h1>
      </section>
    </main>
  );
}
