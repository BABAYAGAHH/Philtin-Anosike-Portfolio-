import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import type { MediaEntry } from "@/content/media";
import { Badge } from "@/components/ui/Badge";
import { ContentCard } from "@/components/ui/ContentCard";
import { cn } from "@/lib/utils";

type VideoCardProps = {
  entry: MediaEntry;
  featured?: boolean;
};

export function VideoCard({ entry, featured = false }: VideoCardProps) {
  return (
    <ContentCard
      className={cn(
        "overflow-hidden p-0",
        featured && "grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
      )}
    >
      <div className="relative min-h-72 overflow-hidden bg-[linear-gradient(135deg,rgba(9,23,18,1),rgba(38,83,60,0.88))]">
        <Image
          alt={entry.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          fill
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          src={entry.image}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute left-6 top-6">
          <Badge tone="outline">{entry.label}</Badge>
        </div>
        <div className="absolute bottom-6 left-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.14] bg-white/10 text-white backdrop-blur">
          <Play className="h-5 w-5 fill-current" />
        </div>
      </div>

      <div className="flex flex-col justify-between p-7 sm:p-9">
        <div>
          {!featured ? <Badge className="mb-4">{entry.duration}</Badge> : null}
          <h3
            className={cn(
              "font-serif text-[2rem] leading-[1.02] text-foreground",
              featured && "text-[2.7rem]"
            )}
          >
            {entry.title}
          </h3>
          <p className="mt-4 text-base leading-8 text-stoneText">{entry.description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <span className="text-[0.72rem] uppercase tracking-[0.24em] text-stoneText/[0.64]">
            Duration {entry.duration}
          </span>
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--accent-ink))] transition hover:gap-3"
            href="/media"
          >
            Explore media
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </ContentCard>
  );
}
