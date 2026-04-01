"use client";

import { useState } from "react";

import { Copy, Linkedin, Share2 } from "lucide-react";

import { absoluteUrl } from "@/lib/utils";

type ArticleShareBarProps = {
  slug: string;
  title: string;
};

export function ArticleShareBar({ slug, title }: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = absoluteUrl(`/ideas/${slug}`);

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        url: shareUrl
      });
      return;
    }

    await copyLink();
  };

  const buttonClassName =
    "inline-flex min-h-[2.85rem] items-center gap-2 rounded-full border border-white/70 bg-[linear-gradient(180deg,rgba(249,251,248,0.92),rgba(233,239,234,0.92))] px-4 text-sm text-stoneText shadow-[0_10px_24px_rgba(11,25,19,0.06)] transition hover:-translate-y-[1px] hover:border-accent/30 hover:text-foreground";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button className={buttonClassName} onClick={handleShare} type="button">
        <Share2 className="h-4 w-4" />
        Share
      </button>
      <button className={buttonClassName} onClick={copyLink} type="button">
        <Copy className="h-4 w-4" />
        {copied ? "Copied" : "Copy link"}
      </button>
      <a
        className={buttonClassName}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        rel="noreferrer"
        target="_blank"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </a>
    </div>
  );
}
