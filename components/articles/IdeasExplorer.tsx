"use client";

import { useDeferredValue, useState } from "react";

import type { Article } from "@/content/articles";
import { articleCategories } from "@/content/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { SearchInput } from "@/components/ui/SearchInput";

type IdeasExplorerProps = {
  articles: Article[];
};

export function IdeasExplorer({ articles }: IdeasExplorerProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const featuredArticle = articles.find((article) => article.featured) ?? articles[0];
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesQuery =
      deferredQuery.length === 0 ||
      `${article.title} ${article.excerpt} ${article.category}`
        .toLowerCase()
        .includes(deferredQuery);

    return matchesCategory && matchesQuery && article.slug !== featuredArticle.slug;
  });

  return (
    <div className="space-y-12">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center">
        <CategoryFilter
          activeCategory={activeCategory}
          categories={["All", ...articleCategories]}
          onSelect={setActiveCategory}
        />
        <SearchInput onChange={setQuery} value={query} />
      </div>

      <ArticleCard article={featuredArticle} featured />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </div>

      {filteredArticles.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-border bg-surface px-6 py-10 text-center text-stoneText">
          No articles match that search yet. Try a broader theme or another category.
        </div>
      ) : null}
    </div>
  );
}

