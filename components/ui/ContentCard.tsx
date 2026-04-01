import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ContentCardProps = HTMLAttributes<HTMLDivElement>;

export function ContentCard({ className, ...props }: ContentCardProps) {
  return (
    <div
      className={cn(
        "group rounded-[2.15rem] border border-white/60 bg-[linear-gradient(180deg,rgba(249,251,248,0.94),rgba(233,239,234,0.9))] p-7 shadow-card backdrop-blur-sm ring-1 ring-[rgba(14,43,31,0.04)] transition duration-300 hover:-translate-y-[3px] hover:border-accent/[0.24] hover:shadow-glow sm:p-8",
        className
      )}
      {...props}
    />
  );
}
