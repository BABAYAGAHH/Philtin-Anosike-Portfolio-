import type { ReactNode } from "react";

import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  caption?: string;
  children?: ReactNode;
  dark?: boolean;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  caption,
  children,
  dark = false,
  className
}: PageHeroProps) {
  const paragraphs = description.split("\n\n");

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-28",
        dark
          ? "bg-[linear-gradient(180deg,#171614_0%,#22201d_100%)] text-white"
          : "bg-[linear-gradient(180deg,rgba(255,251,244,0.92)_0%,rgba(249,246,240,0.75)_100%)]",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          dark
            ? "bg-[radial-gradient(circle_at_18%_12%,rgba(175,138,78,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.08),transparent_22%)]"
            : "bg-[radial-gradient(circle_at_16%_10%,rgba(175,138,78,0.14),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(255,255,255,0.66),transparent_22%)]"
        )}
      />
      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
        <AnimatedReveal className="max-w-4xl">
          {eyebrow ? (
            <div className="mb-6 flex items-center gap-4">
              <Badge tone={dark ? "outline" : "accent"}>{eyebrow}</Badge>
              <span
                className={cn(
                  "h-px w-16",
                  dark
                    ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.45),transparent)]"
                    : "bg-[linear-gradient(90deg,rgba(175,138,78,0.55),transparent)]"
                )}
              />
            </div>
          ) : null}
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.93] sm:text-6xl lg:text-[5.1rem]">
            {title}
          </h1>
          <div
            className={cn(
              "mt-7 max-w-3xl space-y-4 text-base leading-8 sm:text-lg",
              dark ? "text-white/[0.78]" : "text-stoneText"
            )}
          >
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AnimatedReveal>
        {(children || caption) ? (
          <AnimatedReveal
            className={cn(
              "rounded-[2rem] border p-6 shadow-card sm:p-7",
              dark
                ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] text-white/75"
                : "border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,242,234,0.88))] text-stoneText"
            )}
            delay={0.1}
          >
            {children}
            {caption ? (
              <p className="text-sm leading-7 tracking-[0.01em]">{caption}</p>
            ) : null}
          </AnimatedReveal>
        ) : null}
      </Container>
    </section>
  );
}
