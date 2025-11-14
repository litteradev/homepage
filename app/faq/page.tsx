// app/faq/page.tsx

import styles from "../styles/Faq.module.css";
import { getFaqList } from "../libs/microcmsClient";
import { FaqCategorySelect } from "../components/FaqCategorySelect";

export const revalidate = 60; // ISR

const PER_PAGE = 5;

type PageProps = {
  searchParams: Promise<{
    page?: string;
    category?: string;
    q?: string;
  }>;
};

// 本文HTMLからテキストだけ取り出す簡易ヘルパー
function extractTextFromHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default async function FaqPage(props: PageProps) {
  const searchParams = await props.searchParams;

  const selectedCategory = searchParams.category ?? "";
  const keyword = (searchParams.q ?? "").trim();

  const { contents: faqs } = await getFaqList();

  // 全カテゴリ一覧（重複削除）
  const allCategories = Array.from(
    new Set(
      faqs.flatMap((faq: any) =>
        Array.isArray(faq.category) ? faq.category : []
      )
    )
  );

  // ① カテゴリ絞り込み
  const afterCategoryFilter = selectedCategory
    ? faqs.filter(
        (faq: any) =>
          Array.isArray(faq.category) && faq.category.includes(selectedCategory)
      )
    : faqs;

  // ② キーワード検索（タイトル or 本文）
  const afterKeywordFilter = keyword
    ? afterCategoryFilter.filter((faq: any) => {
        const lower = keyword.toLowerCase();
        const title = (faq.title ?? "").toLowerCase();
        const bodyText = extractTextFromHtml(faq.body ?? "").toLowerCase();
        return title.includes(lower) || bodyText.includes(lower);
      })
    : afterCategoryFilter;

  const filteredFaqs = afterKeywordFilter;

  const totalItems = filteredFaqs.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));

  // 現在ページ
  const currentPageRaw = Number(searchParams.page ?? "1");
  const currentPage =
    !currentPageRaw || currentPageRaw < 1
      ? 1
      : currentPageRaw > totalPages
      ? totalPages
      : currentPageRaw;

  const startIndex = (currentPage - 1) * PER_PAGE;
  const paginatedFaqs = filteredFaqs.slice(startIndex, startIndex + PER_PAGE);

  // ページネーション用 href（カテゴリ＆検索キーワード維持）
  const buildHref = (page: number) => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set("category", selectedCategory);
    if (keyword) params.set("q", keyword);
    if (page > 1) params.set("page", String(page));
    const query = params.toString();
    return query ? `/faq?${query}` : "/faq";
  };

  return (
    <main className={styles.faqPage}>
      <div className={styles.inner}>
        <h1 className={styles.title}>よくある質問</h1>

        {/* 検索＆カテゴリ */}
        <div className={styles.filterArea}>
          {/* 🔍 検索フォーム：EnterでGET /faq?q=... */}
          <form className={styles.searchBox} method="GET" action="/faq">
            {/* カテゴリ選択中なら hidden で維持 */}
            {selectedCategory && (
              <input
                type="hidden"
                name="category"
                value={selectedCategory}
              />
            )}
            <input
              type="text"
              name="q"
              className={styles.searchInput}
              placeholder="キーワードで検索"
              defaultValue={keyword}
            />
          </form>

          {/* カテゴリセレクト：変更時に自動絞り込み（q は維持される） */}
          <FaqCategorySelect
            allCategories={allCategories}
            selectedCategory={selectedCategory}
          />
        </div>

        {/* FAQ リスト（ページ分のみ） */}
        <section className={styles.list}>
          {paginatedFaqs.map((faq: any) => {
            const primaryCategory =
              faq.category && faq.category.length > 0
                ? faq.category[0]
                : "カテゴリ未設定";

            return (
              <article key={faq.id} className={styles.item}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryTag}>{primaryCategory}</span>
                </div>

                <h2 className={styles.itemTitle}>{faq.title}</h2>

                <div
                  className={styles.body}
                  dangerouslySetInnerHTML={{ __html: faq.body }}
                />
              </article>
            );
          })}

          {paginatedFaqs.length === 0 && (
            <p className={styles.emptyText}>
              該当するよくある質問はありません。
            </p>
          )}
        </section>

        {/* ページネーション（カテゴリ＆検索後の件数ベース） */}
        {totalPages > 1 && (
          <nav className={styles.pagination}>
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              const isCurrent = page === currentPage;

              return (
                <a
                  key={page}
                  href={buildHref(page)}
                  className={`${styles.pageButton} ${
                    isCurrent ? styles.current : ""
                  }`}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {page}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </main>
  );
}
