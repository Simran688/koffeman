import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const isPreview = Boolean(
    process.env.CF_PAGES_BRANCH &&
      process.env.CF_PAGES_BRANCH !== "main" &&
      process.env.CF_PAGES_BRANCH !== "develop"
  );

  if (isPreview) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
