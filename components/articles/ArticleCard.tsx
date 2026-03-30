import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Article } from "@/content/articles";
import { Badge } from "@/components/ui/Badge";
import { ContentCard } from "@/components/ui/ContentCard";
import { cn, formatDate } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
};

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <ContentCard
      className={cn(
        "flex h-full flex-col justify-between gap-10",
        featured && "lg:grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12 lg:p-10"
      )}
    >
      <div className={cn("max-w-2xl", featured && "space-y-6")}>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{article.category}</Badge>
          {featured ? (
            <span className="text-[0.72rem] uppercase tracking-[0.24em] text-stoneText/[0.64]">
              Featured essay
            </span>
          ) : null}
        </div>

        <div className="mt-6 space-y-4">
          <h3
            className={cn(
              "font-serif text-[2rem] leading-[1.02] text-foreground sm:text-[2.35rem]",
              featured && "sm:text-[3.8rem]"
            )}
          >
            {article.title}
          </h3>
          <p
            className={cn(
              "max-w-2xl text-base leading-8 text-stoneText",
              featured && "text-[1.06rem] sm:text-lg"
            )}
          >
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className={cn("flex flex-col gap-5", featured && "justify-end")}>
        <div className="flex flex-wrap gap-3 text-sm text-stoneText/[0.72]">
          <span>{formatDate(article.publishDate)}</span>
          <span aria-hidden="true">/</span>
          <span>{article.readTime}</span>
        </div>

        <blockquote className="rounded-[1.75rem] border border-accent/[0.16] bg-[linear-gradient(180deg,rgba(175,138,78,0.12),rgba(255,255,255,0.9))] px-5 py-5 text-base leading-7 text-foreground">
          &ldquo;{article.featuredQuote}&rdquo;
        </blockquote>

        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--accent-ink))] transition hover:gap-3"
          href={`/ideas/${article.slug}`}
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </ContentCard>
  );
}
