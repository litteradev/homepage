// app/news/page.tsx
import Link from "next/link";
import { getNewsList } from "../libs/microcmsClient";
import styles from "../styles/NewsList.module.css";

export const revalidate = 60;
const PER_PAGE = 5;

// 日付フォーマット
function formatDate(value: string) {
  return new Date(value).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

// HTML → テキストにして冒頭を抜粋
function createExcerpt(html: string, maxLength = 80) {
  if (!html) return "";

  const text = html
    .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "") // タグ削除
    .replace(/\s+/g, " ") // 改行・連続空白を1個に
    .trim();

  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "…";
}

// ★ searchParams は Promise なのでまず props で受けて await する
type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function NewsPage(props: PageProps) {
  const searchParams = await props.searchParams; // ← ここで中身を取り出す

  const data = await getNewsList();

  const totalItems = data.contents.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));

  // ?page= の値を数値にして、1〜totalPages の範囲におさめる
  const currentPageRaw = Number(searchParams.page ?? "1");
  const currentPage =
    !currentPageRaw || currentPageRaw < 1
      ? 1
      : currentPageRaw > totalPages
      ? totalPages
      : currentPageRaw;

  const startIndex = (currentPage - 1) * PER_PAGE;
  const paginatedContents = data.contents.slice(
    startIndex,
    startIndex + PER_PAGE
  );

  return (
    <main className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>お知らせ</h1>

        {paginatedContents.length === 0 ? (
          <p className={styles.empty}>現在、お知らせはありません。</p>
        ) : (
          <>
            <ul className={styles.list}>
              {paginatedContents.map((item) => {
                const displayDate = item.publishedAt ?? item.createdAt;

                return (
                  <li key={item.id} className={styles.item}>
                    <Link href={`/news/${item.id}`} className={styles.itemLink}>
                      <p className={styles.date}>
                        {formatDate(displayDate)}
                      </p>
                      <h2 className={styles.itemTitle}>{item.title}</h2>
                      <p className={styles.excerpt}>
                        {createExcerpt(item.content ?? "")}
                      </p>
                      <p className={styles.more}>もっと見る &gt;</p>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* 5件超えのときだけページネーション表示 */}
            {totalPages > 1 && (
              <div className={styles.pagination}>
                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;
                  const isCurrent = page === currentPage;
                  const href = page === 1 ? "/news" : `/news?page=${page}`;

                  return (
                    <Link
                      key={page}
                      href={href}
                      className={`${styles.pageButton} ${
                        isCurrent ? styles.pageButtonCurrent : ""
                      }`}
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      {page}
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
