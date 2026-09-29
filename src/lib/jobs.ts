// Server-side data store for Sarkari Naukari jobs.
// This module is ONLY imported by Server Components / Route Handlers,
// keeping the bundle small and SEO rendering fast on the server.

export type JobCategory =
  | "police"
  | "talathi"
  | "mpsc"
  | "banking"
  | "teaching"
  | "group-c"
  | "defence"
  | "medical";

export interface Job {
  slug: string;
  title: string; // English title
  marathiTitle: string; // Marathi title for bilingual SEO
  department: string;
  category: JobCategory;
  totalPosts: number;
  eligibility: string;
  ageLimit: string;
  applicationFee: string;
  notificationDate: string; // ISO
  applicationStartDate: string; // ISO
  lastDateToApply: string; // ISO
  examDate?: string; // ISO
  selectionProcess: string[];
  importantLinks: { applyOnline: string; notification: string };
  description: string;
  featured: boolean;
}

export const CATEGORIES: Record<JobCategory, { name: string; marathiName: string }> = {
  police: { name: "Police Bharti", marathiName: "पोलीस भरती" },
  talathi: { name: "Talathi Bharti", marathiName: "तलाठी भरती" },
  mpsc: { name: "MPSC Rajyaseva", marathiName: "एमपीएससी राज्यसेवा" },
  banking: { name: "Banking Jobs", marathiName: "बँकिंग नोकऱ्या" },
  teaching: { name: "Teaching Jobs", marathiName: "शिक्षक भरती" },
  "group-c": { name: "Group C & D", marathiName: "ग्रुप क व ड" },
  defence: { name: "Defence Jobs", marathiName: "संरक्षण विभाग" },
  medical: { name: "Medical Jobs", marathiName: "वैद्यकीय भरती" },
};

const jobs: Job[] = [
  {
    slug: "mpcb-police-talari-2026",
    title: "Maharashtra Police Constable (Talari) Recruitment 2026",
    marathiTitle: "महाराष्ट्र पोलीस शिपाई भरती २०२६",
    department: "MPCB - Maharashtra Police Recruitment Board",
    category: "police",
    totalPosts: 7500,
    eligibility:
      "12th Pass (HSC) from a recognised board. Male candidates must have 165 cm height (160 cm for rural/victim categories).",
    ageLimit: "18 to 30 years (relaxation as per Government of Maharashtra rules)",
    applicationFee: "₹600 (General/OBC) | ₹450 (SC/ST/PWD)",
    notificationDate: "2026-08-15",
    applicationStartDate: "2026-09-01",
    lastDateToApply: "2026-10-25",
    examDate: "2026-12-14",
    selectionProcess: [
      "Written Examination (Prelims + Mains)",
      "Physical Efficiency Test (PET)",
      "Physical Measurement Test (PMT)",
      "Document Verification",
      "Medical Examination",
    ],
    importantLinks: {
      applyOnline: "https://mpcb.gov.in",
      notification: "https://mpcb.gov.in",
    },
    description:
      "The Maharashtra Police Common Entrance Test (MPCET) 2026 has been announced for 7500 Talari posts across districts including Pune, Mumbai, Nagpur, Nashik and Aurangabad. The online application process is now open at mpcb.gov.in.",
    featured: true,
  },
  {
    slug: "mpsc-rajyaseva-pradhanshikhak-2026",
    title: "MPSC Combined State & Subordinate Services Exam 2026 (Rajyaseva)",
    marathiTitle: "एम्.पी.एस.सी. एकत्रित राज्य व उपराज्य सेवा परीक्षा २०२६",
    department: "MPSC - Maharashtra Public Service Commission",
    category: "mpsc",
    totalPosts: 350,
    eligibility: "Bachelor's Degree in any discipline from a recognised university.",
    ageLimit: "21 to 38 years (relaxation for reserved categories)",
    applicationFee: "₹500 (General) | Free for SC/ST/PWD (Maharashtra domicile)",
    notificationDate: "2026-08-01",
    applicationStartDate: "2026-08-10",
    lastDateToApply: "2026-09-30",
    examDate: "2026-10-25",
    selectionProcess: [
      "Preliminary Examination (Objective)",
      "Main Examination (Descriptive)",
      "Personality Test / Interview",
    ],
    importantLinks: {
      applyOnline: "https://mpsc.gov.in",
      notification: "https://mpsc.gov.in",
    },
    description:
      "MPSC has released the official notification for the Combined State & Subordinate Services Examination 2026 for posts of Dy. Collector, ASP, Tehsildar, Pradhikari and other Class I & II gazetted posts.",
    featured: true,
  },
  {
    slug: "maharashtra-talathi-haikal-2026",
    title: "Maharashtra Talathi & Haikal Recruitment 2026 (Aai Spardha)",
    marathiTitle: "महाराष्ट्र तलाठी व हवालदार भरती २०२६ (आई स्पर्धा)",
    department: "DGET - Directorate of Ground Employment Tribunal",
    category: "talathi",
    totalPosts: 2600,
    eligibility:
      "Graduate with Computer Knowledge (Diploma/Certificate). Marathi language knowledge compulsory.",
    ageLimit: "18 to 38 years",
    applicationFee: "₹360 (All categories)",
    notificationDate: "2026-09-05",
    applicationStartDate: "2026-09-15",
    lastDateToApply: "2026-11-10",
    examDate: "2027-01-17",
    selectionProcess: [
      "Computer Based Test (CBT)",
      "Typing Test (Marathi)",
      "Document Verification",
    ],
    importantLinks: {
      applyOnline: "https://getonline.maharashtra.gov.in",
      notification: "https://getonline.maharashtra.gov.in",
    },
    description:
      "Aai Spardha (आयुक्त स्पर्धेद्वारे भरती) notification for Talathi (2000 posts) and Gram Sevak/Haikal (600 posts) across Maharashtra districts. Apply online before the last date.",
    featured: true,
  },
  {
    slug: "sbi-clerk-po-maharashtra-2026",
    title: "SBI Clerk (Junior Associate) & PO Recruitment 2026 - Maharashtra",
    marathiTitle: "एसबीआय क्लर्क व पीओ भरती २०२६ - महाराष्ट्र",
    department: "State Bank of India",
    category: "banking",
    totalPosts: 1200,
    eligibility: "Graduate in any stream with minimum 60% marks (relaxation for reserved).",
    ageLimit: "20 to 28 years",
    applicationFee: "₹750 (General/OBC) | ₹0 (SC/ST/PWD)",
    notificationDate: "2026-07-20",
    applicationStartDate: "2026-07-28",
    lastDateToApply: "2026-09-18",
    examDate: "2026-11-08",
    selectionProcess: ["Prelim Exam", "Main Exam", "Language Proficiency Test", "Interview (PO only)"],
    importantLinks: {
      applyOnline: "https://sbi.co.in/careers",
      notification: "https://sbi.co.in/careers",
    },
    description:
      "SBI has invited online applications for Junior Associate (Clerk) and Probationary Officer posts. Total 1200 vacancies allocated for Maharashtra circles including Mumbai, Pune and Nagpur.",
    featured: false,
  },
  {
    slug: "maharashtra-teacher-recruitment-tet-2026",
    title: "Maharashtra Teacher Recruitment 2026 (TET / Pre-Primary Teacher)",
    marathiTitle: "महाराष्ट्र शिक्षक भरती २०२६ (टीईटी / पूर्व प्राथमिक शिक्षक)",
    department: "School Education Department, Govt. of Maharashtra",
    category: "teaching",
    totalPosts: 38000,
    eligibility: "D.El.Ed / B.Ed with MA/BSW and passing Maharashtra TET Paper-I / Paper-II.",
    ageLimit: "18 to 40 years",
    applicationFee: "₹500 (General/OBC) | ₹350 (SC/ST)",
    notificationDate: "2026-08-25",
    applicationStartDate: "2026-09-02",
    lastDateToApply: "2026-10-15",
    examDate: "2026-12-06",
    selectionProcess: ["Written Exam (Merit based)", "Document Verification", "Interview (for selected posts)"],
    importantLinks: {
      applyOnline: "https://sesmahaexam.maharashtra.gov.in",
      notification: "https://sesmahaexam.maharashtra.gov.in",
    },
    description:
      "School Education Department announced mega recruitment of 38,000 teachers including 30,000 pre-primary teachers and 8,000 secondary school teacher posts through TET qualified candidates.",
    featured: true,
  },
  {
    slug: "mpsc-group-c-combined-preliminary-2026",
    title: "MPSC Group C Combined Preliminary Exam 2026",
    marathiTitle: "एम्.पी.एस.सी. ग्रुप क एकत्रित पूर्व परीक्षा २०२६",
    department: "MPSC - Maharashtra Public Service Commission",
    category: "group-c",
    totalPosts: 2800,
    eligibility: "HSC (12th) / Bachelor's Degree depending on post.",
    ageLimit: "18 to 38 years",
    applicationFee: "₹370 (General) | Free for SC/ST/PWD",
    notificationDate: "2026-06-10",
    applicationStartDate: "2026-06-20",
    lastDateToApply: "2026-08-05",
    examDate: "2026-10-11",
    selectionProcess: ["Preliminary Exam", "Main Exam", "Document Verification"],
    importantLinks: {
      applyOnline: "https://mpsc.gov.in",
      notification: "https://mpsc.gov.in",
    },
    description:
      "MPSC Group C Combined Preliminary Examination 2026 notification for Asst. Civil Registrar, Inspector Gr-III, Typist, Naib-Sarai-Dar and other non-gazetted Class III posts.",
    featured: false,
  },
  {
    slug: "indian-army-agniveer-maharashtra-2026",
    title: "Indian Army Agniveer Recruitment 2026 - Maharashtra Cadre",
    marathiTitle: "इंडियन आर्मी अग्निवीर भरती २०२६ - महाराष्ट्र",
    department: "Indian Army - Recruiting Office Mumbai",
    category: "defence",
    totalPosts: 900,
    eligibility: "10+2 Science (PCM) with 50% aggregate; ITI preferred for some trades.",
    ageLimit: "17.5 to 21 years",
    applicationFee: "₹250 (Free for SC/ST)",
    notificationDate: "2026-09-10",
    applicationStartDate: "2026-09-18",
    lastDateToApply: "2026-10-18",
    examDate: "2026-11-22",
    selectionProcess: ["Online Written (CEPIG)", "Physical Fitness Test", "Medical Examination"],
    importantLinks: {
      applyOnline: "https://joinindianarmy.nic.in",
      notification: "https://joinindianarmy.nic.in",
    },
    description:
      "Indian Army has released Agniveer General Duty, Tech (Veteran) and Clerk recruitment notification 2026. Maharashtra candidates can apply through joinindianarmy.nic.in.",
    featured: false,
  },
  {
    slug: "maharashtra-gruhvatti-aramgari-2026",
    title: "Maharashtra Aramgari Gruhvi & Other Posts Recruitment 2026",
    marathiTitle: "महाराष्ट्र आरामगृह गृहविणी व इतर पदे भरती २०२६",
    department: "Socially & Educationally Backward Classes Development Corp.",
    category: "group-c",
    totalPosts: 120,
    eligibility: "Graduate in any discipline; Marathi & English knowledge required.",
    ageLimit: "21 to 38 years",
    applicationFee: "₹300",
    notificationDate: "2026-08-30",
    applicationStartDate: "2026-09-08",
    lastDateToApply: "2026-10-08",
    selectionProcess: ["Written Exam", "Skill Test", "Interview"],
    importantLinks: {
      applyOnline: "https://marathwada.gov.in",
      notification: "https://marathwada.gov.in",
    },
    description:
      "Government hostel warden (Gruhvi), assistant and other Group C/D posts recruitment under Aramgari board for Maharashtra state. Apply online before last date.",
    featured: false,
  },
  {
    slug: "aiims-nagpur-nursing-officer-2026",
    title: "AIIMS Nagpur Nursing Officer & Paramedical Recruitment 2026",
    marathiTitle: "एम्स नागपूर नर्सिंग अधिकारी व पैरामेडिकल भरती २०२६",
    department: "AIIMS Nagpur",
    category: "medical",
    totalPosts: 210,
    eligibility: "B.Sc Nursing / GNM with Indian Nursing Council registration.",
    ageLimit: "18 to 35 years",
    applicationFee: "₹3000 (General/OBC) | ₹2400 (SC/ST)",
    notificationDate: "2026-09-12",
    applicationStartDate: "2026-09-20",
    lastDateToApply: "2026-10-30",
    examDate: "2026-12-20",
    selectionProcess: ["Computer Based Test", "Document Verification", "Medical Fitness"],
    importantLinks: {
      applyOnline: "https://aiimsnapur.edu.in",
      notification: "https://aiimsnapur.edu.in",
    },
    description:
      "AIIMS Nagpur invites online applications for Nursing Officer (Group B), Pharmacist, Lab Technician and other paramedical posts for the year 2026.",
    featured: false,
  },
];

// ---------- Helpers (server-side) ----------

export function getAllJobs(): Job[] {
  return [...jobs].sort(
    (a, b) => new Date(b.notificationDate).getTime() - new Date(a.notificationDate).getTime()
  );
}

export function getFeaturedJobs(): Job[] {
  return getAllJobs().filter((j) => j.featured);
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getJobsByCategory(category: JobCategory): Job[] {
  return getAllJobs().filter((j) => j.category === category);
}

export function getCategoryInfo(category: JobCategory) {
  return CATEGORIES[category];
}

export function isValidCategory(value: string): value is JobCategory {
  return value in CATEGORIES;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function isOpen(job: Job): boolean {
  const now = new Date();
  return now >= new Date(job.applicationStartDate) && now <= new Date(job.lastDateToApply);
}

export function daysLeft(job: Job): number {
  const diff = new Date(job.lastDateToApply).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export const SITE_URL = "https://www.sarkarinaukarimaharashtra.in";
export const SITE_NAME = "Sarkari Naukari Maharashtra";
