"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ConceptIntro.module.css";

export const ConceptIntro: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* テキストエリア */}
        <div className={styles.textArea}>
          <h2 className={styles.title}>
            Littera（リテラ）は、大切な人への想いを未来に届けるための“手紙アプリ”です。
          </h2>
          <p className={styles.description}>
            日々の出来事や伝えたい気持ちを文章に残し、<br />
            もしもの時や未来の特定の日に届けることができます。
          </p>
        </div>

        {/* 画像エリア */}
        <div className={styles.imageArea}>
          <Image
            src="/images/concept-catch.png"
            alt="スマートフォンを操作する女性"
            width={180}
            height={180}
            className={styles.image}
            priority
          />
        </div>
      </div>

      <div className={styles.sectionLink}>
        <Link href="/concept" className={styles.link}>
          Litteraの想い
        </Link>
      </div>
    </section>
  );
};
