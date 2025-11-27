import type { Metadata } from "next";
import styles from "../styles/Privacy.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Littera",
  description: "Littera のプライバシーポリシーページです。",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>プライバシーポリシー</h1>
          <p className={styles.lead}>
            株式会社Littera（以下「当社」といいます。）は、当社が提供するサービス「Littera」（以下「本サービス」といいます。）における個人情報を含む利用者情報の取扱いについて、本プライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
          </p>
        </div>

        <div className={styles.card}>
          <ol className={styles.articleList}>
            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１条</span>
                <h2 className={styles.heading}>適用範囲</h2>
              </div>
              <p className={styles.body}>本ポリシーは、本サービスにおいて当社が取得する全ての利用者情報の取扱いに適用されます。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第２条</span>
                <h2 className={styles.heading}>取得する利用者情報</h2>
              </div>
              <p className={styles.body}>当社が本サービスにおいて取り扱う利用者情報は、以下のとおりとします。</p>
              <ol className={styles.subList}>
                <li className={styles.body}>
                  １．ユーザーが入力・登録する情報
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）メールアドレス</li>
                    <li className={styles.body}>（２）氏名（姓・名及びフリガナ）</li>
                    <li className={styles.body}>（３）プロフィール情報（任意で登録する項目を含む）</li>
                    <li className={styles.body}>（４）ユーザーが本サービスに登録・保存するデータ（文章および添付ファイル（画像、動画、音声その他ファイル形式のデータ））</li>
                    <li className={styles.body}>（５）代理受信者および状況確認者としてユーザーが入力した氏名、メールアドレスその他の情報</li>
                    <li className={styles.body}>（６）当社が定める入力フォームによりユーザーが提供するその他の情報</li>
                  </ol>
                </li>
                <li className={styles.body}>
                  ２．投稿データ内容の取扱い
                  <p className={styles.body}>
                    当社は、ユーザーが本サービスに登録または保存する文章および添付ファイルの内容について、法令に基づく場合その他サービス運営上やむを得ない場合を除き、原則としてその内容にアクセスすることはありません。
                  </p>
                </li>
                <li className={styles.body}>
                  ３．本サービスの利用に際して当社が自動的に取得する情報
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）IPアドレス</li>
                    <li className={styles.body}>（２）Cookie、識別子、アクセスログ</li>
                    <li className={styles.body}>（３）端末情報、OS情報、アプリバージョン</li>
                    <li className={styles.body}>（４）レターの送信履歴、閲覧履歴その他の利用状況に関する情報</li>
                  </ol>
                </li>
                <li className={styles.body}>
                  ４．状況確認プロセスに関連して取得する情報
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）状況確認者への通知に関する情報（通知先メールアドレス、通知日時等）</li>
                    <li className={styles.body}>（２）状況確認者が専用ページに入力した回答内容</li>
                    <li className={styles.body}>（３）回答日時、アクセスログその他の関連情報</li>
                  </ol>
                </li>
                <li className={styles.body}>
                  ５．外部サービス連携により取得する情報
                  <p className={styles.body}>ユーザーが Apple ID、LINE アカウントその他の外部サービスとの連携を許可した場合に、当該外部サービスが開示を許諾した情報。</p>
                </li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第３条</span>
                <h2 className={styles.heading}>利用目的</h2>
              </div>
              <p className={styles.body}>当社は、取得した利用者情報を、以下の目的のために利用します。</p>
              <ol className={styles.subList}>
                <li className={styles.body}>
                  １．本サービスの提供・維持・運営のため
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）レターの作成、保存および送付機能の提供</li>
                    <li className={styles.body}>（２）代理受信者へのリンク送付</li>
                    <li className={styles.body}>（３）状況確認者への通知および回答受付</li>
                    <li className={styles.body}>（４）ユーザーによる各種設定の管理</li>
                  </ol>
                </li>
                <li className={styles.body}>
                  ２．安全性および不正防止のため
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）不正行為の監視</li>
                    <li className={styles.body}>（２）アカウント保護、アクセス制御</li>
                    <li className={styles.body}>（３）なりすまし等の不正利用の防止</li>
                  </ol>
                </li>
                <li className={styles.body}>
                  ３．サービス運営および機能改善のため
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）利用状況の分析</li>
                    <li className={styles.body}>（２）障害発生時の調査および対応</li>
                    <li className={styles.body}>（３）サービス品質向上の検討</li>
                  </ol>
                </li>
                <li className={styles.body}>
                  ４．法令遵守および権利保護のため
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）法令に基づく開示対応</li>
                    <li className={styles.body}>（２）当社または第三者の権利・利益を保護するための利用</li>
                  </ol>
                </li>
                <li className={styles.body}>
                  ５．有料サービスおよび課金処理のため
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）有料プラン、ストレージ拡張その他の課金サービスの提供・管理</li>
                  </ol>
                </li>
                <li className={styles.body}>６．アプリ内における外部サービス紹介（広告・レコメンド）のため</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第４条</span>
                <h2 className={styles.heading}>状況確認者に関する情報の取扱い</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．当社は、ユーザーが事前に登録した状況確認者に対し、ユーザーの設定に基づき状況確認に関する通知を送信します。</li>
                <li className={styles.body}>２．状況確認者が専用ページに入力した回答内容および回答日時等の情報は、ユーザーから委託された状況確認プロセスの実施のために利用します。</li>
                <li className={styles.body}>３．当社は、状況確認者の回答内容を上記目的以外に利用せず、法令に基づく場合を除き第三者に提供しません。</li>
                <li className={styles.body}>４．状況確認者に関する情報（氏名、メールアドレス、回答内容、回答日時等）は、適切な安全管理措置を講じて取り扱います。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第５条</span>
                <h2 className={styles.heading}>代理受信者に関する情報の取扱い</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．代理受信者には、ユーザーが作成したレターの閲覧用リンクが送信されます。</li>
                <li className={styles.body}>２．代理受信者は、当該リンクを宛先本人へ転送する役割を担います。</li>
                <li className={styles.body}>３．当社は、代理受信者によるレターの閲覧を完全に防止することが困難な場合があります。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第６条</span>
                <h2 className={styles.heading}>第三者提供</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>
                  １．当社は、次の場合を除き、ユーザー本人の同意なく個人情報を第三者に提供しません。
                  <ol className={styles.subListNested}>
                    <li className={styles.body}>（１）法令に基づく場合</li>
                    <li className={styles.body}>（２）人の生命、身体又は財産の保護に必要な場合</li>
                    <li className={styles.body}>（３）公衆衛生の向上又は児童の健全育成に特に必要がある場合</li>
                    <li className={styles.body}>（４）国又は地方公共団体の事務への協力が必要な場合</li>
                    <li className={styles.body}>（５）ユーザーの指示に基づく提供（代理受信者・状況確認者への通知等）</li>
                    <li className={styles.body}>（６）業務委託に伴う提供（電子メール送信、ストレージ、システム保守その他本サービス運営に必要な範囲）</li>
                    <li className={styles.body}>（７）事業承継（合併、会社分割、営業譲渡その他の企業再編に伴う承継）</li>
                  </ol>
                </li>
                <li className={styles.body}>２．当社は、前項第6号に基づき利用者情報の取り扱いを委託する場合、委託先に対して適切な監督を行います。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第７条</span>
                <h2 className={styles.heading}>アクセス解析・外部サービス</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．当社は、本サービスの改善のため、アクセス解析ツールを利用することがあります。</li>
                <li className={styles.body}>２．取得される情報、利用目的および個人情報の取扱いは、各提供事業者が定める内容に従います。</li>
                <li className={styles.body}>３．当社は、必要な範囲で当該事業者に利用者情報の取扱いを委託することがあります。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第８条</span>
                <h2 className={styles.heading}>個人情報の管理</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．当社は、個人情報への不正アクセス、紛失、漏えい等の防止のために必要な措置を講じます。</li>
                <li className={styles.body}>２．利用者情報の保存期間は、利用目的の達成に必要な期間とします。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第９条</span>
                <h2 className={styles.heading}>退会時のデータ取扱い</h2>
              </div>
              <p className={styles.body}>退会後、当社は当社所定の期間を経た後、ユーザーのデータを削除します。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１０条</span>
                <h2 className={styles.heading}>サービス終了時のデータ取扱い</h2>
              </div>
              <p className={styles.body}>本サービスを終了する場合、当社はユーザーがデータを保存できる合理的な期間を設け、その後データを削除します。</p>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１１条</span>
                <h2 className={styles.heading}>個人情報の開示・訂正・利用停止等</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．ユーザーは、個人情報保護法に基づき、開示・訂正・追加・削除・利用停止を請求することができます。</li>
                <li className={styles.body}>２．手続方法は当社所定の方法によります。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１２条</span>
                <h2 className={styles.heading}>未成年ユーザー</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．本サービスへの登録は、満13歳以上に限ります。</li>
                <li className={styles.body}>２．EU/EEA 在住で満16歳未満の場合、親権者の同意が必要です。</li>
                <li className={styles.body}>３．13歳未満の者であっても、レターの受信者として閲覧することは可能です。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１３条</span>
                <h2 className={styles.heading}>プライバシーポリシーの変更</h2>
              </div>
              <ol className={styles.subList}>
                <li className={styles.body}>１．当社は、必要に応じて本ポリシーを変更することがあります。</li>
                <li className={styles.body}>２．重大な変更の場合は、本サービス上で周知します。</li>
              </ol>
            </li>

            <li className={styles.article}>
              <div className={styles.articleTitle}>
                <span className={styles.articleIndex}>第１４条</span>
                <h2 className={styles.heading}>お問い合わせ窓口</h2>
              </div>
              <p className={styles.body}>本ポリシーに関するお問い合わせは、以下の窓口へお願いいたします。</p>
              <p className={styles.body}>株式会社Littera</p>
              <p className={styles.body}>email：support@litteraapp.com</p>
            </li>
          </ol>

          <p className={styles.note}>（2025年12月1日制定）</p>
        </div>
      </section>
    </main>
  );
}
