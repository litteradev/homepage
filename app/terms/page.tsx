import type { Metadata } from "next";
import styles from "../styles/Terms.module.css";

export const metadata: Metadata = {
  title: "ご利用規約 | Littera",
  description: "Littera のご利用規約ページです。",
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>ご利用規約</h1>
          <p className={styles.lead}>
            本利用規約（以下「本規約」といいます。）は、株式会社Littera（以下「当社」といいます。）が提供するサービス「Littera」（以下「本サービス」といいます。）の利用条件を定めるものです。ユーザーは、本規約に同意した上で本サービスを利用するものとします。
          </p>
        </div>

        <div className={styles.card}>
          <ol className={styles.articleList}>
            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１条</span>
                <h2 className={styles.heading}>適用</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．本規約は、ユーザーによる本サービスの利用に関する一切の関係に適用されます。</li>
                <li className={styles.body}>２．当社が別途定め、当社Webサイトまたは本サービス上で表示する各種ルール等は、本規約の一部を構成するものとします。</li>
                <li className={styles.body}>３．本規約と前項のルールその他説明が異なる場合、本規約が優先して適用されます。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第２条</span>
                <h2 className={styles.heading}>定義</h2>
              </div>
              <p className={styles.body}>本規約において使用する用語の定義は、次のとおりとします。</p>
              <ol className={styles.subList}>
                <li className={styles.body}>（１）「ユーザー」：本サービスに登録し利用する個人</li>
                <li className={styles.body}>（２）「投稿データ」：ユーザーが本サービスに入力・投稿・送信する文章、画像、動画、音声その他の情報</li>
                <li className={styles.body}>（３）「代理受信者」：レターの宛先本人がメールアドレスを保有しない等の場合に、ユーザーが指定する第三者</li>
                <li className={styles.body}>（４）「状況確認者」：ユーザーが一定期間応答しない場合に、状況を確認するために指定する第三者</li>
                <li className={styles.body}>（５）「レター」：本サービス上でユーザーが作成し、指定された条件のもと送付されるメッセージ</li>
                <li className={styles.body}>（６）「送信トリガー」：ユーザーの設定に基づきレター送付を行う条件</li>
                <li className={styles.body}>（７）「当社Webサイト」：当社が運営するWebサイト（ドメイン変更後を含む）</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第３条</span>
                <h2 className={styles.heading}>登録資格</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．本サービスの登録は、満13歳以上の者に限ります。</li>
                <li className={styles.body}>２．EU/EEA 在住者については、満16歳未満の場合、親権者の同意が必要です。</li>
                <li className={styles.body}>３．13歳未満の者はアカウント登録ができませんが、レターの「受信者」として閲覧することは妨げません。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第４条</span>
                <h2 className={styles.heading}>登録</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．登録を希望する者は、本規約に同意の上、当社所定の方法により、メールアドレス・氏名（姓・名及びフリガナ）等の情報を提供し、登録申請を行うものとします。</li>
                <li className={styles.body}>２．当社は、申請者の登録可否を判断し、承認した時点で登録が完了します。</li>
                <li className={styles.body}>
                  ３．当社は、次のいずれかに該当する場合、登録を拒否することがあります。
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）虚偽の情報を提供した時</li>
                    <li className={styles.body}>（２）過去に規約違反等があった時</li>
                    <li className={styles.body}>（３）反社会的勢力との関係があると当社が判断した時</li>
                    <li className={styles.body}>（４）その他、登録が適当でないと当社が判断した時</li>
                  </ol>
                </li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第５条</span>
                <h2 className={styles.heading}>登録情報の変更</h2>
              </div>
              <p className={styles.body}>ユーザーは、登録事項に変更が生じたとき、当社所定の方法で遅滞なく届け出るものとします。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第６条</span>
                <h2 className={styles.heading}>アカウント管理</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．ユーザーは、自己の責任においてアカウント情報を管理するものとします。</li>
                <li className={styles.body}>２．不正使用等により生じた損害について、当社は責任を負いません。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第７条</span>
                <h2 className={styles.heading}>代理受信者</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．ユーザーは、宛先本人が自らレターを受信又は閲覧することが難しい場合その他合理的な事情がある場合、当社所定の方法により、代理受信者を複数指定することができます。</li>
                <li className={styles.body}>２．当社は、ユーザーの指定に基づき、代理受信者に対してレター閲覧用URLその他当社所定の通知を送信します。</li>
                <li className={styles.body}>３．代理受信者に対する通知の受領、開封、閲覧または宛先本人への転送その他の取扱いは、全てユーザーと代理受信者との関係に基づくものであり、当社はその結果について一切の責任を負いません。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第８条</span>
                <h2 className={styles.heading}>状況確認プロセス</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．本サービスには、ユーザーが一定期間ログイン等を行わない場合、ユーザーが指定した状況確認者へ当社が状況確認を依頼する機能が含まれます。</li>
                <li className={styles.body}>２．当社は、ユーザーが設定した優先順位・回答期限に基づき、状況確認者へ電子メールを送信します。</li>
                <li className={styles.body}>３．状況確認者は、当該電子メールに記載された専用URLにアクセスし、遷移先Webページで状況の回答を行うものとします。</li>
                <li className={styles.body}>４．回答期限までに回答が得られない場合、次順位の状況確認者へ権利が移行します。</li>
                <li className={styles.body}>５．いずれかの状況確認者から有効な回答が得られた場合、その回答時点で送信トリガーが発動します。</li>
                <li className={styles.body}>６．いずれの状況確認者からも回答が得られない場合には、送信トリガーは発動しません。</li>
                <li className={styles.body}>７．状況確認者からの回答内容の真否、正確性、または状況確認者の対応如何について、当社は一切の責任を負いません。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第９条</span>
                <h2 className={styles.heading}>レター送付と送信トリガー</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>
                  １．ユーザーは、本サービスにおいてレターを送付する条件として、当社所定の方法により、次の各号のいずれか、または複数を選択して設定することができます。
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）特定の日付・時刻を指定して送付する方法（日時指定）</li>
                    <li className={styles.body}>（２）ユーザーが「意思疎通が困難となった場合」または「死亡したと推定される場合」に送付する方法（状況確認トリガー）</li>
                    <li className={styles.body}>（３）前各号の双方を満たしたときに送付する方法</li>
                    <li className={styles.body}>（４）ユーザーが当社所定の方法により即時に送付する方法（今すぐ送付）</li>
                  </ol>
                </li>
                <li className={styles.body}>２．状況確認トリガーに基づくレター送付については、第8条に定める状況確認プロセスが適用され、いずれかの状況確認者から有効な回答が得られた時点で送信が実行されます。</li>
                <li className={styles.body}>３．いずれの状況確認者からも回答が得られない場合、状況確認トリガーは発動しません。</li>
                <li className={styles.body}>４．本サービスのうち、写真、動画、音声その他のファイルの添付機能及び当社が指定するその他の一部機能は、有料プランに加入しているユーザーに限り利用することができます。</li>
                <li className={styles.body}>５．送信トリガーに基づきレターが送付された後、当社は、受信者の閲覧状況その他レター開封に関する情報を保持しません。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１０条</span>
                <h2 className={styles.heading}>禁止事項</h2>
              </div>
              <p className={styles.body}>ユーザーは、以下の行為をしてはならないものとします。</p>
              <ol className={styles.subList}>
                <li className={styles.body}>（１）法令または公序良俗に違反する行為</li>
                <li className={styles.body}>（２）第三者の権利または利益を侵害する行為</li>
                <li className={styles.body}>（３）不正アクセスその他これに類する行為</li>
                <li className={styles.body}>（４）本サービスの運営または提供を妨げる行為</li>
                <li className={styles.body}>（５）過度な負荷をサーバー等に与える行為</li>
                <li className={styles.body}>（６）本サービス上の情報を不正に取得、収集または利用する行為</li>
                <li className={styles.body}>（７）虚偽の情報を登録または提供する行為</li>
                <li className={styles.body}>（８）その他当社が不適切と判断する行為</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１１条</span>
                <h2 className={styles.heading}>投稿データの権利</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．投稿データに関する権利はユーザーに帰属します。</li>
                <li className={styles.body}>２．ユーザーは、投稿データが第三者の権利を侵害しないことを保証します。</li>
                <li className={styles.body}>３．当社は、本サービスの提供、維持、改善のために必要な範囲に限り、投稿データを取り扱うことができるものとします。ただし、当社が投稿データの内容を個別に閲覧することは、法令に基づく場合その他サービス運営上やむを得ない場合を除き、行いません。</li>
                <li className={styles.body}>４．当社は、投稿データを個人を特定できない形に加工した情報（統計情報等）については、サービス改善、広告の最適化その他当社の事業目的の範囲内で利用できるものとします。</li>
                <li className={styles.body}>５．ユーザーは、投稿データに関し、当社および当社が指定する者に対して、著作者人格権を行使しないものとします。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１２条</span>
                <h2 className={styles.heading}>有料プラン</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．当社は、将来的に有料プランを提供する場合があります。</li>
                <li className={styles.body}>２．有料プランの料金・支払条件その他詳細は、提供開始時に別途定めます。</li>
                <li className={styles.body}>３．有料機能には、ファイル添付機能・容量追加・アプリ内での外部サービス紹介等を含む可能性があります。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１３条</span>
                <h2 className={styles.heading}>免責</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．当社は、本サービスに関して、事実上または法律上の瑕疵について一切保証しません。</li>
                <li className={styles.body}>２．本サービスの中断・停止等によりユーザーが被った損害について、当社は責任を負いません。</li>
                <li className={styles.body}>３．当社の責任が法的に認められる場合でも、当社の責任限度額は、過去12か月間にユーザーが支払った金額または1万円のいずれか高い額を上限とします。</li>
                <li className={styles.body}>４．付随的・特別損害、逸失利益については賠償しません。</li>
                <li className={styles.body}>５．ユーザー間または第三者との紛争はユーザーが解決するものとします。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１４条</span>
                <h2 className={styles.heading}>サービス内容の変更等</h2>
              </div>
              <p className={styles.body}>当社は、必要に応じて、本サービスの内容を変更し、または本サービスの提供を中断し、もしくは終了することができます。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１５条</span>
                <h2 className={styles.heading}>サービス終了時のデータの取扱い</h2>
              </div>
              <p className={styles.body}>当社が本サービスの提供を終了する場合、当社は、ユーザーが投稿データおよびその他の保存データを取得または保存できるよう、合理的な期間を設けるものとします。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１６条</span>
                <h2 className={styles.heading}>広告等</h2>
              </div>
              <p className={styles.body}>当社は、ユーザーの属性や投稿内容等に応じて、アプリ内で外部サービスの紹介を行うことがあります。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１７条</span>
                <h2 className={styles.heading}>秘密保持</h2>
              </div>
              <p className={styles.body}>ユーザーは、当社から秘密として開示された情報を第三者に漏えいしてはなりません。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１８条</span>
                <h2 className={styles.heading}>利用者情報の取扱い</h2>
              </div>
              <p className={styles.body}>利用者情報の取扱いは、当社のプライバシーポリシーに従います。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１９条</span>
                <h2 className={styles.heading}>通知方法</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．当社からユーザーへの通知は、当社Webサイトへの掲示、アプリ内通知、プッシュ通知、電子メールその他当社が適当と認める方法により行います。</li>
                <li className={styles.body}>２．当社がWebサイトに掲示した時点、または電子的手段により通知を発した時点で、当該通知はユーザーに到達したものとみなします。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第２０条</span>
                <h2 className={styles.heading}>権利義務の譲渡</h2>
              </div>
              <p className={styles.body}>ユーザーは、当社の書面による承諾なく本規約に基づく地位を第三者に譲渡できません。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第２１条</span>
                <h2 className={styles.heading}>退会</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．ユーザーは、当社所定の手続により退会できます。</li>
                <li className={styles.body}>２．退会後、当社は所定の期間を経てユーザーのデータを削除します。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第２２条</span>
                <h2 className={styles.heading}>反社会的勢力の排除</h2>
              </div>
              <p className={styles.body}>ユーザーが反社会的勢力である場合、当社は利用停止等を行います。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第２３条</span>
                <h2 className={styles.heading}>規約違反時の措置</h2>
              </div>
              <p className={styles.body}>当社は、規約に違反したユーザーに対し、利用停止・データ削除・登録抹消等を行うことがあります。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第２４条</span>
                <h2 className={styles.heading}>分離可能性</h2>
              </div>
              <p className={styles.body}>本規約の一部が無効であっても、その余の部分は継続して効力を有します。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第２５条</span>
                <h2 className={styles.heading}>準拠法</h2>
              </div>
              <p className={styles.body}>本規約は日本法を準拠法とします。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第２６条</span>
                <h2 className={styles.heading}>裁判管轄</h2>
              </div>
              <p className={styles.body}>東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
            </li>
          </ol>

          <p className={styles.note}>（2025年12月1日制定）</p>
        </div>
      </section>
    </main>
  );
}
