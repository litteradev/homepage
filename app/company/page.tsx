import type { Metadata } from "next";
import styles from "../styles/Company.module.css";

export const metadata: Metadata = {
  title: "会社概要 | Littera",
  description: "株式会社Litteraの会社概要ページです。",
};

export default function CompanyPage() {
  return (
    <main>
      <section className="section">
        <h1 className="pageTitle">会社概要</h1>

        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.label}>会社名</div>
            <div className={styles.value}>株式会社Littera</div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>設立</div>
            <div className={styles.value}>令和7年10月28日</div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>代表者</div>
            <div className={styles.value}>前川佑作</div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>資本金</div>
            <div className={styles.value}>5,000,000円</div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>所在地</div>
            <div className={styles.value}>
              東京都港区浜松町２丁目２番１５号浜松町ダイヤビル２Ｆ
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
