import Image from "next/image";

import { ArticleCard } from "@/components/articles/ArticleCard";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { VideoCard } from "@/components/media/VideoCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { articles } from "@/content/articles";
import { featuredMedia } from "@/content/media";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

const heroDetails = [
  {
    label: "Built from",
    value: "Business structure"
  },
  {
    label: "Method",
    value: "Calm thinking"
  },
  {
    label: "Orientation",
    value: "Long-term vision"
  }
] as const;

export const metadata = createMetadata({
  title: "Home",
  description:
    "Thoughtful writing from Philtin Anosike on leadership, systems thinking, entrepreneurship, and long-term national development.",
  path: "/"
});

export default function HomePage() {
  const featuredIdeas = articles.filter((article) => article.featured).slice(0, 3);
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-8 sm:pb-28 sm:pt-12 lg:pb-32 lg:pt-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_14%_12%,rgba(46,98,71,0.18),transparent_30%),radial-gradient(circle_at_84%_14%,rgba(255,255,255,0.7),transparent_22%),radial-gradient(circle_at_76%_42%,rgba(11,29,22,0.11),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light bg-[repeating-linear-gradient(135deg,rgba(7,17,13,0.16)_0,rgba(7,17,13,0.16)_1px,transparent_1px,transparent_10px)]" />

        <Container className="relative grid gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center">
          <AnimatedReveal className="max-w-3xl lg:pr-8">
            <Badge>Structured perspective</Badge>

            <h1 className="mt-6 whitespace-nowrap font-serif text-[clamp(2.35rem,8.2vw,6rem)] leading-[0.92] tracking-[-0.045em] text-foreground">
              {siteConfig.name}
            </h1>

            <p className="mt-5 max-w-full whitespace-nowrap text-[clamp(0.5rem,1.9vw,0.84rem)] tracking-[0.08em] text-stoneText/[0.78]">
              {siteConfig.title}
            </p>

            <p className="mt-8 max-w-2xl font-serif text-[2.1rem] leading-[1.03] text-foreground sm:text-[2.8rem] lg:text-[3.3rem]">
              {siteConfig.statement}
            </p>

            <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-stoneText sm:text-lg">
              {siteConfig.heroSupport}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/ideas">Explore Ideas</PrimaryButton>
              <SecondaryButton href="/projects">View Projects</SecondaryButton>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {heroDetails.map((detail) => (
                <div className="paper-panel p-4 sm:p-5" key={detail.label}>
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-stoneText/[0.64]">
                    {detail.label}
                  </p>
                  <p className="mt-3 font-serif text-xl leading-tight text-foreground">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedReveal>

          <AnimatedReveal className="relative lg:justify-self-end" delay={0.08}>
            <div className="relative overflow-hidden rounded-[3rem] border border-white/55 bg-[linear-gradient(180deg,#0a1c15_0%,#173826_100%)] p-4 shadow-[0_42px_120px_rgba(5,14,11,0.28)] sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(100,154,124,0.28),transparent_28%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-soft-light bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.18),transparent_22%),repeating-linear-gradient(135deg,rgba(7,17,13,0.22)_0,rgba(7,17,13,0.22)_1px,transparent_1px,transparent_9px)]" />

              <div className="absolute left-6 top-6 z-20">
                <Badge tone="outline">Structured Thinking. Disciplined Action.</Badge>
              </div>

              <div className="relative overflow-hidden rounded-[2.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
                <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]" />
                <div className="relative h-[25rem] sm:h-[35rem]">
                  <Image
                    alt="Portrait placeholder for Philtin Anosike"
                    className="scale-[1.01] object-cover object-center"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    src="/portrait-placeholder.svg"
                  />
                </div>
              </div>

              <div className="relative mt-5 grid gap-4 rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-5 text-white/[0.84] backdrop-blur-xl sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/[0.55]">
                    Leadership perspective
                  </p>
                  <p className="mt-3 max-w-md font-serif text-[1.75rem] leading-tight">
                    Calm, credible leadership shaped by structure rather than noise.
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] px-4 py-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/[0.55]">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    Entrepreneurship, systems, and disciplined execution.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="section-space-sm">
        <Container>
          <AnimatedReveal className="paper-panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[13rem_minmax(0,1fr)_auto] lg:items-end">
            <div className="border-b border-border/70 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-stoneText/[0.64]">
                Bio snapshot
              </p>
              <p className="mt-3 font-serif text-2xl leading-tight text-foreground">
                Built with structure.
              </p>
            </div>
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl leading-[0.98] text-foreground sm:text-5xl">
                Entrepreneurial discipline with a long horizon.
              </h2>
              <p className="mt-5 text-base leading-8 text-stoneText sm:text-lg">
                {siteConfig.bioSnapshot}
              </p>
            </div>
            <SecondaryButton href="/about">Read Full Story</SecondaryButton>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Featured ideas"
            title="Clear thinking for leadership, business, and national development."
            description="Editorial reflections built around accountability, structure, and long-term seriousness."
          />
          <div className="mt-14 grid gap-6 xl:grid-cols-3">
            {featuredIdeas.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
          <div className="mt-10">
            <SecondaryButton href="/ideas">Explore All Articles</SecondaryButton>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,#0a1c15_0%,#163424_100%)] text-white">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/[0.55]">
              Featured video
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[0.98] sm:text-5xl lg:text-[3.65rem]">
              A calm voice in high-pressure conversations.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/[0.72] sm:text-lg">
              A short reflection on why calm thinking is one of the most underrated tools in leadership and decision-making.
            </p>
          </div>
          <VideoCard entry={featuredMedia} featured />
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Current projects"
            title="Execution that turns structure into visible impact."
            description="Selected initiatives focused on mobility, community support, and practical development."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10">
            <SecondaryButton href="/projects">View All Projects</SecondaryButton>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <AnimatedReveal className="paper-panel rounded-[2.6rem] p-8 sm:p-10 lg:grid lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-end lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-stoneText/[0.64]">
                Insights from Philtin
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[0.98] text-foreground sm:text-5xl lg:text-[3.5rem]">
                Thoughts on leadership, business, and national development.
              </h2>
              <p className="mt-5 text-base leading-8 text-stoneText sm:text-lg">
                Shared with clarity and consistency for people building with seriousness.
              </p>
            </div>
            <NewsletterForm className="mt-8 lg:mt-0" compact />
          </AnimatedReveal>
        </Container>
      </section>

      <CTASection
        description="Explore the writing, projects, and reflections shaping a disciplined long-term body of work."
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/newsletter"
        secondaryLabel="Join the newsletter"
        title="A disciplined body of work built for ideas, execution, and future leadership."
      />
    </>
  );
}


