"use client";

import Image from "next/image";
import styles from "../styles/LitteraPoints.module.css";

export const LitteraPoints: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* タイトルエリア */}
        <div className={styles.titleWrapper}>
          <div className={styles.titleBg}>
            <p className={styles.titleJa}>Litteraでできること</p>
          </div>
        </div>

        {/* ポイント一覧 */}
        <div className={styles.pointsGrid}>
          {/* 1. 未来に届く */}
          <article className={styles.pointCard}>
            <div className={styles.mainImageWrapper}>
              <Image
                src="/images/points/points-future-delivery.png"
                alt="未来に届くイメージ：スマホでメッセージを確認する女子学生"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={styles.mainImage}
              />
            </div>
            <h3 className={styles.pointTitle}>未来に届く</h3>
            <div className={styles.textImageWrapper}>
              <Image
                src="/images/points/points-future-delivery-text.png"
                alt="あなたが旅立ったあとの遠い未来にも、最長●年後まで、時間を超えてあなたの想いが届きます…という説明テキスト"
                width={400}
                height={220}
                className={styles.textImage}
              />
            </div>
          </article>

          {/* 2. 誰にでも送れる */}
          <article className={styles.pointCard}>
            <div className={styles.mainImageWrapper}>
              <Image
                src="/images/points/points-send-anyone.png"
                alt="誰にでも送れるイメージ：赤ちゃんを囲む家族"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={styles.mainImage}
              />
            </div>
            <h3 className={styles.pointTitle}>誰にでも送れる</h3>
            <div className={styles.textImageWrapper}>
              <Image
                src="/images/points/points-send-anyone-text.png"
                alt="代理人の設定やメールアドレス宛の送信など、誰にでも手紙を送れることの説明テキスト"
                width={400}
                height={220}
                className={styles.textImage}
              />
            </div>
          </article>

          {/* 3. 手軽に書ける */}
          <article className={styles.pointCard}>
            <div className={styles.mainImageWrapper}>
              <Image
                src="/images/points/points-easy-writing.png"
                alt="手軽に書けるイメージ：Litteraアプリの画面が表示されたスマホ"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={styles.mainImage}
              />
            </div>
            <h3 className={styles.pointTitle}>手軽に書ける</h3>
            <div className={styles.textImageWrapper}>
              <Image
                src="/images/points/points-easy-writing-text.png"
                alt="思い立った時にいつでもメッセージを作成でき、文章のみの基本プランは無料である説明テキスト"
                width={400}
                height={220}
                className={styles.textImage}
              />
            </div>
          </article>

          {/* 4. 確実に届く安心設計 */}
          <article className={styles.pointCard}>
            <div className={styles.mainImageWrapper}>
              <Image
                src="/images/points/points-safe-flow.png"
                alt="状況確認のフロー図"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={styles.mainImage}
              />
            </div>
            <h3 className={styles.pointTitle}>確実に届く安心設計</h3>
            <div className={styles.textImageWrapper}>
              <Image
                src="/images/points/points-safe-flow-text.png"
                alt="状況確認機能や安全なデータ管理により、確実に届けられる仕組みの説明テキスト"
                width={400}
                height={220}
                className={styles.textImage}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
