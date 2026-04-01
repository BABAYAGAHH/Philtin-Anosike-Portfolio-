"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const mobileMenu =
    isMounted && typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {isOpen ? (
              <>
                <motion.div
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 z-[60] bg-[rgba(4,12,9,0.48)] backdrop-blur-sm md:hidden"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                />
                <motion.aside
                  animate={{ x: 0, opacity: 1 }}
                  aria-modal="true"
                  className="fixed inset-y-4 right-4 z-[70] flex max-h-[calc(100vh-2rem)] w-[min(88vw,24rem)] flex-col overflow-y-auto rounded-[2.25rem] border border-white/[0.1] bg-[linear-gradient(180deg,rgba(9,25,19,0.99),rgba(18,47,35,0.99))] p-6 text-white shadow-[0_28px_72px_rgba(4,12,9,0.42)] md:hidden"
                  exit={{ x: 24, opacity: 0 }}
                  id="mobile-nav"
                  initial={{ x: 32, opacity: 0 }}
                  role="dialog"
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_28%),repeating-linear-gradient(135deg,rgba(255,255,255,0.07)_0,rgba(255,255,255,0.07)_1px,transparent_1px,transparent_11px)]" />

                  <div className="relative flex items-center justify-between">
                    <div>
                      <span className="block font-serif text-xl">Philtin Anosike</span>
                      <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.24em] text-white/[0.55]">
                        Calm thinking. Structured execution.
                      </span>
                    </div>
                    <button
                      aria-label="Close navigation menu"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.08]"
                      onClick={() => setIsOpen(false)}
                      type="button"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="relative mt-10 flex flex-1 flex-col gap-2">
                    {navigationItems.map((item) => {
                      const active = isActive(pathname, item.href);

                      return (
                        <Link
                          key={item.href}
                          className={cn(
                            "rounded-[1.35rem] border px-4 py-3 text-base transition",
                            active
                              ? "border-white/0 bg-[linear-gradient(180deg,rgba(247,250,247,0.98),rgba(225,234,227,0.96))] text-[rgb(var(--accent-deep))] shadow-[0_10px_24px_rgba(5,14,11,0.18)]"
                              : "border-white/10 bg-white/[0.08] text-white/[0.82] hover:bg-white/[0.12] hover:text-white"
                          )}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="relative mt-8 rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/[0.55]">
                      Current focus
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/[0.72]">
                      Entrepreneurship, systems thinking, and disciplined leadership.
                    </p>
                  </div>

                  <PrimaryButton className="relative mt-6 w-full" href="/contact">
                    Contact
                  </PrimaryButton>
                  <Link
                    className="relative mt-4 text-center text-sm text-white/[0.68] transition hover:text-white"
                    href="/newsletter"
                  >
                    Newsletter
                  </Link>
                </motion.aside>
              </>
            ) : null}
          </AnimatePresence>,
          document.body
        )
      : null;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b px-3 transition-all duration-300 sm:px-4",
          isScrolled || isOpen
            ? "border-white/[0.08] bg-[rgba(10,28,21,0.96)] shadow-[0_20px_54px_rgba(5,14,11,0.22)] backdrop-blur-2xl"
            : "border-white/[0.06] bg-[rgba(10,28,21,0.92)] shadow-[0_12px_32px_rgba(5,14,11,0.16)] backdrop-blur-xl"
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_100%)] opacity-70" />
        <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.07)_0,rgba(255,255,255,0.07)_1px,transparent_1px,transparent_10px)]" />

        <Container className="relative flex h-[4.9rem] items-center justify-between gap-3">
          <Link className="min-w-0 flex-1 md:flex-none" href="/">
            <span className="block truncate font-serif text-[1.12rem] leading-none text-white sm:text-[1.26rem]">
              Philtin Anosike
            </span>
            <span className="mt-1 hidden text-[0.62rem] uppercase tracking-[0.24em] text-white/[0.58] sm:block">
              Calm thinking. Structured execution.
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center justify-center md:flex"
          >
            <div className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.06] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
              {navigationItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    className={cn(
                      "rounded-full px-4 py-2.5 text-sm font-medium tracking-[0.01em] transition",
                      active
                        ? "bg-[linear-gradient(180deg,rgba(246,249,246,0.98),rgba(226,235,228,0.96))] text-[rgb(var(--accent-deep))] shadow-[0_10px_24px_rgba(5,14,11,0.18)]"
                        : "text-white/[0.74] hover:bg-white/[0.08] hover:text-white"
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
            <PrimaryButton className="min-h-[2.8rem] px-5 shadow-[0_14px_30px_rgba(5,14,11,0.22)]" href="/contact">
              Contact
            </PrimaryButton>
          </div>

          <button
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 text-white shadow-[0_12px_28px_rgba(5,14,11,0.18)] md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="text-sm font-medium tracking-[0.02em]">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>
        </Container>
      </header>
      {mobileMenu}
    </>
  );
}
