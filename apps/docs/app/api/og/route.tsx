/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { PAGE_METADATA, SITE_CONFIG } from "@/lib/seo-data";

export const runtime = "edge";

// Logo SVG with cyan fill (#0ea5e9), base64-encoded for Satori compatibility.
// The original /public/agentUI.svg is not modified.
const LOGO_DATA_URI =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMzg2LjAwMDAwMHB0IiBoZWlnaHQ9IjM1NS4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDM4Ni4wMDAwMDAgMzU1LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzNTUuMDAwMDAwKSBzY2FsZSgwLjA1MDAwMCwtMC4wNTAwMDApIgpmaWxsPSIjMGVhNWU5IiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMzM3MCA2NTM5IGMtNTUxIC02MiAtODQ5IC0yMDAgLTkzNyAtNDM0IC0xMDAgLTI2NCAtMjkyIC04MzIgLTI4NAotODQwIDQgLTUgOTkgLTE4IDIxMSAtMzEgbDIwNCAtMjIgLTEyIC05MSBjLTQwIC0yOTEgLTUzIC0zMzUgLTk5IC0zMjkgLTIzIDMKLTE3NiAyNiAtMzM4IDUwIGwtMjk0IDQ1IC0yMDYgLTU1IGMtNzgzIC0yMTAgLTcxNCAtNDc2IDE4MSAtNjkzIGw4NiAtMjEgLTYKLTE1MSAtNiAtMTUwIC0yNjQgLTY4IGMtNTk4IC0xNTMgLTY4NyAtMjkxIC0zMTAgLTQ4MiA1NjIgLTI4NCAyMDIxIC00MzcKMzMxNyAtMzQ4IDQwNiAyOCA0MzIgMjMgMTkyIC0zNSAtNjk5IC0xNzEgLTIyODggLTI1OCAtMzEwNCAtMTY5IC0xMTYgMTMKLTIxMiAyMSAtMjE1IDE4IC0yIC0zIDY0IC0xMjQgMTQ3IC0yNzEgODMgLTE0NiAxNDQgLTI3MiAxMzQgLTI4MSAtOSAtOCAtMTA5Ci04NSAtMjIyIC0xNzEgLTI0NSAtMTg2IC0yNDAgLTE0NiAtNDAgLTM0NCAxMjQ5IC0xMjM0IDMyODEgLTEyMzQgNDUzMCAwIDIwMAoxOTggMjA1IDE1OSAtNDAgMzQ1IC0xMTMgODYgLTIxMyAxNjIgLTIyMyAxNzEgLTE5IDE3IC0zNCAtMTAgMzk3IDczNSAzOTQKNjgyIDM5NiA2NzQgLTIzOSA4MzQgbC0yNjAgNjUgLTYgMTUxIC02IDE1MSA4NiAyMSBjODkzIDIxOSA5NjQgNDgxIDE4NyA2OTIKLTIxMiA1NyAtMjA2IDU3IC01NzEgMCAtNTE2IC03OSAtMTI4NyAtMTE5IC0xOTQ3IC0xMDAgbC00NzggMTQgMTMgOTIgYzcgNTEKMjIgMTQ3IDMzIDIxMyBsMjEgMTIwIDYwNCAtNyBjNjkwIC04IDE3MzYgNTIgMTc4NyAxMDMgOSA5IC0yODcgODY1IC0zMjQgOTM2Ci0xMjQgMjQwIC0xMDA4IDQxNiAtMTY5OSAzMzd6IG0tMTIwIC0yNTU3IGwzMDAgLTEyIDcgLTYwIGMzMyAtMjg1IC0xMzMgLTQzMAotNDg3IC00MzAgLTM4OSAyIC01OTAgMTUzIC01OTAgNDQ3IGwwIDk4IDIzNSAtMTUgYzEyOSAtOSAzNzAgLTIxIDUzNSAtMjh6Cm0xODEwIC02MCBjMCAtMjc0IC0xODMgLTQyNyAtNTI0IC00MzkgLTQxNCAtMTQgLTU4OCAxMjAgLTU1MyA0MjggbDcgNTkgMzcwCjE0IGMyMDMgOCAzODggMTggNDEwIDIyIDIyIDUgOTYgMTAgMTY1IDExIGwxMjUgMyAwIC05OHoiLz4KPC9nPgo8L3N2Zz4K";

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
                gap: "12px",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#e2e8f0",
              }}
            >
              <img src={LOGO_DATA_URI} alt="" width={36} height={36} />
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
