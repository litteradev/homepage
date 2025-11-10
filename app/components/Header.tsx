"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const navItems = [
  { href: "/", label: "TOP" },
  { href: "/concept", label: "Littera の想い" },
  { href: "/faq", label: "よくある質問" },
  { href: "/news", label: "お知らせ" },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* ロゴ（画像版） */}
        <div className={styles.logoArea}>
          <Link href="/">
            <Image
              src="/images/littera-logo.png"
              alt="Littera ロゴ"
              width={140}
              height={38}
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* PCナビ */}
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <Fragment key={item.href}>
              {index > 0 && (
                <span className={styles.navDivider} aria-hidden="true">
                  |
                </span>
              )}
              <Link href={item.href} className={styles.navItem}>
                {item.label}
              </Link>
            </Fragment>
          ))}
        </nav>

        {/* PC ストアバッジ */}
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

        {/* モバイル：ハンバーガー */}
        <button
          type="button"
          className={`${styles.menuButton} ${
            isOpen ? styles.menuButtonActive : ""
          }`}
          aria-label="メニューを開閉"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavItem}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* モバイル版ストアバッジ */}
        <div className={styles.mobileStoreButtons}>
          <a
            href="#"
            className={styles.mobileStoreButton}
            aria-label="App Store からダウンロード"
            onClick={closeMenu}
          >
            <Image
              src="/images/app-store-badge.png"
              alt="App Store からダウンロード"
              width={140}
              height={46}
              className={styles.mobileStoreBadge}
            />
          </a>
          <a
            href="#"
            className={styles.mobileStoreButton}
            aria-label="Google Play で手に入れよう"
            onClick={closeMenu}
          >
            <Image
              src="/images/google-play-badge.png"
              alt="Google Play で手に入れよう"
              width={150}
              height={46}
              className={styles.mobileStoreBadge}
            />
          </a>
        </div>
      </div>
    </header>
  );
};
