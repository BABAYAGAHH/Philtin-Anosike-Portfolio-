import type { ButtonHTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export function PrimaryButton({
  href,
  children,
  className,
  type = "button",
  target,
  rel,
  ...props
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex min-h-[3.2rem] items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.16)] bg-[linear-gradient(180deg,rgba(146,111,57,0.98),rgba(106,78,37,1))] px-6 py-3 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_18px_34px_rgba(113,83,41,0.26),inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_24px_40px_rgba(113,83,41,0.32),inset_0_1px_0_rgba(255,255,255,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-70",
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
