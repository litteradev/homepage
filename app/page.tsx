// app/page.tsx

import { ConceptIntro } from "./components/ConceptIntro";
import { TopSlide } from "./components/TopSlide";

export default function Home() {
  return (
    <main>
      {/* Litteraの想いセクション */}
      <TopSlide />
      <ConceptIntro />

      {/* 今後、TOP用の他のセクションをここに追加していく */}
    </main>
  );
}
