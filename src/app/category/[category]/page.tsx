import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JobCard from "@/components/JobCard";
import {
  CATEGORIES,
  isValidCategory,
  getJobsByCategory,
  getCategoryInfo,
  SITE_URL,
  type JobCategory,
} from "@/lib/jobs";

// Server Component with static pre-rendering of all category pages.

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return (Object.keys(CATEGORIES) as JobCategory[]).map((category) => ({
    category,
  }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isValidCategory(params.category)) return {};
  const cat = getCategoryInfo(params.category as JobCategory);

  return {
    title: `${cat.name} 2026 - ${cat.marathiName} | Maharashtra Government Jobs`,
    description: `Latest ${cat.name} notifications 2026 in Maharashtra (${cat.marathiName}). Online application forms, vacancies, eligibility, exam dates and results.`,
    keywords: [
      `${cat.name.toLowerCase()} 2026`,
      cat.marathiName,
      "maharashtra government jobs",
      "sarkari naukari",
    ],
    alternates: { canonical: `/category/${params.category}` },
    openGraph: {
      title: `${cat.name} 2026 | Sarkari Naukari Maharashtra`,
      description: `All active ${cat.name} job notifications for Maharashtra candidates.`,
      url: `${SITE_URL}/category/${params.category}`,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  if (!isValidCategory(params.category)) notFound();

  const category = params.category as JobCategory;
  const cat = getCategoryInfo(category);
  const jobs = getJobsByCategory(category);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: cat.name,
        item: `${SITE_URL}/category/${category}`,
      },
    ],
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link> › <span>{cat.name}</span>
      </nav>

      <h1>
        {cat.name} 2026 - Maharashtra Government Jobs ({cat.marathiName})
      </h1>
      <p style={{ color: "var(--muted)", margin: "8px 0 20px" }}>
        {jobs.length} active notification{jobs.length === 1 ? "" : "s"} found in{" "}
        {cat.name} for Maharashtra state.
      </p>

      <nav className="chips" aria-label="All categories">
        {(
          Object.entries(CATEGORIES) as [
            JobCategory,
            (typeof CATEGORIES)[JobCategory],
          ][]
        ).map(([key, c]) => (
          <Link
            key={key}
            href={`/category/${key}`}
            className="chip"
            style={key === category ? { borderColor: "var(--primary)", background: "#fff2e5" } : undefined}
            aria-current={key === category ? "page" : undefined}
          >
            {c.name}
          </Link>
        ))}
      </nav>

      {jobs.length > 0 ? (
        <div className="grid">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      ) : (
        <p>No current openings in this category. Check back soon.</p>
      )}
    </div>
  );
}
