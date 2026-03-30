import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left"
}: SectionHeadingProps) {
  return (
    <AnimatedReveal
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-6 flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          <Badge>{eyebrow}</Badge>
          <span className="h-px w-16 bg-[linear-gradient(90deg,rgba(175,138,78,0.55),transparent)]" />
        </div>
      ) : null}
      <h2 className="max-w-4xl font-serif text-[2.75rem] leading-[0.96] text-foreground sm:text-5xl lg:text-[3.65rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-stoneText sm:text-lg">
          {description}
        </p>
      ) : null}
    </AnimatedReveal>
  );
}
