"use client";

import { useState } from "react";

import { ArrowRight } from "lucide-react";

import {
  newsletterFormSchema,
  mapZodFieldErrors,
  type FormApiResponse,
  type NewsletterFieldName,
  type NewsletterFormPayload
} from "@/lib/forms";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";

type NewsletterFormProps = {
  className?: string;
  compact?: boolean;
};

const initialValues: NewsletterFormPayload = {
  email: "",
  website: ""
};

export function NewsletterForm({
  className,
  compact = false
}: NewsletterFormProps) {
  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = newsletterFormSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors = mapZodFieldErrors<NewsletterFieldName>(parsed.error);
      setStatus("error");
      setMessage(fieldErrors.email ?? "Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(parsed.data)
      });

      const data = (await response.json()) as FormApiResponse<NewsletterFieldName>;

      if (!response.ok || !data.success) {
        setStatus("error");
        setMessage(data.message);
        return;
      }

      setStatus("success");
      setMessage(data.message);
      setValues(initialValues);
    } catch {
      setStatus("error");
      setMessage(
        "We could not process your subscription right now. Please try again shortly."
      );
    }
  };

  return (
    <form className={cn("space-y-4", className)} onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="hidden"
        onChange={(event) =>
          setValues((current) => ({ ...current, website: event.target.value }))
        }
        tabIndex={-1}
        type="text"
        value={values.website}
      />

      <div
        className={cn(
          "rounded-[2rem] border border-border/70 bg-white/[0.85] p-3 shadow-card",
          compact ? "sm:flex sm:items-center sm:gap-3" : "space-y-3"
        )}
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          className="h-12 w-full rounded-full border border-transparent bg-surface px-5 text-sm text-foreground outline-none transition placeholder:text-stoneText/[0.55] focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
          id="newsletter-email"
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
          placeholder="Enter your email address"
          type="email"
          value={values.email}
        />
        <PrimaryButton
          className="w-full sm:w-auto"
          disabled={status === "loading"}
          type="submit"
        >
          <span className="inline-flex items-center gap-2">
            {status === "loading" ? "Subscribing..." : "Subscribe"}
            <ArrowRight className="h-4 w-4" />
          </span>
        </PrimaryButton>
      </div>
      <p
        aria-live="polite"
        className={cn(
          "text-sm",
          status === "error" ? "text-red-700" : "text-stoneText/75"
        )}
      >
        {message ?? "No noise. Just thoughtful updates."}
      </p>
    </form>
  );
}
