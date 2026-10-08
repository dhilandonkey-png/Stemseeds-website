import type { MetadataRoute } from "next";

import { site } from "@/content/site";

const pages = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/team", priority: 0.7 },
  { path: "/join-us", priority: 0.9 },
  { path: "/impact", priority: 0.9 },
  { path: "/stem-kit", priority: 0.8 },
  { path: "/donate", priority: 0.9 },
  { path: "/request-kits", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
