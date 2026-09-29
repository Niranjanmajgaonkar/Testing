import { ImageResponse } from "next/og";

// Dynamic OG image generated on the server (Edge/node) - no client JS.
export const runtime = "nodejs";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #b3541e, #8a3f14)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 90, fontWeight: 800, display: "flex" }}>
          Sarkari Naukari
        </div>
        <div style={{ fontSize: 70, fontWeight: 700, display: "flex" }}>
          Maharashtra 2026
        </div>
        <div style={{ fontSize: 40, marginTop: 24, display: "flex" }}>
          महाराष्ट्र सरकारी नोकरी अलर्ट — पोलीस • तलाठी • एमपीएससी
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
