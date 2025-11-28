import type { Metadata } from "next";
import Image from "next/image";
import styles from "../styles/Concept.module.css";

export const metadata: Metadata = {
  title: "Litteraの想い | Littera",
  description:
    "Littera（リテラ）が大切にしている想いや、このサービスに込めた背景・ストーリーを紹介します。",
};

export default function ConceptPage() {
  return (
    <main className={styles.page}>
      {/* メインビジュアル */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/concept-main.jpg"
            alt="海辺で子どもを撮影する親子の様子"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* コンセプトテキスト */}
      <section className={styles.textSection}>
        <div className={styles.textInner}>
          <p className={styles.textParagraph}>
            Litteraは、すべての人の大切な想いの伝え漏れを防ぎ、残された人の喪失感を少しでも癒す機会を提供することで、人とのつながりという人生の至上の喜びに一層の潤いをもたらすことを目的としたサービスです。
          </p>
          <p className={styles.textParagraph}>
            私たちは、どうしても会いたい人がいれば、大きなお金や労力を惜しまず、ともすれば地球の裏側にでも会いに行こうとします。大切な人の存在は生きる意味そのものであり、人が人を想うということ以上に美しく、心を揺さぶるものはないのではないでしょうか。
          </p>
          <p className={styles.textParagraph}>
            しかしながら、誰もが経験する避けられない別れがあります。亡くなった方にもう一度会いたいという願いは、誰もが抱く究極的な、しかし叶わぬ望みです。それには遠く及ばなくとも――想いを手紙に残すことならできる。自分が立ち会えない未来にも、大切な人へ言葉を贈ることができる。突然の別れによって大切なことを伝えられないまま旅立つことも防げる。
          </p>
          <p className={styles.textParagraph}>
            このアプリは、人生で最も嬉しいことは何か、最も悲しいことは何か、といった人間の根源的な問いに向き合う中で生まれました。私のそばから旅立ってしまった大切な人、私を支えてくれている愛すべき人――その存在が着想を与えてくれたように思います。
          </p>
          <p className={styles.textParagraph}>
            Litteraは、そうした原点を大切にしながら、ビジネスであると同時に社会貢献も大きな目的としています。そのため、可能な限り多くの方に金銭的な心配をせずご利用いただけるよう、基本プランを無料としました。また、ユーザーの皆様からのご利用料金など、Litteraが得た収益の一部は、様々な困難を抱える人を支える福祉事業への寄付やLittera代表が直接関与する支援活動に使用させていただきます。
          </p>
          <p className={styles.textParagraph}>
            皆様に永く愛され、人生の一部として寄り添えるアプリとなること。そして、少しでも多くの人の生に温かな潤いを届けること。それこそがLitteraの願いです。
          </p>
        </div>
      </section>

      {/* 代表メッセージ／プロフィール */}
      <section className={styles.profileSection}>
        <div className={styles.profileInner}>
          <div className={styles.profileText}>
            <p className={styles.profileRole}>代表取締役社長</p>
            <p className={styles.profileName}>前川 佑作</p>

            <p className={styles.profileBody}>
              2010年、厚生労働省入省（I種経済職）。雇用政策、社会保障と税の一体改革、精神障害者医療・福祉、国際感染症対策、児童虐待防止など、人の生活と幸福に直結する幅広い社会保障政策に従事。
              2021年に退職後、経営コンサルティングファーム等を経て、在野の立場から再び「すべての人がこの世に生を授かって良かったと思える社会」に近づくための一助となることを目指し、株式会社Litteraを設立。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
