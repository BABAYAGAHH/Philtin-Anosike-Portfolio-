import type { HTMLAttributes } from "react";

import { Quote } from "lucide-react";

import { cn } from "@/lib/utils";

type QuoteBlockProps = HTMLAttributes<HTMLDivElement> & {
  quote: string;
  citation?: string;
  inverted?: boolean;
};

export function QuoteBlock({
  quote,
  citation,
  inverted = false,
  className,
  ...props
}: QuoteBlockProps) {
  return (
    <div
      className={cn(
        "rounded-[2.2rem] border px-6 py-8 sm:px-8 sm:py-10",
        inverted
          ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] text-white"
          : "border-accent/[0.18] bg-[linear-gradient(145deg,rgba(175,138,78,0.09),rgba(255,255,255,0.88))] text-foreground shadow-card",
        className
      )}
      {...props}
    >
      <Quote
        className={cn(
          "mb-5 h-7 w-7",
          inverted ? "text-white/70" : "text-[rgb(var(--accent-ink))]"
        )}
      />
      <p className="max-w-4xl font-serif text-[1.9rem] leading-[1.15] sm:text-[2.35rem]">
        {quote}
      </p>
      {citation ? (
        <p
          className={cn(
            "mt-6 text-sm uppercase tracking-[0.24em]",
            inverted ? "text-white/70" : "text-stoneText/75"
          )}
        >
          {citation}
        </p>
      ) : null}
    </div>
  );
}
