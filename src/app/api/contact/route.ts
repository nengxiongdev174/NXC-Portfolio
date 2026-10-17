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

function renderCyberpunkEmail({
  name,
  email,
  message,
  locale = "en",
  timestamp,
}: {
  name: string;
  email: string;
  message: string;
  locale?: string;
  timestamp: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const langTag =
    locale === "lo"
      ? "Lao / ລາວ"
      : locale === "th"
      ? "Thai / ไทย"
      : "English / EN";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NX CREATIONS Transmission</title>
</head>
<body style="margin:0;padding:0;background-color:#08080c;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="background-color:#08080c;padding:36px 12px;width:100%;box-sizing:border-box;">
    <div style="max-width:580px;margin:0 auto;background-color:#101018;border-radius:16px;border:1px solid #9333ea40;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,0.65);">
      
      <!-- Gradient Accent Top Bar -->
      <div style="height:4px;background:linear-gradient(90deg, #9333ea, #3b82f6, #06b6d4);"></div>

      <!-- Cyber Terminal Top Header -->
      <div style="background-color:#141420;padding:12px 20px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="left" style="font-family:'Courier New',Courier,monospace;font-size:11px;letter-spacing:0.18em;color:#a1a1aa;text-transform:uppercase;">
              // NX_CREATIONS :: TRANSMISSION_LOG
            </td>
            <td align="right">
              <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background-color:#9333ea;margin-left:4px;"></span>
              <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background-color:#3b82f6;margin-left:4px;"></span>
              <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background-color:#10b981;margin-left:4px;"></span>
            </td>
          </tr>
        </table>
      </div>

      <!-- Main Body Container -->
      <div style="padding:28px 24px 32px 24px;">

        <!-- Badge -->
        <div style="margin-bottom:16px;">
          <span style="display:inline-block;padding:5px 14px;border-radius:9999px;background-color:rgba(147,51,234,0.18);border:1px solid rgba(147,51,234,0.45);color:#c084fc;font-family:'Courier New',Courier,monospace;font-size:11px;font-weight:700;letter-spacing:0.12em;">
            ⚡ NEW CLIENT INQUIRY
          </span>
        </div>

        <!-- Heading -->
        <h1 style="margin:0 0 6px 0;font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;line-height:1.3;">
          New message from <span style="color:#c084fc;">${safeName}</span>
        </h1>
        <p style="margin:0 0 24px 0;font-size:13px;color:#71717a;line-height:1.5;">
          Received via portfolio form on <span style="color:#38bdf8;font-family:'Courier New',Courier,monospace;">nxc-portfolio.vercel.app</span>
        </p>

        <!-- Sender Metadata Card -->
        <div style="background-color:#161624;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px 20px;margin-bottom:24px;">
          <div style="font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:0.15em;color:#a855f7;text-transform:uppercase;margin-bottom:12px;font-weight:bold;">
            // SENDER_METADATA
          </div>

          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:13px;border-collapse:collapse;">
            <tr>
              <td style="padding:6px 0;color:#71717a;width:110px;vertical-align:top;font-size:12px;">NAME (ຊື່):</td>
              <td style="padding:6px 0;color:#ffffff;font-weight:600;vertical-align:top;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#71717a;width:110px;vertical-align:top;font-size:12px;">EMAIL (ອີເມລ):</td>
              <td style="padding:6px 0;vertical-align:top;">
                <a href="mailto:${safeEmail}" style="color:#38bdf8;text-decoration:none;font-weight:600;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#71717a;width:110px;vertical-align:top;font-size:12px;">LOCALE (ພາສາ):</td>
              <td style="padding:6px 0;color:#a1a1aa;vertical-align:top;font-family:'Courier New',Courier,monospace;font-size:12px;">${langTag}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#71717a;width:110px;vertical-align:top;font-size:12px;">TIMESTAMP:</td>
              <td style="padding:6px 0;color:#a1a1aa;vertical-align:top;font-size:12px;">${timestamp}</td>
            </tr>
          </table>
        </div>

        <!-- Message Box -->
        <div style="margin-bottom:28px;">
          <div style="font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:0.15em;color:#38bdf8;text-transform:uppercase;margin-bottom:8px;font-weight:bold;">
            // MESSAGE_PAYLOAD (ລາຍລະອຽດຂໍ້ຄວາມ)
          </div>
          <div style="background-color:#0b0b12;border:1px solid rgba(147,51,234,0.3);border-left:3px solid #9333ea;border-radius:10px;padding:18px 20px;">
            <p style="margin:0;color:#f4f4f5;font-size:14px;line-height:1.75;white-space:pre-wrap;word-break:break-word;">${safeMessage}</p>
          </div>
        </div>

        <!-- Quick Action CTA Button -->
        <div style="text-align:center;margin-bottom:28px;">
          <a href="mailto:${safeEmail}?subject=Re:%20NX%20CREATIONS%20Portfolio%20Inquiry"
             style="display:inline-block;background:linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 32px;border-radius:9999px;box-shadow:0 6px 24px rgba(147,51,234,0.4);letter-spacing:0.02em;">
            ✉ Reply to ${safeName}
          </a>
          <div style="margin-top:8px;font-size:11px;color:#71717a;">
            Click to reply directly to ${safeEmail}
          </div>
        </div>

        <!-- Divider -->
        <div style="height:1px;background-color:rgba(255,255,255,0.07);margin-bottom:24px;"></div>

        <!-- Footer -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:11px;color:#52525b;">
          <tr>
            <td align="left" style="vertical-align:middle;">
              <span style="font-weight:800;color:#ffffff;letter-spacing:0.1em;font-size:12px;">NX</span>
              <span style="color:#a855f7;letter-spacing:0.2em;font-size:11px;font-family:'Courier New',Courier,monospace;"> CREATIONS</span>
              <div style="color:#71717a;margin-top:3px;">Full-Stack Engineering &amp; Modern Digital Products</div>
            </td>
            <td align="right" style="vertical-align:middle;font-family:'Courier New',Courier,monospace;font-size:10px;color:#52525b;">
              PORTFOLIO_SYSTEM // SECURE
            </td>
          </tr>
        </table>

      </div>

    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!toEmail || !fromEmail) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const body = await request.json();
  const { name, email, message, locale } = body as {
    name: string;
    email: string;
    message: string;
    locale?: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const timestamp = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  }).format(new Date());

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `[NX TRANSMISSION] New message from ${name.trim()} ⚡`,
    html: renderCyberpunkEmail({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      locale: locale || "en",
      timestamp: `${timestamp} (GMT+7)`,
    }),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
