"use client";

import Image from "next/image";
import styles from "../styles/HowTo.module.css";

export const HowTo: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="howto-heading">
      <div className={styles.inner}>
        {/* タイトルエリア */}
        <div className={styles.titleWrapper}>
          <div className={styles.titleBg}>
            <p className={styles.titleJa}>Litteraの使い方</p>
          </div>
        </div>
        <div className={styles.items}>
          {/* STEP 1 */}
          <div className={styles.item}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/howto-register.png"
                alt="宛先帳のイラスト"
                width={220}
                height={220}
                className={styles.image}
                priority
              />
            </div>
            <p className={styles.title}>STEP 1</p>
            <h3 className={styles.title}>宛先を登録する</h3>
            <p className={styles.text}>
              お手紙を届けたい方をLitteraに登録します。
              相手がLitteraを利用していなくても、メールアドレスを入力するだけで
              宛先として登録できます。
            </p>
          </div>

          {/* STEP 2 */}
          <div className={styles.item}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/howto-timing.png"
                alt="封筒と時計のイラスト"
                width={220}
                height={220}
                className={styles.image}
              />
            </div>
            <p className={styles.title}>STEP 2</p>
            <h3 className={styles.title}>送付タイミングを指定する</h3>
            <p className={styles.text}>
              お手紙をいつ届けるかを次の3つの状態から選び、日付または日数を指定します。
              ➀平常時 / ➁死亡確定時 / ➂意思疎通困難確認時
            </p>
            <p className={styles.subtext}>
              例）死亡確定時の2100年5月5日に送付
              意思疎通困難確認・死亡確定の判定は、ユーザー様
              が指定した信頼できる方によって確認された場合の
              み有効となります
            </p>
          </div>

          {/* STEP 3 */}
          <div className={styles.item}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/howto-write.png"
                alt="手紙を書くイラスト"
                width={220}
                height={220}
                className={styles.image}
              />
            </div>
            <p className={styles.title}>STEP 3</p>
            <h3 className={styles.title}>お手紙を書く</h3>
            <p className={styles.text}>
              ラストレター / 資産管理メモ / 日記 / 家系図などをお手紙としてお預かりいたします。
              任意のカテゴリを追加し、整理して保管することも可能です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
