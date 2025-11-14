"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/TopSlide.module.css";

type Slide = {
  src: string;
  mobileSrc: string;
  alt: string;
  title: string;
  text: string;
  showAppScreen?: boolean;
};

const sharedTitle = "未来に届く、あなたの想い";
const sharedText =
  "あなたが旅立ったあとも、お預かりした手紙を\n大切な人にお届けします。";

const slides: Slide[] = [
  {
    src: "/images/top-hero-main.png",
    mobileSrc: "/images/top-hero-mobile-woman.png",
    alt: "未来に届く手紙サービス Littera を使う女性",
    title: sharedTitle,
    text: sharedText,
    showAppScreen: true,
  },
  {
    src: "/images/top-hero-young-man.png",
    mobileSrc: "/images/top-hero-mobile-man.png",
    alt: "Littera を使う若い男性",
    title: sharedTitle,
    text: sharedText,
    showAppScreen: true,
  },
  {
    src: "/images/top-hero-senior-woman.png",
    mobileSrc: "/images/top-hero-mobile-senior.png",
    alt: "Littera を使うシニア女性",
    title: sharedTitle,
    text: sharedText,
    showAppScreen: true,
  },
];

export const TopSlide: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.topSlide}>
      <div className={styles.slider}>
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className={styles.desktopImage}
              />
              <Image
                src={slide.mobileSrc}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className={styles.mobileImage}
              />
            </div>
            <div className={styles.overlayContent}>
              <div className={styles.textOverlay}>
                <h2>{slide.title}</h2>
                <p>
                  {slide.text.split("\n").map((line, idx, arr) => (
                    <span key={idx}>
                      {line}
                      {idx < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              {slide.showAppScreen && (
                <div className={styles.appScreen}>
                  <Image
                    src="/images/top-hero-app-screen.png"
                    alt="Littera アプリのホーム画面"
                    fill
                    sizes="(max-width: 1024px) 40vw, 240px"
                    priority={slide.showAppScreen && i === index}
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${
                i === index ? styles.dotActive : ""
              }`}
              onClick={() => setIndex(i)}
              aria-label={`スライド${i + 1}に切り替え`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
