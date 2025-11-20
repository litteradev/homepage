import type { Metadata } from "next";
import styles from "../styles/Terms.module.css";

export const metadata: Metadata = {
  title: "ご利用規約 | Littera",
  description: "Littera のご利用規約ページです。",
};

export default function TermsPage() {
  return (
    <main>
      <section className="section">
        <h1 className="pageTitle">ご利用規約</h1>
      </section>
    </main>
  );
}
