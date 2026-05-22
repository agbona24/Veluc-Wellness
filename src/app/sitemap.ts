import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://veluc.online";
  const now = new Date();
  return [
    { url: siteUrl,                         lastModified: now, changeFrequency: "weekly", priority: 1   },
    { url: `${siteUrl}/privacy-policy`,     lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`,              lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/refund-policy`,      lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/contact`,            lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
