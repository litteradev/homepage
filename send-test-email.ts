import "dotenv/config";
// send-test-email.ts
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

async function main() {
  try {
    const data = await resend.emails.send({
      from: "Littera テスト <onboarding@resend.dev>", // 最初はこれでOK
      to: "tomizawa-r@aoten.ai",      // 自分のアドレス
      subject: "Resend テストメール",
      text: "これは Resend API から送ったテストメールです。",
    });

    console.log("送信成功:", data);
  } catch (error) {
    console.error("送信エラー:", error);
  }
}

main();
