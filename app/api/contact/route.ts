import type { NextRequest } from "next/server";

import {
  CONTACT_ERROR_MESSAGE,
  CONTACT_SUCCESS_MESSAGE,
  RATE_LIMIT_MESSAGE,
  contactFormSchema,
  mapZodFieldErrors,
  type ContactFieldName
} from "@/lib/forms";
import { deliverContactSubmission } from "@/lib/server/contact-service";
import { serverEnv } from "@/lib/server/env";
import {
  formJson,
  getRateLimitKey,
  getRequestContext,
  hasTrustedFormOrigin,
  isJsonRequest
} from "@/lib/server/form-response";
import { checkRateLimit } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isJsonRequest(request)) {
    return formJson<ContactFieldName>(
      {
        success: false,
        message: "Invalid request format.",
        code: "invalid_request"
      },
      { status: 415 }
    );
  }

  if (!hasTrustedFormOrigin(request)) {
    return formJson<ContactFieldName>(
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
    namespace: "contact",
    key: getRateLimitKey(requestContext),
    max: serverEnv.contactRateLimitMax
  });

  if (!rateLimit.allowed) {
    return formJson<ContactFieldName>(
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
    return formJson<ContactFieldName>(
      {
        success: false,
        message: "The request body could not be read.",
        code: "invalid_request"
      },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return formJson<ContactFieldName>(
      {
        success: false,
        message: "Please review the highlighted fields.",
        code: "validation_error",
        fieldErrors: mapZodFieldErrors<ContactFieldName>(parsed.error)
      },
      { status: 422 }
    );
  }

  const { website, ...submission } = parsed.data;

  if (website) {
    return formJson<ContactFieldName>({
      success: true,
      message: CONTACT_SUCCESS_MESSAGE
    });
  }

  try {
    await deliverContactSubmission(submission, requestContext);

    return formJson<ContactFieldName>({
      success: true,
      message: CONTACT_SUCCESS_MESSAGE
    });
  } catch (error) {
    console.error("[contact-route]", error);

    return formJson<ContactFieldName>(
      {
        success: false,
        message: CONTACT_ERROR_MESSAGE,
        code: "provider_error"
      },
      { status: 500 }
    );
  }
}
