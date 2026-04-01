import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "accent" | "muted" | "outline";
};

export function Badge({
  className,
  tone = "accent",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em]",
        tone === "accent" &&
          "border-accent/20 bg-[linear-gradient(180deg,rgba(46,98,71,0.12),rgba(46,98,71,0.06))] text-[rgb(var(--accent-ink))]",
        tone === "muted" &&
          "border-border/70 bg-[linear-gradient(180deg,rgba(249,251,248,0.7),rgba(231,238,232,0.82))] text-stoneText/90",
        tone === "outline" &&
          "border-white/[0.14] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] text-white/[0.82]",
        className
      )}
      {...props}
    />
  );
}

