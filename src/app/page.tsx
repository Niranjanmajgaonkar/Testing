import Link from "next/link";
import type { Metadata } from "next";
import JobCard from "@/components/JobCard";
import {
  getAllJobs,
  getFeaturedJobs,
  CATEGORIES,
  SITE_URL,
  formatDate,
} from "@/lib/jobs";

// This is a React Server Component by default (no "use client").
// Entire HTML is rendered on the server => best possible SEO.

export const metadata: Metadata = {
  title:
    "Sarkari Naukari Maharashtra 2026 | Latest Government Jobs in Maharashtra",
  description:
    "Get daily updated Sarkari Naukari alerts for Maharashtra 2026 - MPCB Police Bharti, Talathi Bharti, MPSC Rajyaseva, Teacher, Banking & Group C government jobs with online application links.",
  alternates: { canonical: "/" },
};

export const revalidate = 3600; // ISR: regenerate hourly on the server

export default function HomePage() {
  const jobs = getAllJobs();
  const featured = getFeaturedJobs();
  const latest = jobs.slice(0, 6);

  // JSON-LD structured data generated on the SERVER for rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Sarkari Naukari Maharashtra",
        url: SITE_URL,
        inLanguage: ["en-IN", "mr-IN"],
        description:
          "Latest Maharashtra government job notifications and alerts 2026.",
      },
      {
        "@type": "ItemList",
        name: "Latest Maharashtra Government Jobs 2026",
        itemListElement: jobs.map((job, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "JobPosting",
            title: job.title,
            description: job.description,
            datePosted: job.notificationDate,
            validThrough: job.lastDateToApply,
            hiringOrganization: {
              "@type": "Organization",
              name: job.department,
            },
            totalJobOpenings: job.totalPosts,
            employmentType: "FULL_TIME",
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
            },
            url: `${SITE_URL}/jobs/${job.slug}`,
          },
        })),
      },
    ],
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <h1>
          Sarkari Naukari 2026 - Latest Maharashtra Government Job Alerts
        </h1>
        <p>
          महाराष्ट्रातील सर्व ताज्या सरकारी नोकऱ्या एकाच ठिकाणी. MPCB पोलीस
          भरती, तलाठी भरती, एमपीएससी राज्यसेवा, शिक्षक व ग्रुप क भरती ऑनलाइन
          अर्ज, परीक्षा तारखा व निकाल.
        </p>
      </section>

      <aside className="ticker" aria-label="Breaking job alerts">
        <strong>🔥 Breaking:</strong>{" "}
        {latest[0] && (
          <Link href={`/jobs/${latest[0].slug}`}>
            {latest[0].title} — Last date {formatDate(latest[0].lastDateToApply)}
          </Link>
        )}
        {" | "}
        {latest[1] && (
          <Link href={`/jobs/${latest[1].slug}`}>
            {latest[1].department.split(" - ")[0]} notification out — apply now
          </Link>
        )}
      </aside>

      <nav className="chips" aria-label="Browse jobs by category">
        {(
          Object.entries(CATEGORIES) as [
            keyof typeof CATEGORIES,
            (typeof CATEGORIES)[keyof typeof CATEGORIES],
          ][]
        ).map(([key, cat]) => (
          <Link key={key} href={`/category/${key}`} className="chip">
            {cat.name} · {cat.marathiName}
          </Link>
        ))}
      </nav>

      <h2 className="section-title">⭐ Featured Government Jobs 2026</h2>
      <div className="grid">
        {featured.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>

      <h2 className="section-title">🆕 Latest Job Notifications</h2>
      <div className="grid">
        {latest.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>

      <p style={{ marginTop: 28 }}>
        <Link href="/jobs" className="btn">
          View All Sarkari Naukari Jobs →
        </Link>
      </p>
    </div>
  );
}
