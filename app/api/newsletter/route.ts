import type { NextRequest } from "next/server";

import {
  NEWSLETTER_ALREADY_SUBSCRIBED_MESSAGE,
  NEWSLETTER_SUCCESS_MESSAGE,
  RATE_LIMIT_MESSAGE,
  mapZodFieldErrors,
  newsletterFormSchema,
  type NewsletterFieldName
} from "@/lib/forms";
import { serverEnv } from "@/lib/server/env";
import {
  formJson,
  getRateLimitKey,
  getRequestContext,
  hasTrustedFormOrigin,
  isJsonRequest
} from "@/lib/server/form-response";
import { subscribeToNewsletter } from "@/lib/server/newsletter-service";
import { checkRateLimit } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isJsonRequest(request)) {
    return formJson<NewsletterFieldName>(
      {
        success: false,
        message: "Invalid request format.",
        code: "invalid_request"
      },
      { status: 415 }
    );
  }

  if (!hasTrustedFormOrigin(request)) {
    return formJson<NewsletterFieldName>(
      {
        success: false,
        message: "This request origin is not allowed.",
        code: "invalid_origin"
      },
      { status: 403 }
    );
  }

  const requestContext = getRequestContext(request);
  const rateLimit = await checkRateLimit({
    namespace: "newsletter",
    key: getRateLimitKey(requestContext),
    max: serverEnv.newsletterRateLimitMax
  });

  if (!rateLimit.allowed) {
    return formJson<NewsletterFieldName>(
      {
        success: false,
        message: RATE_LIMIT_MESSAGE,
        code: "rate_limited"
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds)
        }
      }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return formJson<NewsletterFieldName>(
      {
        success: false,
        message: "The request body could not be read.",
        code: "invalid_request"
      },
      { status: 400 }
    );
  }

  const parsed = newsletterFormSchema.safeParse(body);

  if (!parsed.success) {
    return formJson<NewsletterFieldName>(
      {
        success: false,
        message: "Please review the highlighted fields.",
        code: "validation_error",
        fieldErrors: mapZodFieldErrors<NewsletterFieldName>(parsed.error)
      },
      { status: 422 }
    );
  }

  const { website, ...signup } = parsed.data;

  if (website) {
    return formJson<NewsletterFieldName>({
      success: true,
      message: NEWSLETTER_SUCCESS_MESSAGE
    });
  }

  try {
    const result = await subscribeToNewsletter(signup, requestContext);

    return formJson<NewsletterFieldName>({
      success: true,
      message:
        result.status === "already_subscribed"
          ? NEWSLETTER_ALREADY_SUBSCRIBED_MESSAGE
          : NEWSLETTER_SUCCESS_MESSAGE
    });
  } catch (error) {
    console.error("[newsletter-route]", error);

    return formJson<NewsletterFieldName>(
      {
        success: false,
        message:
          "We could not process your subscription right now. Please try again shortly.",
        code: "provider_error"
      },
      { status: 500 }
    );
  }
}
