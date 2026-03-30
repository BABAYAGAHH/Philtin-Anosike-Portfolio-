import "server-only";

import type { NewsletterSignup } from "@/lib/forms";
import { serverEnv } from "@/lib/server/env";
import type { FormRequestContext } from "@/lib/server/form-response";

type NewsletterSubscriptionPayload = NewsletterSignup & {
  listId: string;
  request: FormRequestContext;
  subscribedAt: string;
};

type NewsletterSubscriptionResult = {
  provider: string;
  subscriberId: string;
  status: "subscribed" | "already_subscribed";
};

interface NewsletterProvider {
  subscribe(
    payload: NewsletterSubscriptionPayload
  ): Promise<NewsletterSubscriptionResult>;
}

const globalNewsletterStore = globalThis as typeof globalThis & {
  __philtinNewsletterEmails__?: Set<string>;
};

class ConsoleNewsletterProvider implements NewsletterProvider {
  private subscribers =
    globalNewsletterStore.__philtinNewsletterEmails__ ?? new Set<string>();

  constructor() {
    globalNewsletterStore.__philtinNewsletterEmails__ = this.subscribers;
  }

  async subscribe(
    payload: NewsletterSubscriptionPayload
  ): Promise<NewsletterSubscriptionResult> {
    const normalizedEmail = payload.email.toLowerCase();
    const status = this.subscribers.has(normalizedEmail)
      ? "already_subscribed"
      : "subscribed";

    this.subscribers.add(normalizedEmail);

    const subscriberId = crypto.randomUUID();

    console.info(
      "[newsletter-signup]",
      JSON.stringify(
        {
          provider: "console",
          subscriberId,
          status,
          payload
        },
        null,
        2
      )
    );

    return {
      provider: "console",
      subscriberId,
      status
    };
  }
}

class UnsupportedNewsletterProvider implements NewsletterProvider {
  constructor(private readonly providerName: string) {}

  async subscribe(): Promise<NewsletterSubscriptionResult> {
    throw new Error(
      `NEWSLETTER_PROVIDER="${this.providerName}" is not implemented yet. Add a provider adapter without changing the route handler.`
    );
  }
}

function createNewsletterProvider(): NewsletterProvider {
  switch (serverEnv.newsletterProvider) {
    case "console":
      return new ConsoleNewsletterProvider();
    case "convertkit":
    case "beehiiv":
    case "mailchimp":
      return new UnsupportedNewsletterProvider(serverEnv.newsletterProvider);
    default:
      return new UnsupportedNewsletterProvider(serverEnv.newsletterProvider);
  }
}

const newsletterProvider = createNewsletterProvider();

export function subscribeToNewsletter(
  signup: NewsletterSignup,
  context: FormRequestContext
) {
  return newsletterProvider.subscribe({
    ...signup,
    listId: serverEnv.newsletterListId,
    request: context,
    subscribedAt: new Date().toISOString()
  });
}
