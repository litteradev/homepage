"use client";

import { FormEvent, useState } from "react";
import styles from "../styles/Contact.module.css";

export default function ContactPage() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // 必須項目チェック
  if (!email || !message) {
    setResultMessage("メールアドレスと本文は必須です。");
    return;
  }
  if (!agreePrivacy) {
    setResultMessage(
      "プライバシーポリシーを確認のうえ、内容に同意してください。"
    );
    return;
  }

  setIsSubmitting(true);
  setResultMessage(null);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastName,
        firstName,
        email,
        subject,
        message,
        agreePrivacy,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.ok) {
      setResultMessage(data.error || "送信に失敗しました。時間をおいて再度お試しください。");
      return;
    }

    // 成功時
    setResultMessage("お問い合わせを送信しました。ありがとうございます。");

    // フォームリセット
    setLastName("");
    setFirstName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setAgreePrivacy(false);
  } catch (error) {
    console.error(error);
    setResultMessage("通信エラーが発生しました。時間をおいて再度お試しください。");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <main className={styles.contactPage}>
      <div className={styles.inner}>
        <h1 className={styles.title}>お問い合わせ</h1>

        {resultMessage && <p className={styles.notice}>{resultMessage}</p>}

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* 氏名（姓・名） */}
          <div className={styles.formGroup}>
            <label className={styles.srOnly}>氏名</label>
            <div className={styles.nameRow}>
              <div className={styles.nameCol}>
                <input
                  type="text"
                  placeholder="姓"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={styles.input}
                  aria-label="姓"
                />
              </div>
              <div className={styles.nameCol}>
                <input
                  type="text"
                  placeholder="名"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={styles.input}
                  aria-label="名"
                />
              </div>
            </div>
          </div>

          {/* メールアドレス */}
          <div className={styles.formGroup}>
            <label className={styles.srOnly}>メールアドレス</label>
            <input
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              aria-label="メールアドレス"
            />
          </div>

          {/* 件名 */}
          <div className={styles.formGroup}>
            <label className={styles.srOnly}>件名</label>
            <input
              type="text"
              placeholder="件名"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={styles.input}
              aria-label="件名"
            />
          </div>

          {/* 本文 */}
          <div className={styles.formGroup}>
            <label className={styles.srOnly}>本文</label>
            <textarea
              placeholder="本文"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
              aria-label="本文"
            />
          </div>

          {/* プライバシーポリシー同意 */}
          <div className={styles.privacyWrapper}>
            <label className={styles.checkboxRow}>
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={(e) => setAgreePrivacy(e.target.checked)}
              />
              <span>
                <a
                  href="/privacy"
                  className={styles.privacyLink}
                  target="_blank"
                >
                  プライバシーポリシー
                </a>
                を確認のうえ、内容に同意します
              </span>
            </label>
          </div>

          {/* 送信ボタン */}
          <div className={styles.submitArea}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
