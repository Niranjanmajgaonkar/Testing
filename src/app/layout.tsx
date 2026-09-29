import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/jobs";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Sarkari Naukari Maharashtra 2026 | Latest Government Jobs in Maharashtra",
    template: "%s | Sarkari Naukari Maharashtra",
  },
  description:
    "Latest Sarkari Naukari 2026 alerts for Maharashtra - MPCB Police Bharti, Talathi Bharti, MPSC Rajyaseva, Teacher & Group C government job notifications, online forms, admit cards and results.",
  keywords: [
    "sarkari naukari",
    "government jobs maharashtra",
    "mpsc exam 2026",
    "police bharti",
    "talathi bharti",
    "maharashtra government jobs",
    "naukri alert marathi",
    "group c vacancy",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "mr-IN": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Sarkari Naukari Maharashtra 2026 | Latest Government Jobs Alerts",
    description:
      "Daily updated Maharashtra government job notifications - MPCB, MPSC, Talathi, Police, Teaching & Group C vacancies with online application links.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sarkari Naukari Maharashtra - Latest Govt Job Alerts 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarkari Naukari Maharashtra 2026 | Latest Government Jobs",
    description:
      "MPCB Police, Talathi, MPSC & other Maharashtra Sarkari Naukari alerts 2026.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "jobs",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b3541e",
};

// Server Component navigation (no client JS needed)
function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="Sarkari Naukari Maharashtra Home">
          <span className="logo-badge">से</span>
          <span>
            Sarkari Naukari <strong>Maharashtra</strong>
            <small>महाराष्ट्र सरकारी नोकरी अलर्ट २०२६</small>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/jobs">Latest Jobs</Link>
            </li>
            <li>
              <Link href="/category/police">Police Bharti</Link>
            </li>
            <li>
              <Link href="/category/talathi">Talathi</Link>
            </li>
            <li>
              <Link href="/category/mpsc">MPSC</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h2>About This Portal</h2>
          <p>
            Sarkari Naukari Maharashtra provides fast, accurate and daily
            updated government job alerts for Maharashtra - MPCB Police Bharti,
            Talathi, MPSC, Teaching, Banking and Group C/D vacancies.
          </p>
        </section>
        <nav aria-label="Footer categories">
          <h2>Job Categories</h2>
          <ul>
            <li><Link href="/category/police">Police Bharti (पोलीस भरती)</Link></li>
            <li><Link href="/category/talathi">Talathi Bharti (तलाठी भरती)</Link></li>
            <li><Link href="/category/mpsc">MPSC Rajyaseva (राज्यसेवा)</Link></li>
            <li><Link href="/category/teaching">Teacher Recruitment (शिक्षक भरती)</Link></li>
            <li><Link href="/category/banking">Banking Jobs (बँकिंग)</Link></li>
            <li><Link href="/category/group-c">Group C &amp; D (ग्रुप क)</Link></li>
          </ul>
        </nav>
        <nav aria-label="Quick links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link href="/jobs">All Latest Jobs 2026</Link></li>
            <li><Link href="/sitemap.xml">Sitemap</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>
          © 2026 Sarkari Naukari Maharashtra. Not affiliated with any
          Government organisation. Always verify details from official sites.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
