"use client";

import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <label className="relative block">
      <span className="sr-only">Search articles</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stoneText/60" />
      <input
        className="h-12 w-full rounded-full border border-border bg-white pl-11 pr-4 text-sm text-foreground outline-none transition placeholder:text-stoneText/[0.55] focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search ideas, themes, and reflections"
        type="search"
        value={value}
      />
    </label>
  );
}

