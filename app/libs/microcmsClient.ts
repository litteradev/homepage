// libs/microcmsClient.ts

// ------------------------------------
// 共通設定
// ------------------------------------
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN as string;
const apiKey = process.env.MICROCMS_API_KEY as string;

if (!serviceDomain || !apiKey) {
  throw new Error(
    "MICROCMS_SERVICE_DOMAIN または MICROCMS_API_KEY が設定されていません。"
  );
}

const BASE_URL = `https://${serviceDomain}.microcms.io/api/v1`;

// ------------------------------------
// News 型 & 関数
// ------------------------------------
export type News = {
  id: string;
  title: string;
  body?: string;
  content?: string;
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

// ------------------------------------
// FAQ 型 & 関数（category は string[]）
// ------------------------------------
export type Faq = {
  id: string;
  title: string;
  body: string;          // リッチエディタHTML
  category?: string[];   // ← ここがポイント（配列）
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  publishedDate?: string;
};

type FaqListResponse = {
  contents: Faq[];
  totalCount: number;
  offset: number;
  limit: number;
};

export async function getFaqList(): Promise<FaqListResponse> {
  const res = await fetch(`${BASE_URL}/faq?orders=-publishedDate&limit=10`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("FAQ一覧の取得に失敗しました");
  }

  return res.json();
}

export async function getFaqDetail(id: string): Promise<Faq> {
  const res = await fetch(`${BASE_URL}/faq/${id}`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("FAQ詳細の取得に失敗しました");
  }

  return res.json();
}
