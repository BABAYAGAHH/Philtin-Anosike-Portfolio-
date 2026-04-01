import Link from "next/link";

import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/70 bg-[linear-gradient(180deg,rgba(224,232,225,0.96),rgba(210,221,212,0.98))] py-16 sm:py-20">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="max-w-xl">
          <p className="text-[0.72rem] uppercase tracking-[0.3em] text-stoneText/[0.64]">
            Calm thinking. Structured execution.
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[0.98] text-foreground sm:text-5xl">
            {siteConfig.footer.name}
          </h2>
          <p className="mt-4 text-lg leading-8 text-stoneText">
            {siteConfig.footer.statement}
          </p>
          <p className="mt-3 max-w-xl text-sm tracking-[0.05em] text-stoneText/[0.78]">
            {siteConfig.footer.identity}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton className="sm:min-h-[2.95rem]" href="/newsletter">
              Join Newsletter
            </PrimaryButton>
            <SecondaryButton className="sm:min-h-[2.95rem]" href="/contact">
              Contact
            </SecondaryButton>
          </div>
          <SocialLinks className="mt-8" />
        </div>

        <div className="grid gap-6 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <div className="paper-panel p-6">
            <p className="text-[0.72rem] uppercase tracking-[0.26em] text-stoneText/[0.64]">
              Explore
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  className="text-sm text-stoneText transition hover:translate-x-0.5 hover:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="paper-panel p-6">
            <p className="text-[0.72rem] uppercase tracking-[0.26em] text-stoneText/[0.64]">
              Approach
            </p>
            <p className="mt-4 text-sm leading-7 text-stoneText">
              Thoughtful writing, disciplined execution, and a long-term leadership perspective built with clarity and restraint.
            </p>
          </div>
        </div>
      </Container>

      <Container className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 text-sm text-stoneText/75 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} Philtin Anosike. All rights reserved.</p>
        <p>Calm thinking. Structured execution. Long-term vision.</p>
      </Container>
    </footer>
  );
}
