import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { ContentCard } from "@/components/ui/ContentCard";
import { Container } from "@/components/ui/Container";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Philtin Anosike's journey in entrepreneurship, systems thinking, disciplined leadership, and long-term national development.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Philtin Anosike"
        description="A life shaped by calm leadership, structured vision, and disciplined execution."
        caption="Entrepreneur, systems thinker, and advocate for disciplined leadership."
      />

      <section className="section-space-sm">
        <Container>
          <QuoteBlock quote={siteConfig.aboutOpening} />
        </Container>
      </section>

      <section className="section-space-sm">
        <Container>
          <SectionHeading
            eyebrow="Early life and education"
            title="Analytical foundations before enterprise."
            description={siteConfig.earlyLife}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <AnimatedReveal>
              <ContentCard>
                <p className="text-sm uppercase tracking-[0.22em] text-stoneText/[0.72]">Born</p>
                <h3 className="mt-4 font-serif text-3xl text-foreground">May 5, 1990</h3>
                <p className="mt-4 text-base leading-8 text-stoneText">
                  Born into a context that would later shape a serious interest in accountability, systems, and public progress.
                </p>
              </ContentCard>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <ContentCard>
                <p className="text-sm uppercase tracking-[0.22em] text-stoneText/[0.72]">Education</p>
                <h3 className="mt-4 font-serif text-3xl text-foreground">
                  Abia State University
                </h3>
                <p className="mt-4 text-base leading-8 text-stoneText">
                  Studied Microbiology, developing a deeper respect for structure, observation, and disciplined analysis.
                </p>
              </ContentCard>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,251,244,0.45),rgba(239,233,223,0.6))]">
        <Container>
          <SectionHeading
            eyebrow="Business journey"
            title="Building 22 Logistics with structure, discipline, and systems in view."
            description={siteConfig.businessJourney.join(" ")}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <AnimatedReveal>
              <ContentCard className="h-full">
                <p className="text-sm uppercase tracking-[0.22em] text-stoneText/[0.72]">The work</p>
                <h3 className="mt-4 font-serif text-3xl text-foreground">22 Logistics</h3>
                <p className="mt-4 text-base leading-8 text-stoneText">
                  Founded in Port Harcourt to create structured, reliable transportation solutions with a premium standard of execution and service.
                </p>
                <p className="mt-4 text-base leading-8 text-stoneText">
                  Beyond operational output, the business has become a driver of employment creation and a practical demonstration that long-term progress grows through deliberate structure.
                </p>
              </ContentCard>
            </AnimatedReveal>
            <div className="grid gap-6">
              {["Structure", "Discipline", "Systems"].map((theme, index) => (
                <AnimatedReveal delay={index * 0.08} key={theme}>
                  <ContentCard>
                    <p className="text-sm uppercase tracking-[0.22em] text-stoneText/[0.72]">
                      Focus theme
                    </p>
                    <h3 className="mt-3 font-serif text-2xl text-foreground">{theme}</h3>
                    <p className="mt-3 text-base leading-8 text-stoneText">
                      {theme === "Structure" &&
                        "Clear systems reduce fragility and give organizations a foundation that can outlast momentary energy."}
                      {theme === "Discipline" &&
                        "Execution improves when standards are held consistently rather than adjusted to convenience."}
                      {theme === "Systems" &&
                        "Sustainable growth becomes possible when operations are designed deliberately instead of left to improvisation."}
                    </p>
                  </ContentCard>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Philosophy"
            title="A disciplined framework for leadership, business, and national progress."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {siteConfig.philosophy.map((entry, index) => (
              <AnimatedReveal delay={index * 0.08} key={entry.title}>
                <ContentCard className="h-full">
                  <p className="text-sm uppercase tracking-[0.22em] text-stoneText/[0.72]">
                    {entry.title}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-foreground">{entry.title}</h3>
                  <p className="mt-4 text-base leading-8 text-stoneText">{entry.body}</p>
                </ContentCard>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space-sm">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <AnimatedReveal>
            <ContentCard className="h-full">
              <p className="text-sm uppercase tracking-[0.22em] text-stoneText/[0.72]">
                Personal life
              </p>
              <h3 className="mt-4 font-serif text-3xl text-foreground">Grounded by family</h3>
              <p className="mt-4 text-base leading-8 text-stoneText">
                {siteConfig.personalLife}
              </p>
            </ContentCard>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,#171614_0%,#23211d_100%)] p-8 text-white shadow-glow sm:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-white/[0.55]">Vision</p>
              <h3 className="mt-4 font-serif text-4xl leading-tight">Long-term leadership built on structure and accountability.</h3>
              <p className="mt-5 text-base leading-8 text-white/[0.72]">{siteConfig.vision}</p>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <CTASection
        description="Explore the ideas, projects, and reflections that extend this long-term body of work."
        primaryHref="/ideas"
        primaryLabel="Read the ideas"
        secondaryHref="/projects"
        secondaryLabel="View the projects"
        title="The work is not only personal history. It is preparation for wider impact."
      />
    </>
  );
}


