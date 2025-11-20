import "./globals.css";
import "./styles/Layout.module.css";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


export const metadata: Metadata = {
  title: "Littera",
  description:
    "LITTERAは、年齢を問わずすべての方がご利用いただける、想いを大切な人に託すためのメッセージサービスです。死や事故など万が一に備え、あなたの気持ちを安心して届けることができます。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className="layoutContainer">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
