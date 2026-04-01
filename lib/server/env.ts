import "server-only";

function normalizeOrigin(value?: string | null) {
  if (!value) {
    return null;
  }

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

function readPositiveNumber(name: string, fallback: number) {
  const rawValue = process.env[name];

  if (!rawValue) {
    return fallback;
  }

  const parsed = Number(rawValue);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

const configuredOrigins = [
  normalizeOrigin(process.env.ALLOWED_FORM_ORIGIN),
  normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL),
  normalizeOrigin(process.env.APP_URL)
].filter((value): value is string => Boolean(value));

export const serverEnv = {
  siteUrl:
    normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL) ??
    normalizeOrigin(process.env.APP_URL) ??
    "http://localhost:3000",
  allowedOrigins: Array.from(new Set(configuredOrigins)),
  emailProvider: process.env.EMAIL_PROVIDER?.trim() || "console",
  contactEmailTo: process.env.CONTACT_EMAIL_TO?.trim() || "contact@example.com",
  contactEmailFrom:
    process.env.CONTACT_EMAIL_FROM?.trim() || "noreply@example.com",
  newsletterProvider: process.env.NEWSLETTER_PROVIDER?.trim() || "console",
  newsletterListId: process.env.NEWSLETTER_LIST_ID?.trim() || "",
  rateLimitMode: process.env.RATE_LIMIT_MODE?.trim() || "memory",
  rateLimitWindowMs: readPositiveNumber("RATE_LIMIT_WINDOW_MS", 10 * 60 * 1000),
  contactRateLimitMax: readPositiveNumber("CONTACT_RATE_LIMIT_MAX", 5),
  newsletterRateLimitMax: readPositiveNumber("NEWSLETTER_RATE_LIMIT_MAX", 8)
} as const;
