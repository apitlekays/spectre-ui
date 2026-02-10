import type { MetadataRoute } from "next";
import { PAGE_METADATA, SITE_CONFIG } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [path, meta] of Object.entries(PAGE_METADATA)) {
    let priority: number;
    let changeFrequency: "weekly" | "monthly";

    switch (meta.category) {
      case "landing":
        priority = 1.0;
        changeFrequency = "weekly";
        break;
      case "guide":
        priority = 0.9;
        changeFrequency = "monthly";
        break;
      case "component":
        priority = 0.8;
        changeFrequency = "monthly";
        break;
      case "hook":
        priority = 0.7;
        changeFrequency = "monthly";
        break;
    }

    entries.push({
      url: `${SITE_CONFIG.url}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    });
  }

  return entries;
}
