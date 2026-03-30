import { siteConfig } from "@/content/site";

export function AuthorBox() {
  return (
    <div className="rounded-[2.15rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,244,237,0.84))] p-6 shadow-card sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(175,138,78,0.26),rgba(255,255,255,0.96))] font-serif text-2xl text-[rgb(var(--accent-ink))] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
          PA
        </div>
        <div className="max-w-2xl">
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-stoneText/[0.7]">
            Written by
          </p>
          <h3 className="mt-2 font-serif text-[2rem] leading-tight text-foreground">
            {siteConfig.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-stoneText">
            Entrepreneur, systems thinker, and advocate for disciplined leadership with a long-term interest in business structure, accountability, and national development.
          </p>
        </div>
      </div>
    </div>
  );
}
