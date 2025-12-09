import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NewsPageFrame } from "./components/NewsPageFrame";


export const metadata: Metadata = {
  title: "Littera",
  description:
    "LITTERAは、年齢を問わずすべての方がご利用いただける、想いを大切な人に託すためのメッセージサービスです。死や事故など万が一に備え、あなたの気持ちを安心して届けることができます。",
  icons: {
    icon: [
      { url: "/images/favicon/favicon-16.png", sizes: "16x16" },
      { url: "/images/favicon/favicon-32.png", sizes: "32x32" },
      { url: "/images/favicon/favicon-48.png", sizes: "48x48" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/images/favicon/favicon-16.png" sizes="16x16" />
        <link rel="icon" href="/images/favicon/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/images/favicon/favicon-48.png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {/* ニュース系ページのみ縦方向flexでフッターを最下部に寄せる */}
        <NewsPageFrame>
          <Header />
          {children}
          <Footer />
        </NewsPageFrame>
      </body>
    </html>
  );
}
