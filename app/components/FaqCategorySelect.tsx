// app/components/FaqCategorySelect.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "../styles/Faq.module.css";

type Props = {
  allCategories: string[];
  selectedCategory: string;
};

export const FaqCategorySelect: React.FC<Props> = ({
  allCategories,
  selectedCategory,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    // 既存のクエリパラメータをベースに編集
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    // カテゴリ変えたらページ番号はリセット
    params.delete("page");

    const query = params.toString();
    router.push(query ? `/faq?${query}` : "/faq");
  };

  return (
    <div className={styles.categorySelectWrapper}>
      <select
        className={styles.categorySelect}
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="">すべてのカテゴリ</option>
        {allCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
