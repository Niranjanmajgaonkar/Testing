import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Sarkari Naukari Maharashtra",
  description:
    "Know about Sarkari Naukari Maharashtra - a fast, SEO-first portal for latest Maharashtra government job alerts in Marathi and English.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container prose">
      <h1>About Sarkari Naukari Maharashtra</h1>
      <p style={{ marginTop: 12 }}>
        Sarkari Naukari Maharashtra (सरकारी नोकरी महाराष्ट्र) is a dedicated
        job-alert portal that brings every Maharashtra government recruitment
        notification to one place — MPCB Police Bharti, Talathi Bharti, MPSC
        Rajyaseva & Group C, Teacher Recruitment, Banking, Defence and Medical
        jobs.
      </p>
      <h2 className="section-title">Our Mission (आमचे ध्येय)</h2>
      <p>
        Thousands of Maharashtra students miss government job deadlines because
        notifications are scattered across dozens of department websites. Our
        mission is to make every Sarkari naukri alert accessible within seconds,
        in both Marathi and English, on any device.
      </p>
      <h2 className="section-title">How We Work</h2>
      <ul className="steps">
        <li>Notifications are verified against official department websites.</li>
        <li>Every listing includes vacancy count, eligibility, fees and last date.</li>
        <li>Direct apply-online links point only to official government portals.</li>
      </ul>
      <h2 className="section-title">Disclaimer</h2>
      <p>
        This website is not an official Government of Maharashtra portal. We
        re-publish publicly available information for student convenience.
        Candidates must verify all details from the respective official
        recruitment websites before applying.
      </p>
      <p style={{ marginTop: 16 }}>
        <Link href="/jobs" className="btn">
          Browse Latest Jobs →
        </Link>
      </p>
    </div>
  );
}
