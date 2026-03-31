"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <motion.header
      animate={{ y: 0 }}
      className={cn(
        "sticky top-0 z-50 border-b px-3 transition-all duration-300 sm:px-4",
        isScrolled || isOpen
          ? "border-black/[0.08] bg-[rgba(247,243,236,0.92)] shadow-[0_18px_50px_rgba(24,23,21,0.08)] backdrop-blur-2xl"
          : "border-black/[0.06] bg-[rgba(247,243,236,0.78)] backdrop-blur-xl"
      )}
      initial={{ y: -14, opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,15,0.08),transparent_100%)] opacity-50" />

      <Container className="relative flex h-[4.9rem] items-center gap-3">
        <Link className="min-w-0 flex-1 md:flex-none" href="/">
          <span className="block truncate font-serif text-[1.12rem] leading-none text-foreground sm:text-[1.26rem]">
            Philtin Anosike
          </span>
          <span className="mt-1 hidden text-[0.62rem] uppercase tracking-[0.24em] text-stoneText/[0.72] sm:block">
            Calm thinking. Structured execution.
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center md:flex"
        >
          <div className="flex items-center gap-1 rounded-full border border-black/[0.06] bg-white/[0.72] p-1.5 shadow-[0_12px_34px_rgba(24,23,21,0.08)] backdrop-blur">
            {navigationItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-sm font-medium tracking-[0.01em] transition",
                    active
                      ? "bg-[rgb(var(--foreground))] text-white shadow-[0_10px_24px_rgba(24,23,21,0.16)]"
                      : "text-stoneText hover:bg-white hover:text-foreground"
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden md:block">
          <PrimaryButton className="min-h-[2.8rem] px-5" href="/contact">
            Contact
          </PrimaryButton>
        </div>

        <button
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white/[0.88] text-foreground shadow-[0_10px_24px_rgba(24,23,21,0.08)] md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-40 bg-[rgba(20,19,17,0.34)] backdrop-blur-sm md:hidden"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              animate={{ x: 0, opacity: 1 }}
              className="fixed inset-y-4 right-4 z-50 flex w-[min(88vw,24rem)] flex-col rounded-[2.25rem] border border-white/[0.12] bg-[linear-gradient(180deg,#181715_0%,#23211d_100%)] p-6 text-white shadow-2xl md:hidden"
              exit={{ x: 24, opacity: 0 }}
              id="mobile-nav"
              initial={{ x: 32, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="block font-serif text-xl">Philtin Anosike</span>
                  <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.24em] text-white/[0.55]">
                    Calm thinking. Structured execution.
                  </span>
                </div>
                <button
                  aria-label="Close navigation menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-1 flex-col gap-2">
                {navigationItems.map((item) => {
                  const active = isActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      className={cn(
                        "rounded-[1.35rem] border px-4 py-3 text-base transition",
                        active
                          ? "border-white/0 bg-white text-[rgb(var(--foreground))]"
                          : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                      )}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/[0.55]">
                  Current focus
                </p>
                <p className="mt-3 text-sm leading-7 text-white/[0.72]">
                  Entrepreneurship, systems thinking, and disciplined leadership.
                </p>
              </div>

              <PrimaryButton className="mt-6 w-full" href="/contact">
                Contact
              </PrimaryButton>
              <Link
                className="mt-4 text-center text-sm text-white/[0.68] transition hover:text-white"
                href="/newsletter"
              >
                Newsletter
              </Link>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
