import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br/>");
}

export async function POST(request: NextRequest) {
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!toEmail || !fromEmail) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const body = await request.json();
  const { name, email, message } = body as {
    name: string;
    email: string;
    message: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `[NX CREATIONS Portfolio] ຂໍ້ຄວາມຈາກ ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#9333ea;margin-bottom:24px">ຂໍ້ຄວາມໃຫມ່ຈາກ Portfolio</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;font-weight:bold;width:100px;color:#555">ຊື່</td>
            <td style="padding:8px 0">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:bold;color:#555">ອີເມລ</td>
            <td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <h3 style="color:#555;margin-bottom:8px">ລາຍລະອຽດໂປຣເຈັກ</h3>
        <p style="line-height:1.7;color:#333">${escapeHtml(message)}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
        <p style="font-size:12px;color:#999">ສົ່ງຜ່ານ NX CREATIONS Portfolio</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
