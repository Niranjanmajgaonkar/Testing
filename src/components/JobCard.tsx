import Link from "next/link";
import type { Job } from "@/lib/jobs";
import { formatDate, isOpen, daysLeft, getCategoryInfo } from "@/lib/jobs";

// Pure Server Component - fully rendered on server for SEO
export default function JobCard({ job }: { job: Job }) {
  const cat = getCategoryInfo(job.category);
  const open = isOpen(job);

  return (
    <article className="card" itemScope itemType="https://schema.org/JobPosting">
      <div className="badges">
        <span className={`badge ${open ? "open" : "closed"}`}>
          {open ? `OPEN • ${daysLeft(job)} days left` : "CLOSED"}
        </span>
        <span className="badge dept">{job.department.split(" - ")[0]}</span>
        <span className="badge">{cat.name}</span>
      </div>

      <h3 itemProp="title">
        <Link href={`/jobs/${job.slug}`}>{job.title}</Link>
      </h3>
      <p className="marathi">{job.marathiTitle}</p>

      <div className="meta">
        <p>
          Total Posts:{" "}
          <b itemProp="totalJobOpenings">
            {job.totalPosts.toLocaleString("en-IN")}
          </b>
        </p>
        <p>
          Last Date:{" "}
          <b>
            <time itemProp="validThrough" dateTime={job.lastDateToApply}>
              {formatDate(job.lastDateToApply)}
            </time>
          </b>
        </p>
        {job.examDate && (
          <p>
            Exam Date: <b>{formatDate(job.examDate)}</b>
          </p>
        )}
      </div>

      <div className="btn-row">
        <Link href={`/jobs/${job.slug}`} className="btn outline">
          View Details
        </Link>
        {open && (
          <a
            href={job.importantLinks.applyOnline}
            className="btn"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Apply Online
          </a>
        )}
      </div>
    </article>
  );
}
