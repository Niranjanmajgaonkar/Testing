import { getAllJobs, SITE_URL } from "@/lib/jobs";

// Server-side generated XML sitemap for search engines
export default async function sitemap() {
  const now = new Date();

  const jobUrls = getAllJobs().map((job) => ({
    url: `${SITE_URL}/jobs/${job.slug}`,
    lastModified: new Date(job.notificationDate),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const categoryUrls = [
    "police",
    "talathi",
    "mpsc",
    "banking",
    "teaching",
    "group-c",
    "defence",
    "medical",
  ].map((c) => ({
    url: `${SITE_URL}/category/${c}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const staticUrls = [
    { url: SITE_URL, lastModified: now, changeFrequency: "hourly" as const, priority: 1.0 },
    { url: `${SITE_URL}/jobs`, lastModified: now, changeFrequency: "hourly" as const, priority: 0.95 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return [...staticUrls, ...categoryUrls, ...jobUrls];
}
