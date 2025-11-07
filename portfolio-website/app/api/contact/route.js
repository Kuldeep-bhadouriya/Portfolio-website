import nodemailer from "nodemailer";
import { checkRateLimit } from "../lib/rateLimit";

export async function POST(request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded
      ? forwarded.split(",")[0]?.trim() || "unknown"
      : "unknown";

    const rateLimitResult = checkRateLimit(ip, 5, 60000);
    if (!rateLimitResult.success) {
      const retryAfter = Math.max(
        0,
        Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)
      );

      return new Response(
        JSON.stringify({
          error: "Too many requests. Please try again later.",
          retryAfter,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(retryAfter),
          },
        }
      );
    }

    const contentType = request.headers.get("content-type") || "";
    let body;

    if (contentType.includes("application/json")) {
      body = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      return new Response(
        JSON.stringify({ error: "Unsupported content type" }),
        {
          status: 415,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const name = String(body?.user_name || "").trim();
    const email = String(body?.user_email || "").trim();
    const subject = String(body?.user_subject || "").trim();
    const message = String(body?.user_message || "").trim();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const to = process.env.CONTACT_TO || user;
    const fromAddress = process.env.CONTACT_FROM || `Portfolio <${user}>`;

    const info = await transporter.sendMail({
      from: fromAddress,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name.replace(/[\r\n]/g, " ")} <${email.replace(
        /[\r\n]/g,
        " "
      )}>
Subject: ${subject.replace(/[\r\n]/g, " ")}

${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(
        email
      )}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return new Response(
      JSON.stringify({ ok: true, id: info?.messageId || null }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("/api/contact error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
