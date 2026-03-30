import { z } from "zod";

export const contactPurposeValues = [
  "Mentorship",
  "Collaboration",
  "General Inquiry"
] as const;

export type ContactPurpose = (typeof contactPurposeValues)[number];
export type ContactFieldName = "name" | "email" | "purpose" | "message";
export type NewsletterFieldName = "email";

const honeypotSchema = z.string().trim().max(0).optional().default("");

export const contactFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your name.")
      .max(120, "Please shorten your name."),
    email: z
      .string()
      .trim()
      .email("Please enter a valid email address.")
      .max(160, "Please shorten your email address."),
    purpose: z.enum(contactPurposeValues, {
      errorMap: () => ({ message: "Please select a valid purpose." })
    }),
    message: z
      .string()
      .trim()
      .min(20, "Please provide enough detail for a thoughtful response.")
      .max(3000, "Please shorten your message."),
    website: honeypotSchema
  })
  .strict();

export const newsletterFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .email("Please enter a valid email address.")
      .max(160, "Please shorten your email address."),
    website: honeypotSchema
  })
  .strict();

export type ContactFormPayload = z.input<typeof contactFormSchema>;
export type ContactSubmission = Omit<z.output<typeof contactFormSchema>, "website">;
export type NewsletterFormPayload = z.input<typeof newsletterFormSchema>;
export type NewsletterSignup = Omit<z.output<typeof newsletterFormSchema>, "website">;

export type FormFieldErrors<FieldName extends string> = Partial<
  Record<FieldName, string>
>;

export type FormErrorCode =
  | "invalid_request"
  | "invalid_origin"
  | "validation_error"
  | "rate_limited"
  | "provider_error";

export type FormApiResponse<FieldName extends string = string> =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      message: string;
      code: FormErrorCode;
      fieldErrors?: FormFieldErrors<FieldName>;
    };

export const CONTACT_SUCCESS_MESSAGE =
  "Message received. Thank you for reaching out.";
export const CONTACT_ERROR_MESSAGE =
  "We could not deliver your message right now. Please try again shortly.";
export const NEWSLETTER_SUCCESS_MESSAGE =
  "You are subscribed. Thoughtful updates will arrive with intention.";
export const NEWSLETTER_ALREADY_SUBSCRIBED_MESSAGE =
  "You are already subscribed. Thoughtful updates will continue to arrive with intention.";
export const RATE_LIMIT_MESSAGE =
  "Too many requests. Please wait a moment and try again.";

export function mapZodFieldErrors<FieldName extends string>(
  error: z.ZodError
) {
  const flattened = error.flatten().fieldErrors;

  return Object.fromEntries(
    Object.entries(flattened).flatMap(([key, issues]) =>
      issues?.[0] ? [[key, issues[0]]] : []
    )
  ) as FormFieldErrors<FieldName>;
}
