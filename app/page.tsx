// app/page.tsx

import { ConceptIntro } from "./components/ConceptIntro";
import { TopSlide } from "./components/TopSlide";
import { LitteraPoints } from "./components/LitteraPoints";

export default function Home() {
  return (
    <main>
      {/* Litteraの想いセクション */}
      <TopSlide />
      <ConceptIntro />
      <LitteraPoints />

      {/* 今後、TOP用の他のセクションをここに追加していく */}
    </main>
  );
}
