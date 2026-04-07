import { createError, readBody } from "h3";

const MAX_MESSAGE = 8000;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 503,
      statusMessage:
        "Kontaktný formulár nie je nakonfigurovaný (chýba NUXT_RESEND_API_KEY).",
    });
  }

  if (!config.contactToEmail?.trim()) {
    throw createError({
      statusCode: 503,
      statusMessage:
        "Kontaktný formulár nie je nakonfigurovaný (chýba NUXT_CONTACT_TO_EMAIL).",
    });
  }

  const body = await readBody<{
    name?: string;
    email?: string;
    message?: string;
  }>(event).catch(() => null);

  const name = body?.name?.trim() ?? "";
  const email = body?.email?.trim() ?? "";
  const message = body?.message?.trim() ?? "";

  if (!name || name.length > 200) {
    throw createError({ statusCode: 400, statusMessage: "Neplatné meno." });
  }
  if (!email || !isValidEmail(email) || email.length > 320) {
    throw createError({ statusCode: 400, statusMessage: "Neplatný email." });
  }
  if (!message || message.length > MAX_MESSAGE) {
    throw createError({ statusCode: 400, statusMessage: "Neplatná správa." });
  }

  const from =
    config.contactFromEmail?.trim() ||
    "Biorezonancia Košice <onboarding@resend.dev>";

  const subject = `[Web] Správa od ${name}`;
  const html = `
    <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Správa:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [config.contactToEmail.trim()],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("[contact] Resend error:", res.status, errText);
    throw createError({
      statusCode: 502,
      statusMessage:
        "Odoslanie zlyhalo. Skúste znova neskôr alebo nás kontaktujte telefónom.",
    });
  }

  return { ok: true as const };
});

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
