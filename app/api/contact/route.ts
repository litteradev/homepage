// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequestBody = {
  lastName: string;
  firstName: string;
  email: string;
  subject: string;
  message: string;
  agreePrivacy: boolean;
};

export async function POST(req: Request) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    // ---- API Key チェック（ビルドではなく実行時に引っかかるようにする）----
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY が設定されていません");
      return NextResponse.json(
        {
          ok: false,
          error: "メール送信設定が未設定です。（RESEND_API_KEY）",
        },
        { status: 500 }
      );
    }

    // ★ インスタンスはここで生成（ビルド時に実行されない）
    const resend = new Resend(RESEND_API_KEY);

    const body = (await req.json()) as ContactRequestBody;
    const { lastName, firstName, email, subject, message, agreePrivacy } = body;

    // ---- バリデーション ----
    if (!agreePrivacy) {
      return NextResponse.json(
        {
          ok: false,
          error: "プライバシーポリシーを確認のうえ、内容に同意してください。",
        },
        { status: 400 }
      );
    }

    if (!email || !message) {
      return NextResponse.json(
        { ok: false, error: "メールアドレスと本文は必須です。" },
        { status: 400 }
      );
    }

    const fullName = `${lastName || ""} ${firstName || ""}`.trim() || "お名前未入力";
    const safeSubject = subject?.trim() || "件名なし";

    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "Littera お問い合わせ <no-reply@litteraapp.com>";
    const adminTo =
      process.env.CONTACT_TO_EMAIL || "your-admin-address@example.com";

    // ---- 管理者宛てメール ----
    const { data: adminData, error: adminError } = await resend.emails.send({
      from,
      to: adminTo,
      subject: `【Littera お問い合わせ】${safeSubject}`,
      replyTo: email,
      text: [
        "Littera サイトからお問い合わせがありました。",
        "",
        `お名前: ${fullName}`,
        `メールアドレス: ${email}`,
        `件名: ${safeSubject}`,
        "",
        "本文:",
        message,
      ].join("\n"),
    });

    if (adminError) {
      console.error("[CONTACT_ADMIN_MAIL_ERROR]", adminError);
      return NextResponse.json(
        {
          ok: false,
          error: `管理者宛てメールの送信に失敗しました: ${
            adminError.message ?? ""
          }`,
        },
        { status: 500 }
      );
    }

    console.log("[CONTACT_ADMIN_MAIL_SENT]", adminData);

    // ---- 自動返信（ユーザー宛て）----
    const { data: userData, error: userError } = await resend.emails.send({
      from,
      to: email,
      subject: "【Littera】お問い合わせありがとうございます",
      text: [
        `${fullName} 様`,
        "",
        "この度は Littera へお問い合わせいただきありがとうございます。",
        "内容を確認のうえ、担当よりご連絡させていただきます。",
        "",
        "▼ お問い合わせ内容",
        `件名: ${safeSubject}`,
        "",
        message,
        "",
        "----------------------------",
        "Littera 運営",
      ].join("\n"),
    });

    if (userError) {
      console.error("[CONTACT_USER_MAIL_ERROR]", userError);
      return NextResponse.json(
        {
          ok: false,
          error: `自動返信メールの送信に失敗しました: ${
            userError.message ?? ""
          }`,
        },
        { status: 500 }
      );
    }

    console.log("[CONTACT_USER_MAIL_SENT]", userData);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "サーバーエラーが発生しました。時間をおいて再度お試しください。",
      },
      { status: 500 }
    );
  }
}
