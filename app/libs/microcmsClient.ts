// libs/microcmsClient.ts

export type News = {
  content(content: any): import("react").ReactNode;
  id: string;
  title: string;
  body: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
};

type NewsListResponse = {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
};

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN as string;
const apiKey = process.env.MICROCMS_API_KEY as string;

if (!serviceDomain || !apiKey) {
  throw new Error(
    "MICROCMS_SERVICE_DOMAIN または MICROCMS_API_KEY が設定されていません。"
  );
}

const BASE_URL = `https://${serviceDomain}.microcms.io/api/v1`;

export async function getNewsList(): Promise<NewsListResponse> {
  const res = await fetch(`${BASE_URL}/news`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("ニュース一覧の取得に失敗しました");
  }

  return res.json();
}

export async function getNewsDetail(id: string): Promise<News> {
  const res = await fetch(`${BASE_URL}/news/${id}`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("ニュース詳細の取得に失敗しました");
  }

  return res.json();
}
