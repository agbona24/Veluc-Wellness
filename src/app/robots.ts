import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://veluc.online";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Allow AI crawlers explicitly
      { userAgent: "GPTBot",       allow: "/" },
      { userAgent: "Claude-Web",   allow: "/" },
      { userAgent: "PerplexityBot",allow: "/" },
      { userAgent: "Googlebot",    allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
