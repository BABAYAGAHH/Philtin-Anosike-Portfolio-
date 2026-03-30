"use client";

import { cn } from "@/lib/utils";

type CategoryFilterProps = {
  categories: readonly string[];
  activeCategory: string;
  onSelect: (category: string) => void;
};

export function CategoryFilter({
  categories,
  activeCategory,
  onSelect
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive
                ? "border-accent/30 bg-accent/10 text-[rgb(var(--accent-ink))]"
                : "border-border bg-white text-stoneText hover:border-accent/30 hover:text-foreground"
            )}
            onClick={() => onSelect(category)}
            type="button"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

