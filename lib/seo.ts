import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

type CreateMetadataArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  image = "/og-image.svg",
  keywords = []
}: CreateMetadataArgs): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: [...siteConfig.seo.keywords, ...keywords],
    alternates: {
      canonical
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.siteName,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)]
    }
  };
}
