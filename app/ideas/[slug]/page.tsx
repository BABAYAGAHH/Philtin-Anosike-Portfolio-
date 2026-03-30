import type { Metadata } from "next";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/articles/ArticleCard";
import { ArticleShareBar } from "@/components/articles/ArticleShareBar";
import { AuthorBox } from "@/components/articles/AuthorBox";
import { ReadingProgressBar } from "@/components/articles/ReadingProgressBar";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { articles, getArticleBySlug, type ArticleBlock } from "@/content/articles";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return createMetadata({
      title: "Article not found",
      description: "The requested article could not be found.",
      path: `/ideas/${slug}`
    });
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/ideas/${article.slug}`,
    keywords: [article.category, "Philtin Anosike articles", "leadership essays"]
  });
}

function renderBlock(block: ArticleBlock, index: number) {
  if (block.type === "paragraph") {
    return <p key={`${block.type}-${index}`}>{block.content}</p>;
  }

  if (block.type === "heading") {
    return <h2 key={`${block.type}-${index}`}>{block.content}</h2>;
  }

  if (block.type === "quote") {
    return (
      <blockquote
        key={`${block.type}-${index}`}
        className="rounded-[1.9rem] border border-accent/[0.18] bg-[linear-gradient(180deg,rgba(175,138,78,0.1),rgba(255,255,255,0.86))] px-6 py-6 font-serif text-[1.85rem] leading-[1.16] text-foreground"
      >
        &ldquo;{block.content}&rdquo;
      </blockquote>
    );
  }

  return (
    <ul key={`${block.type}-${index}`}>
      {block.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function IdeaArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(
      (entry) => entry.slug !== article.slug && entry.category === article.category
    )
    .slice(0, 2);

  return (
    <>
      <ReadingProgressBar />

      <article>
        <section className="relative overflow-hidden border-b border-border/70 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(175,138,78,0.14),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.8),transparent_24%)]" />

          <Container className="relative">
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-stoneText transition hover:text-foreground"
              href="/ideas"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to ideas
            </Link>

            <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{article.category}</Badge>
                  <span className="text-[0.72rem] uppercase tracking-[0.28em] text-stoneText/[0.62]">
                    PhiltinAnosike.com Journal
                  </span>
                </div>
                <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.92] text-foreground sm:text-[4.6rem] lg:text-[5.4rem]">
                  {article.title}
                </h1>
                <p className="mt-8 max-w-3xl text-[1.15rem] leading-9 text-stoneText sm:text-[1.3rem]">
                  {article.excerpt}
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-[0.74rem] uppercase tracking-[0.24em] text-stoneText/[0.68]">
                  <span>{formatDate(article.publishDate)}</span>
                  <span aria-hidden="true">/</span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="paper-panel p-6 sm:p-7">
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-stoneText/[0.64]">
                  Key idea
                </p>
                <p className="mt-4 font-serif text-[1.9rem] leading-[1.12] text-foreground">
                  {article.featuredQuote}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-space-sm">
          <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem]">
            <div className="publication-shell px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
              <QuoteBlock
                className="mb-10"
                quote={article.featuredQuote}
                citation="Featured quote"
              />

              <div className="article-prose">
                {article.blocks.map((block, index) => renderBlock(block, index))}
              </div>

              <div className="mt-14 border-t border-border/60 pt-10">
                <AuthorBox />
              </div>
            </div>

            <aside className="self-start lg:sticky lg:top-28">
              <div className="space-y-4 rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(248,244,237,0.92))] p-6 shadow-card">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-stoneText/[0.64]">
                    Publication note
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stoneText">
                    Thoughtful essays on leadership, business, and national development.
                  </p>
                </div>

                <div className="border-t border-border/60 pt-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-stoneText/[0.64]">
                    Share this article
                  </p>
                  <div className="mt-4">
                    <ArticleShareBar slug={article.slug} title={article.title} />
                  </div>
                </div>
              </div>
            </aside>
          </Container>
        </section>

        <section className="section-space-sm border-t border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent)]">
          <Container>
            <SectionHeading
              eyebrow="Related articles"
              title="Continue reading"
              description="Further reflections in the same editorial territory."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedArticles.map((entry) => (
                <ArticleCard article={entry} key={entry.slug} />
              ))}
            </div>
          </Container>
        </section>
      </article>
    </>
  );
}
