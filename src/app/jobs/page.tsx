import type { Metadata } from "next";
import JobCard from "@/components/JobCard";
import { getAllJobs } from "@/lib/jobs";

// Server Component - static HTML for crawlers
export const metadata: Metadata = {
  title: "All Latest Sarkari Naukari Jobs 2026 in Maharashtra",
  description:
    "Complete list of all Maharashtra government job notifications 2026 - Police Bharti, Talathi, MPSC, Teaching, Banking, Defence, Medical and Group C/D vacancies.",
  alternates: { canonical: "/jobs" },
  openGraph: {
    title: "All Latest Maharashtra Government Jobs 2026",
    description:
      "Browse every active Sarkari Naukari notification for Maharashtra with last dates and apply-online links.",
    url: "/jobs",
  },
};

export const revalidate = 3600;

export default function JobsPage() {
  const jobs = getAllJobs();

  return (
    <div className="container">
      <h1>All Latest Sarkari Naukari Jobs 2026 (महाराष्ट्र सरकारी नोकऱ्या)</h1>
      <p style={{ color: "var(--muted)", margin: "8px 0 24px" }}>
        Showing {jobs.length} government job notifications updated daily for
        Maharashtra state candidates.
      </p>
      <div className="grid">
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>
    </div>
  );
}
