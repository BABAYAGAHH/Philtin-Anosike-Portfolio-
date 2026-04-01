import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { ContentCard } from "@/components/ui/ContentCard";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

const archivePreviews = [
  {
    title: "Why structure creates confidence",
    description:
      "A future note on how systems communicate seriousness before a word is spoken."
  },
  {
    title: "Building patiently in noisy times",
    description:
      "A reflection on why long-term builders must protect clarity from cultural distraction."
  },
  {
    title: "Leadership and the weight of consistency",
    description:
      "An upcoming essay on credibility, self-accountability, and public trust."
  }
];

export const metadata = createMetadata({
  title: "Newsletter",
  description:
    "Subscribe to thoughtful updates from Philtin Anosike on leadership, business, systems, and development.",
  path: "/newsletter"
});

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title={siteConfig.newsletterHeadline}
        description={siteConfig.newsletterDescription}
        caption="No noise. Just thoughtful updates."
      />

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <SectionHeading
              eyebrow="What to expect"
              title="Thoughtful updates delivered with consistency."
            />
            <div className="mt-10 grid gap-4">
              {siteConfig.newsletterExpectations.map((item, index) => (
                <AnimatedReveal delay={index * 0.08} key={item}>
                  <ContentCard className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/[0.12] text-[rgb(var(--accent-ink))]">
                      0{index + 1}
                    </div>
                    <p className="text-base text-foreground">{item}</p>
                  </ContentCard>
                </AnimatedReveal>
              ))}
            </div>
          </div>
          <AnimatedReveal>
            <div className="rounded-[2.5rem] border border-border/70 bg-[linear-gradient(135deg,rgba(248,251,248,0.96),rgba(228,236,229,0.96))] p-8 shadow-card sm:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-stoneText/70">
                Subscribe
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground">
                A direct line to measured thinking.
              </h2>
              <p className="mt-4 text-base leading-8 text-stoneText">
                Reflections from business, leadership, and national development shared with calm intention.
              </p>
              <NewsletterForm className="mt-8" />
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="section-space-sm">
        <Container>
          <SectionHeading
            eyebrow="Archive preview"
            title="Future editions will be collected here."
            description="A clean archive for thoughtful letters, lessons from execution, and essays with a longer shelf life."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {archivePreviews.map((entry, index) => (
              <AnimatedReveal delay={index * 0.08} key={entry.title}>
                <ContentCard className="h-full">
                  <p className="text-sm uppercase tracking-[0.22em] text-stoneText/70">
                    Future edition
                  </p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground">
                    {entry.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-stoneText">
                    {entry.description}
                  </p>
                </ContentCard>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        description="If the ideas resonate, stay close to the next essays, projects, and reflections."
        primaryHref="/ideas"
        primaryLabel="Read the ideas"
        secondaryHref="/contact"
        secondaryLabel="Make contact"
        title="Stay near the long-term thinking."
      />
    </>
  );
}


