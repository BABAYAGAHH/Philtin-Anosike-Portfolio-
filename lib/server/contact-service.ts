import "server-only";

import type { ContactSubmission } from "@/lib/forms";
import { serverEnv } from "@/lib/server/env";
import type { FormRequestContext } from "@/lib/server/form-response";

type ContactDeliveryPayload = ContactSubmission & {
  receivedAt: string;
  request: FormRequestContext;
  destination: string;
};

type ContactDeliveryResult = {
  provider: string;
  messageId: string;
};

interface ContactProvider {
  send(payload: ContactDeliveryPayload): Promise<ContactDeliveryResult>;
}

class ConsoleContactProvider implements ContactProvider {
  async send(payload: ContactDeliveryPayload): Promise<ContactDeliveryResult> {
    const messageId = crypto.randomUUID();

    console.info(
      "[contact-submission]",
      JSON.stringify(
        {
          messageId,
          provider: "console",
          payload
        },
        null,
        2
      )
    );

    return {
      provider: "console",
      messageId
    };
  }
}

class UnsupportedContactProvider implements ContactProvider {
  constructor(private readonly providerName: string) {}

  async send(): Promise<ContactDeliveryResult> {
    throw new Error(
      `EMAIL_PROVIDER="${this.providerName}" is not implemented yet. Add a provider adapter without changing the route handler.`
    );
  }
}

function createContactProvider(): ContactProvider {
  switch (serverEnv.emailProvider) {
    case "console":
      return new ConsoleContactProvider();
    case "resend":
      return new UnsupportedContactProvider("resend");
    default:
      return new UnsupportedContactProvider(serverEnv.emailProvider);
  }
}

const contactProvider = createContactProvider();

export function deliverContactSubmission(
  submission: ContactSubmission,
  context: FormRequestContext
) {
  return contactProvider.send({
    ...submission,
    destination: serverEnv.contactEmailTo,
    receivedAt: new Date().toISOString(),
    request: context
  });
}
