import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}

export function absoluteUrl(path = "/") {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.APP_URL ||
    "https://philtin-anosike-portfolio.vercel.app";

  return new URL(path, url).toString();
}
