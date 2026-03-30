import "server-only";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import type { FormApiResponse } from "@/lib/forms";
import { serverEnv } from "@/lib/server/env";

export type FormRequestContext = {
  ip: string;
  userAgent: string;
  origin: string | null;
  referer: string | null;
  submittedAt: string;
};

function normalizeOrigin(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

function getForwardedIp(value: string | null) {
  if (!value) {
    return "";
  }

  return value.split(",")[0]?.trim() ?? "";
}

export function getRequestContext(request: NextRequest): FormRequestContext {
  return {
    ip:
      getForwardedIp(request.headers.get("x-forwarded-for")) ||
      request.headers.get("x-real-ip") ||
      "",
    userAgent: request.headers.get("user-agent") || "unknown",
    origin: normalizeOrigin(request.headers.get("origin")),
    referer: request.headers.get("referer"),
    submittedAt: new Date().toISOString()
  };
}

export function hasTrustedFormOrigin(request: NextRequest) {
  if (serverEnv.allowedOrigins.length === 0) {
    return true;
  }

  const requestOrigin = normalizeOrigin(request.headers.get("origin"));
  return requestOrigin ? serverEnv.allowedOrigins.includes(requestOrigin) : true;
}

export function isJsonRequest(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";
  return contentType.includes("application/json");
}

export function getRateLimitKey(context: FormRequestContext) {
  return context.ip || context.userAgent || "anonymous";
}

export function formJson<FieldName extends string>(
  body: FormApiResponse<FieldName>,
  init?: ResponseInit
) {
  const headers = new Headers(init?.headers);
  headers.set("Cache-Control", "no-store");

  return NextResponse.json(body, {
    ...init,
    headers
  });
}
