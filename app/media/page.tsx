import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { ContentCard } from "@/components/ui/ContentCard";
import { Container } from "@/components/ui/Container";
import { VideoCard } from "@/components/media/VideoCard";
import { featuredMedia, shortVideos, speakingClips } from "@/content/media";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Media",
  description:
    "Video reflections and media appearances from Philtin Anosike on leadership, decision-making, and structured growth.",
  path: "/media"
});

export default function MediaPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Media"
        title="Recorded reflections shaped by clarity, composure, and disciplined thought."
        description={siteConfig.mediaIntro}
        caption="Communication matters most when understanding is unmistakably clear."
      />

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Featured message"
            title="A calm perspective for demanding environments."
            description={siteConfig.featuredVideoDescription}
          />
          <div className="mt-12">
            <VideoCard entry={featuredMedia} featured />
          </div>
        </Container>
      </section>

      <section className="section-space-sm">
        <Container>
          <SectionHeading
            eyebrow="Short videos"
            title="Brief, focused reflections."
            description="Concise media built to communicate ideas with precision rather than volume."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {shortVideos.map((entry) => (
              <VideoCard entry={entry} key={entry.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space-sm">
        <Container>
          <SectionHeading
            eyebrow="Speaking clips"
            title="A future archive for talks, interviews, and public conversations."
          />
          <AnimatedReveal className="mt-10">
            <ContentCard className="rounded-[2.25rem] bg-[linear-gradient(135deg,rgba(23,22,20,0.98),rgba(42,39,35,0.95))] text-white">
              <p className="text-sm uppercase tracking-[0.22em] text-white/[0.55]">Coming soon</p>
              <h3 className="mt-4 font-serif text-4xl leading-tight">
                {speakingClips[0]?.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/[0.72]">
                {speakingClips[0]?.description}
              </p>
            </ContentCard>
          </AnimatedReveal>
        </Container>
      </section>

      <CTASection
        description="For interviews, recorded conversations, and thoughtful collaborative opportunities."
        primaryHref="/contact"
        primaryLabel="Make an inquiry"
        secondaryHref="/newsletter"
        secondaryLabel="Join the newsletter"
        title="Media should deepen understanding, not add noise."
      />
    </>
  );
}

