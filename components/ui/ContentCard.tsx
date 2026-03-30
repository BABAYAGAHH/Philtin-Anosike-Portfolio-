import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ContentCardProps = HTMLAttributes<HTMLDivElement>;

export function ContentCard({ className, ...props }: ContentCardProps) {
  return (
    <div
      className={cn(
        "group rounded-[2.15rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,244,237,0.86))] p-7 shadow-card backdrop-blur-sm ring-1 ring-black/[0.02] transition duration-300 hover:-translate-y-[3px] hover:border-accent/[0.28] hover:shadow-glow sm:p-8",
        className
      )}
      {...props}
    />
  );
}
