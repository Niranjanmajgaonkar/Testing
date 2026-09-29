import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/jobs";

// robots.txt served by the server - allows all crawlers, points to sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
