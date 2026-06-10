import type { MetadataRoute } from "next"

import { siteConfig, navItems } from "@/content/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return navItems.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified,
  }))
}
