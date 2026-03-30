import type { ButtonHTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export function SecondaryButton({
  href,
  children,
  className,
  type = "button",
  target,
  rel,
  ...props
}: SecondaryButtonProps) {
  const classes = cn(
    "inline-flex min-h-[3.2rem] items-center justify-center gap-2 rounded-full border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(250,246,239,0.92))] px-6 py-3 text-sm font-semibold tracking-[0.01em] text-foreground shadow-[0_10px_24px_rgba(24,23,21,0.05),inset_0_1px_0_rgba(255,255,255,0.7)] transition duration-300 hover:-translate-y-[1px] hover:border-accent/[0.35] hover:bg-white hover:shadow-[0_18px_32px_rgba(24,23,21,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-70",
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href} rel={rel} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
