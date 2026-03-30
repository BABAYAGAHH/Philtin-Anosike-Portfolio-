import { ProjectCard } from "@/components/projects/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Case-study style projects from Philtin Anosike focused on structured mobility, community support, and practical development.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Execution that demonstrates structure, discipline, and practical impact."
        description={siteConfig.projectsIntro}
        caption="Ideas matter. Execution makes them credible."
      />
      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Featured projects"
            title="Proof of execution, not portfolio filler."
            description="Each initiative is framed as a practical response to real friction, with structure and long-term usefulness in view."
          />
          <div className="mt-12 grid gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="case-study" />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        description="Reach out for collaboration, thoughtful partnerships, or leadership conversations rooted in practical execution."
        primaryHref="/contact"
        primaryLabel="Contact Philtin"
        secondaryHref="/ideas"
        secondaryLabel="Read the ideas"
        title="Execution becomes more persuasive when its structure is visible."
      />
    </>
  );
}

