"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* アイコン */}
        <div className={styles.iconArea}>
          <Image
            src="/images/footer-icon.png"
            alt="Littera アイコン"
            width={100}
            height={100}
            className={styles.iconImage}
          />
        </div>

        {/* ストアバッジ */}
        <div className={styles.storeButtons}>
          <a
            href="#"
            className={styles.storeButton}
            aria-label="App Store からダウンロード"
          >
            <Image
              src="/images/app-store-badge.png"
              alt="App Store からダウンロード"
              width={120}
              height={40}
              className={styles.storeBadge}
            />
          </a>
          <a
            href="#"
            className={styles.storeButton}
            aria-label="Google Play で手に入れよう"
          >
            <Image
              src="/images/google-play-badge.png"
              alt="Google Play で手に入れよう"
              width={135}
              height={40}
              className={styles.storeBadge}
            />
          </a>
        </div>

        {/* 下部メニュー */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navItem}>
            TOP
          </Link>
          <Link href="/concept" className={styles.navItem}>
            Litteraの想い
          </Link>
          <Link href="/faq" className={styles.navItem}>
            よくある質問
          </Link>
          <Link href="/news" className={styles.navItem}>
            お知らせ
          </Link>
          <Link href="/company" className={styles.navItem}>
            会社概要
          </Link>
          <Link href="/terms" className={styles.navItem}>
            ご利用規約
          </Link>
          <Link href="/privacy" className={styles.navItem}>
            プライバシーポリシー
          </Link>
        </nav>
      </div>
    </footer>
  );
};
