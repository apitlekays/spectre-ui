/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { PAGE_METADATA, SITE_CONFIG } from "@/lib/seo-data";

export const runtime = "edge";

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 1) + "\u2026";
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path") || "/";

    const page = PAGE_METADATA[path];
    const title = page?.title || "spectre-ui";
    const description = truncate(
      page?.description || SITE_CONFIG.description,
      140
    );
    const category = page?.category || "landing";

    const categoryLabel =
      category === "landing"
        ? "FRAMEWORK"
        : category === "guide"
          ? "GUIDE"
          : category === "component"
            ? "COMPONENT"
            : "HOOK";

    return new ImageResponse(
      (
        <div
          style={{
            background: "#020617",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px",
            fontFamily: "Inter, system-ui, sans-serif",
            position: "relative",
          }}
        >
          {/* HUD corner brackets */}
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 24,
              width: 40,
              height: 40,
              borderTop: "3px solid #0ea5e9",
              borderLeft: "3px solid #0ea5e9",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: 40,
              height: 40,
              borderTop: "3px solid #0ea5e9",
              borderRight: "3px solid #0ea5e9",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              width: 40,
              height: 40,
              borderBottom: "3px solid #0ea5e9",
              borderLeft: "3px solid #0ea5e9",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 24,
              right: 24,
              width: 40,
              height: 40,
              borderBottom: "3px solid #0ea5e9",
              borderRight: "3px solid #0ea5e9",
              display: "flex",
            }}
          />

          {/* Top: Brand + Category */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#e2e8f0",
              }}
            >
              SPECTRE_
              <span style={{ color: "#0ea5e9" }}>UI</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "#0ea5e9",
                border: "1px solid rgba(14,165,233,0.3)",
                padding: "6px 16px",
              }}
            >
              {categoryLabel}
            </div>
          </div>

          {/* Center: Title + Description */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: title.length > 30 ? 48 : 60,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#f8fafc",
                lineHeight: 1.1,
              }}
            >
              {title.toUpperCase()}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                color: "#94a3b8",
                lineHeight: 1.5,
              }}
            >
              {description}
            </div>
          </div>

          {/* Bottom: URL + Version */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 16,
                letterSpacing: "0.1em",
                color: "#64748b",
              }}
            >
              SPECTREUI.DEV
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                letterSpacing: "0.1em",
                color: "#475569",
              }}
            >
              v{SITE_CONFIG.version}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
