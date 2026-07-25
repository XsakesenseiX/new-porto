import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0e0f12",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(124,102,255,0.25), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            color: "#8f7bff",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#8f7bff",
            }}
          />
          Open to Work · Indonesia
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#f5f5f7",
            lineHeight: 1.1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>I build secure and</span>
          <span style={{ color: "#8f7bff" }}>scalable software.</span>
        </div>
        <div style={{ fontSize: 28, color: "#9a9aa5", marginTop: 40, display: "flex" }}>
          {siteConfig.name} — Software Engineer &amp; Cybersecurity Researcher
        </div>
      </div>
    ),
    { ...size }
  );
}
