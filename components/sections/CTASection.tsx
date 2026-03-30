import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className
}: CTASectionProps) {
  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <Container>
        <AnimatedReveal className="relative overflow-hidden rounded-[2.4rem] border border-accent/20 bg-[linear-gradient(135deg,rgba(31,29,27,0.98),rgba(44,40,36,0.95))] px-6 py-10 text-white shadow-glow sm:px-10 sm:py-12 lg:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(175,138,78,0.2),transparent_28%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-white/60">
                Continue the conversation
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[0.98] sm:text-5xl lg:text-[3.6rem]">
                {title}
              </h2>
              <p className="mt-4 text-base leading-8 text-white/[0.72] sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton>
              {secondaryHref && secondaryLabel ? (
                <SecondaryButton
                  className="border-white/[0.18] bg-white/10 text-white shadow-none hover:bg-white/15"
                  href={secondaryHref}
                >
                  {secondaryLabel}
                </SecondaryButton>
              ) : null}
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
