import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllJobs,
  getJobBySlug,
  formatDate,
  isOpen,
  daysLeft,
  getCategoryInfo,
  SITE_URL,
} from "@/lib/jobs";

// Server Component + Static Generation for maximum SEO performance.
// Every job page is pre-rendered at build time via generateStaticParams.

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllJobs().map((job) => ({ slug: job.slug }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getJobBySlug(params.slug);
  if (!job) return {};

  return {
    title: `${job.title} - Apply Online, Last Date & Details`,
    description: `${job.description.substring(0, 155)} Total ${job.totalPosts.toLocaleString("en-IN")} posts. Last date to apply: ${formatDate(job.lastDateToApply)}.`,
    keywords: [
      job.title,
      job.marathiTitle,
      `${job.department} jobs 2026`,
      "sarkari naukari maharashtra",
      "apply online",
    ],
    alternates: { canonical: `/jobs/${job.slug}` },
    openGraph: {
      title: `${job.title} | Maharashtra Govt Job 2026`,
      description: job.description,
      url: `${SITE_URL}/jobs/${job.slug}`,
      type: "article",
      publishedTime: job.notificationDate,
    },
  };
}

export default function JobDetailPage({ params }: Props) {
  const job = getJobBySlug(params.slug);
  if (!job) notFound();

  const cat = getCategoryInfo(job.category);
  const open = isOpen(job);

  // JobPosting JSON-LD (server rendered) → Google Jobs rich results
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: `<p>${job.description}</p><p>Eligibility: ${job.eligibility}</p><p>Selection: ${job.selectionProcess.join(", ")}</p>`,
    datePosted: job.notificationDate,
    validThrough: `${job.lastDateToApply}T23:59:59+05:30`,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: job.department,
      sameAs: job.importantLinks.notification,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    totalJobOpenings: job.totalPosts,
    directApplyUrl: job.importantLinks.applyOnline,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Latest Jobs",
        item: `${SITE_URL}/jobs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: job.title,
        item: `${SITE_URL}/jobs/${job.slug}`,
      },
    ],
  };

  return (
    <article className="container job-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link> › <Link href="/jobs">Latest Jobs</Link> ›{" "}
        <Link href={`/category/${job.category}`}>{cat.name}</Link>
      </nav>

      <h1>{job.title}</h1>
      <p className="marathi">{job.marathiTitle}</p>

      <div className="badges" style={{ margin: "12px 0" }}>
        <span className={`badge ${open ? "open" : "closed"}`}>
          {open ? `Application Open • ${daysLeft(job)} days left` : "Applications Closed"}
        </span>
        <span className="badge dept">{job.department}</span>
      </div>

      <p className="prose">{job.description}</p>

      <h2 className="section-title">Vacancy & Important Dates (रिक्त पदे व तारखा)</h2>
      <table className="info-table">
        <tbody>
          <tr>
            <th scope="row">Total Posts</th>
            <td>{job.totalPosts.toLocaleString("en-IN")}</td>
          </tr>
          <tr>
            <th scope="row">Notification Date</th>
            <td>
              <time dateTime={job.notificationDate}>{formatDate(job.notificationDate)}</time>
            </td>
          </tr>
          <tr>
            <th scope="row">Start Date to Apply</th>
            <td>
              <time dateTime={job.applicationStartDate}>{formatDate(job.applicationStartDate)}</time>
            </td>
          </tr>
          <tr>
            <th scope="row">Last Date to Apply</th>
            <td>
              <strong>
                <time dateTime={job.lastDateToApply}>{formatDate(job.lastDateToApply)}</time>
              </strong>
            </td>
          </tr>
          {job.examDate && (
            <tr>
              <th scope="row">Exam Date</th>
              <td>
                <time dateTime={job.examDate}>{formatDate(job.examDate)}</time>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <h2 className="section-title">Eligibility Criteria (पात्रता)</h2>
      <table className="info-table">
        <tbody>
          <tr>
            <th scope="row">Educational Qualification</th>
            <td>{job.eligibility}</td>
          </tr>
          <tr>
            <th scope="row">Age Limit</th>
            <td>{job.ageLimit}</td>
          </tr>
          <tr>
            <th scope="row">Application Fee</th>
            <td>{job.applicationFee}</td>
          </tr>
        </tbody>
      </table>

      <h2 className="section-title">Selection Process (निवड प्रक्रिया)</h2>
      <ol className="steps">
        {job.selectionProcess.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h2 className="section-title">Important Links (महत्त्वाच्या लिंक्स)</h2>
      <table className="info-table">
        <tbody>
          <tr>
            <th scope="row">Download Notification</th>
            <td>
              <a
                href={job.importantLinks.notification}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Official Notification PDF →
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">Apply Online</th>
            <td>
              {open ? (
                <a
                  href={job.importantLinks.applyOnline}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn"
                >
                  Apply Now on Official Website
                </a>
              ) : (
                <span style={{ color: "var(--danger)", fontWeight: 700 }}>
                  Applications closed
                </span>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="section-title">FAQ - {job.title}</h2>
      <div className="prose">
        <p>
          <strong>Q. What is the last date to apply for {job.title}?</strong>
          <br />
          A. The last date to submit the online application is{" "}
          {formatDate(job.lastDateToApply)}.
        </p>
        <p>
          <strong>Q. How many vacancies are available?</strong>
          <br />
          A. A total of {job.totalPosts.toLocaleString("en-IN")} posts are
          available under this {cat.name} recruitment in Maharashtra.
        </p>
        <p>
          <strong>Q. Where can I apply online?</strong>
          <br />A. Candidates can apply through the official website{" "}
          {job.importantLinks.applyOnline}.
        </p>
      </div>
    </article>
  );
}
