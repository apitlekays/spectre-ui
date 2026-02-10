import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-media-query")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-media-query` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-media-query`,
    images: [{ url: `/api/og?path=/docs/hooks/use-media-query`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-media-query`],
  },
};

export default function UseMediaQueryPage() {
  return (
    <div className="docs-prose">
      <h1>useMediaQuery</h1>
      <p>Hook for responsive breakpoint detection using CSS media queries.</p>
      <h2>Usage</h2>
      <pre><code>{`import { useMediaQuery } from "@spectre-ui/hooks";

function ResponsiveComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <div>
      {isMobile ? "Mobile view" : "Desktop view"}
    </div>
  );
}`}</code></pre>
    </div>
  );
}
