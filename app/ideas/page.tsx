import { IdeasExplorer } from "@/components/articles/IdeasExplorer";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { articles } from "@/content/articles";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Ideas",
  description:
    "Structured reflections from Philtin Anosike on leadership, business, society, and personal growth.",
  path: "/ideas"
});

export default function IdeasPage() {
  return (
    <>
      <PageHero
        eyebrow="Ideas"
        title="Editorial thinking with structure, clarity, and long-term seriousness."
        description={siteConfig.ideasIntro}
        caption="Leadership, business, society, and personal growth."
      />
      <section className="section-space">
        <Container>
          <IdeasExplorer articles={articles} />
        </Container>
      </section>
    </>
  );
}

