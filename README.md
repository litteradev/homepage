# Littera サービスサイト

Littera（リテラ）は「未来に手紙を届ける」ことをテーマにしたアプリサービスです。本リポジトリは、その公式サイト（Top ページ）の Next.js 実装です。スライドヒーロー／サービス紹介／特徴紹介など、LP に必要なセクションがひと通り揃っています。

## 主なセクション
- ヘッダー：グローバルナビとストアバッジ、モバイル対応のハンバーガーメニュー
- Top スライド：自動フェードとドットナビを備えたヒーロービジュアル（`TopSlide`）
- コンセプト紹介：サービスの想いと詳細ページへの導線（`ConceptIntro`）
- Littera でできること：4 つの訴求ポイントカード（`LitteraPoints`）
- フッター：主要ページリンクや規約リンクを集約

## 技術スタック
- Next.js 16（App Router）
- React 18
- TypeScript
- Tailwind CSS v4（`@tailwindcss/postcss`）と CSS Modules 併用

## 前提条件
- Node.js 18.18 以上（Next.js 16 が要求）
- npm 10 以上推奨

## セットアップ & 実行方法
```bash
npm install        # 依存関係のインストール
npm run dev        # http://localhost:3000 で開発サーバー起動
npm run build      # 本番ビルド
npm run start      # 本番ビルドをローカルで確認
npm run export     # 静的 HTML を out/ に書き出し（Static Hosting 向け）
npm run lint       # ESLint 実行
```

## ディレクトリ構成（抜粋）
```
app/
  layout.tsx        ルートレイアウト（ヘッダー＆フッターを共通配置）
  page.tsx          Top ページ（セクションを組み合わせ）
  components/       各 UI セクション
  styles/           CSS Modules（Header, Footer など）
  globals.css       Tailwind & 共通スタイル
public/images/      ロゴやヒーロー画像、ポイント図版
```

## 開発メモ
- 画像差し替えは `public/images` 配下を置き換えるだけで OK（`next/image` を使用）。
- 文言やコンテンツは `app/components/*.tsx` にまとまっているので、セクション単位で編集できます。
- `npm run export` で静的ファイルを `out/` へ書き出せるため、S3 や Netlify などのホスティングにもそのまま流用できます。
