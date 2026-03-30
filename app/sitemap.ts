import type { MetadataRoute } from "next";

import { articles } from "@/content/articles";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/ideas",
    "/media",
    "/projects",
    "/contact",
    "/newsletter"
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/ideas/${article.slug}`,
    lastModified: new Date(article.publishDate)
  }));

  return [...staticRoutes, ...articleRoutes];
}

