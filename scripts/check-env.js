// scripts/check-env.js

// ローカル開発時だけ .env.local を読む
if (!process.env.VERCEL) {
  try {
    // .env.local がなくてもエラーにはしない
    require("dotenv").config({ path: ".env.local" });
    console.log("[check-env] .env.local loaded");
  } catch (e) {
    console.log("[check-env] dotenv not found or .env.local not loaded (local only)", e?.message);
  }
}

// 必須にしたい環境変数
const requiredEnvVars = ["RESEND_API_KEY"];

console.log(`[check-env] VERCEL_ENV=${process.env.VERCEL_ENV || "local"}`);

const missing = requiredEnvVars.filter((key) => {
  const value = process.env[key];
  // 中身はマスクしてログに出す
  if (value) {
    console.log(`[check-env] ${key}=****${String(value).slice(-4)} (set)`);
  } else {
    console.log(`[check-env] ${key} is NOT set`);
  }
  return !value;
});

if (missing.length > 0) {
  console.error("❌ 必須の環境変数が設定されていません:");
  missing.forEach((key) => console.error(`  - ${key}`));
  console.error(
    "\nVercel の Environment Variables または .env.local を確認してください。"
  );
  process.exit(1); // ビルド失敗にする
}

console.log("✅ 必須の環境変数はすべて設定されています。");
