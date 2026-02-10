import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-reduced-motion")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-reduced-motion` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-reduced-motion`,
    images: [{ url: `/api/og?path=/docs/hooks/use-reduced-motion`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-reduced-motion`],
  },
};

export default function UseReducedMotionPage() {
  return (
    <div className="docs-prose">
      <h1>useReducedMotion</h1>
      <p>Hook to detect if the user prefers reduced motion.</p>
      <h2>Usage</h2>
      <pre><code>{`import { useReducedMotion } from "@spectre-ui/hooks";

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div style={{
      transition: prefersReducedMotion ? "none" : "transform 0.3s"
    }}>
      Content
    </div>
  );
}`}</code></pre>
    </div>
  );
}
