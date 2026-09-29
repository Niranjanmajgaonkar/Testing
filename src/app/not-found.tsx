import Link from "next/link";

// Server-rendered 404 page
export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "60px 16px" }}>
      <h1>404 - Page Not Found (पृष्ठ सापडले नाही)</h1>
      <p style={{ margin: "12px 0 24px", color: "var(--muted)" }}>
        The job notification you are looking for may have expired or moved.
      </p>
      <Link href="/jobs" className="btn">
        View All Latest Jobs →
      </Link>
    </div>
  );
}
