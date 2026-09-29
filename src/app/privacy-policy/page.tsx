import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Sarkari Naukari Maharashtra",
  description:
    "Privacy policy of Sarkari Naukari Maharashtra - how job alert data is collected, used and protected.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container prose">
      <h1>Privacy Policy (गोपनीयता धोरण)</h1>
      <p style={{ marginTop: 12 }}>Last updated: September 2026</p>
      <h2 className="section-title">Information We Collect</h2>
      <p>
        This website serves fully server-rendered static pages and does not
        require login. We do not collect personally identifiable information.
        Anonymous analytics may be used to understand page popularity.
      </p>
      <h2 className="section-title">External Links</h2>
      <p>
        Apply-online and notification links point to official government
        websites. Once you leave this site, the privacy policy of that
        government portal applies.
      </p>
      <h2 className="section-title">Cookies</h2>
      <p>
        We use minimal cookies only for essential functionality such as theme
        preference. No advertising cookies are set by this website.
      </p>
      <h2 className="section-title">Contact</h2>
      <p>
        For privacy concerns or correction of job details, contact us at
        support@sarkarinaukarimaharashtra.in.
      </p>
    </div>
  );
}
