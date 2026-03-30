"use client";

import { useState } from "react";

import { CheckCircle2 } from "lucide-react";

import {
  CONTACT_ERROR_MESSAGE,
  CONTACT_SUCCESS_MESSAGE,
  contactFormSchema,
  contactPurposeValues,
  mapZodFieldErrors,
  type ContactFieldName,
  type ContactFormPayload,
  type FormApiResponse
} from "@/lib/forms";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<ContactFieldName, string>>;

const initialState: ContactFormPayload = {
  name: "",
  email: "",
  purpose: "Mentorship",
  message: "",
  website: ""
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormPayload>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(CONTACT_SUCCESS_MESSAGE);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = <T extends keyof ContactFormPayload>(
    key: T,
    value: ContactFormPayload[T]
  ) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (key !== "website") {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
    setFormMessage(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      setErrors(mapZodFieldErrors<ContactFieldName>(parsed.error));
      setFormMessage("Please review the highlighted fields.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setFormMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(parsed.data)
      });

      const data = (await response.json()) as FormApiResponse<ContactFieldName>;

      if (!response.ok || !data.success) {
        setErrors(data.success ? {} : data.fieldErrors ?? {});
        setFormMessage(data.message);
        return;
      }

      setSubmittedMessage(data.message);
      setSubmitted(true);
      setValues(initialState);
      setErrors({});
    } catch {
      setFormMessage(CONTACT_ERROR_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-border/70 bg-white/[0.88] p-6 shadow-card sm:p-8">
      {submitted ? (
        <div className="rounded-[1.75rem] border border-accent/25 bg-accent/10 p-6 text-left">
          <CheckCircle2 className="h-8 w-8 text-[rgb(var(--accent-ink))]" />
          <h3 className="mt-4 font-serif text-3xl text-foreground">
            Message received
          </h3>
          <p className="mt-3 max-w-xl text-base leading-8 text-stoneText">
            {submittedMessage}
          </p>
          <SecondaryButton className="mt-6" onClick={() => setSubmitted(false)}>
            Send another message
          </SecondaryButton>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <input
            autoComplete="off"
            className="hidden"
            onChange={(event) => handleChange("website", event.target.value)}
            tabIndex={-1}
            type="text"
            value={values.website}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                className="mb-2 block text-sm font-medium text-foreground"
                htmlFor="contact-name"
              >
                Name
              </label>
              <input
                className={cn(
                  "h-12 w-full rounded-2xl border bg-surface px-4 text-sm text-foreground outline-none transition placeholder:text-stoneText/[0.55] focus:border-accent/40 focus:ring-2 focus:ring-accent/20",
                  errors.name ? "border-red-300" : "border-border"
                )}
                id="contact-name"
                onChange={(event) => handleChange("name", event.target.value)}
                placeholder="Your full name"
                value={values.name}
              />
              {errors.name ? (
                <p className="mt-2 text-sm text-red-700">{errors.name}</p>
              ) : null}
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-foreground"
                htmlFor="contact-email"
              >
                Email
              </label>
              <input
                className={cn(
                  "h-12 w-full rounded-2xl border bg-surface px-4 text-sm text-foreground outline-none transition placeholder:text-stoneText/[0.55] focus:border-accent/40 focus:ring-2 focus:ring-accent/20",
                  errors.email ? "border-red-300" : "border-border"
                )}
                id="contact-email"
                onChange={(event) => handleChange("email", event.target.value)}
                placeholder="you@example.com"
                type="email"
                value={values.email}
              />
              {errors.email ? (
                <p className="mt-2 text-sm text-red-700">{errors.email}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-foreground"
              htmlFor="contact-purpose"
            >
              Purpose
            </label>
            <select
              className={cn(
                "h-12 w-full rounded-2xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/20",
                errors.purpose ? "border-red-300" : "border-border"
              )}
              id="contact-purpose"
              onChange={(event) => handleChange("purpose", event.target.value as ContactFormPayload["purpose"])}
              value={values.purpose}
            >
              {contactPurposeValues.map((purpose) => (
                <option key={purpose} value={purpose}>
                  {purpose}
                </option>
              ))}
            </select>
            {errors.purpose ? (
              <p className="mt-2 text-sm text-red-700">{errors.purpose}</p>
            ) : null}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-foreground"
              htmlFor="contact-message"
            >
              Message
            </label>
            <textarea
              className={cn(
                "min-h-40 w-full rounded-[1.5rem] border bg-surface px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-stoneText/[0.55] focus:border-accent/40 focus:ring-2 focus:ring-accent/20",
                errors.message ? "border-red-300" : "border-border"
              )}
              id="contact-message"
              onChange={(event) => handleChange("message", event.target.value)}
              placeholder="Share your intent, context, and the kind of response you are hoping for."
              value={values.message}
            />
            {errors.message ? (
              <p className="mt-2 text-sm text-red-700">{errors.message}</p>
            ) : (
              <p className="mt-2 text-sm text-stoneText/70">
                Requests are best reviewed when clarity, intent, and alignment are easy to understand.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton disabled={isSubmitting} type="submit">
              {isSubmitting ? "Sending..." : "Send message"}
            </PrimaryButton>
            <p
              aria-live="polite"
              className={cn(
                "text-sm",
                formMessage ? "text-red-700" : "text-stoneText/[0.72]"
              )}
            >
              {formMessage ??
                "Handled securely on the server with validation, origin checks, and provider-ready delivery."}
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
