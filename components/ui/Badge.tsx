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
          "border-accent/25 bg-[linear-gradient(180deg,rgba(175,138,78,0.14),rgba(175,138,78,0.08))] text-[rgb(var(--accent-ink))]",
        tone === "muted" &&
          "border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(239,233,223,0.78))] text-stoneText/90",
        tone === "outline" &&
          "border-white/[0.15] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] text-white/80",
        className
      )}
      {...props}
    />
  );
}
