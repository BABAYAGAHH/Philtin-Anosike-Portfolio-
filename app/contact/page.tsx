import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { ContentCard } from "@/components/ui/ContentCard";
import { Container } from "@/components/ui/Container";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Reach out to Philtin Anosike for mentorship, collaboration, and thoughtful inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Mentorship, collaboration, and thoughtful inquiries."
        description={`${siteConfig.contactIntro}\n\n${siteConfig.contactPrompt}`}
        caption="Clarity, intent, and alignment help every meaningful conversation begin well."
      />

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <QuoteBlock quote={siteConfig.mentorshipNote} />

            <SectionHeading
              eyebrow="How requests are reviewed"
              title="Clarity and alignment matter."
              description="Mentorship capacity is intentionally limited, so the strongest requests are direct, purposeful, and grounded in real context."
            />

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  title: "Mentorship",
                  body: "For thoughtful guidance requests with clear intent and practical context."
                },
                {
                  title: "Collaboration",
                  body: "For aligned opportunities in business, leadership, and structured development."
                },
                {
                  title: "General inquiry",
                  body: "For media, introductions, and broader questions that require a direct response."
                }
              ].map((card, index) => (
                <AnimatedReveal delay={index * 0.08} key={card.title}>
                  <ContentCard className="h-full">
                    <p className="text-sm uppercase tracking-[0.22em] text-stoneText/70">
                      {card.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stoneText">{card.body}</p>
                  </ContentCard>
                </AnimatedReveal>
              ))}
            </div>

            <ContentCard>
              <p className="text-sm uppercase tracking-[0.22em] text-stoneText/70">
                Social presence
              </p>
              <p className="mt-3 text-sm leading-7 text-stoneText">
                Social profiles can be connected here as public channels expand.
              </p>
              <SocialLinks className="mt-5" />
            </ContentCard>
          </div>

          <div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

