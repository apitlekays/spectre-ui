import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/changelog")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/changelog` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/changelog`,
    images: [{ url: `/api/og?path=/docs/changelog`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/changelog`],
  },
};

export default function ChangelogPage() {
  return (
    <div className="docs-prose">
      <h1>Changelog</h1>
      <h2>v1.0.0 (2026-02-10)</h2>
      <p>Initial release of spectre-ui.</p>
      <ul>
        <li>35+ production-ready components</li>
        <li>Dark (Cyber Dark) and Light (Cyber Light) theme presets</li>
        <li>CSS variable theming system with SpectreThemeProvider</li>
        <li>Tailwind CSS plugin with spectre-ui utilities</li>
        <li>10 utility hooks (@spectre-ui/hooks)</li>
        <li>Full TypeScript support</li>
        <li>Radix UI accessibility primitives</li>
        <li>Framer Motion animation support (optional)</li>
        <li>Documentation website with live previews</li>
      </ul>
    </div>
  );
}
