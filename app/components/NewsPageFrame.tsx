"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/NewsLayout.module.css";

type Props = {
  children: React.ReactNode;
};

export function NewsPageFrame({ children }: Props) {
  const pathname = usePathname();
  const isNewsPage = pathname?.startsWith("/news");

  if (!isNewsPage) {
    return <>{children}</>;
  }

  return <div className={styles.newsPageFrame}>{children}</div>;
}
