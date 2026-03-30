import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {siteConfig.socialLinks.map((item) =>
        item.href ? (
          <Link
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-stoneText transition hover:border-accent/40 hover:text-foreground"
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{item.label}</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ) : (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-dashed border-border bg-surface px-4 py-2 text-sm text-stoneText/75"
          >
            <span>{item.label}</span>
            <Clock3 className="h-4 w-4" />
          </span>
        )
      )}
    </div>
  );
}

