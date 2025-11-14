import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDetail, getNewsList } from "../../libs/microcmsClient";
import styles from "../../styles/NewsDetail.module.css";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

type NewsDetail = Awaited<ReturnType<typeof getNewsDetail>>;

function formatDate(value: string | undefined) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function createDescription(html: string, length = 90) {
  return html
    .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, length);
}

export async function generateStaticParams() {
  const data = await getNewsList();
  return data.contents.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata | undefined> {
  const params = await props.params;

  try {
    const news = await getNewsDetail(params.id);
    const body = news.content ?? news.body ?? "";

    return {
      title: `${news.title} | Littera`,
      description: createDescription(body),
    };
  } catch {
    return undefined;
  }
}

export default async function NewsDetailPage(props: PageProps) {
  const params = await props.params;

  let news: NewsDetail | null = null;
  try {
    news = await getNewsDetail(params.id);
  } catch {
    notFound();
  }

  if (!news) {
    notFound();
  }

  const bodyHtml = news.content ?? news.body ?? "";
  const displayDate = news.publishedAt ?? news.createdAt;

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <h1 className={styles.title}>{news.title}</h1>
        <p className={styles.meta}>{formatDate(displayDate)}</p>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </article>
    </main>
  );
}
