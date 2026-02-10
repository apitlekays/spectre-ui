import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/contributing")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/contributing` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/contributing`,
    images: [{ url: `/api/og?path=/docs/contributing`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/contributing`],
  },
};

export default function ContributingPage() {
  return (
    <div className="docs-prose">
      <h1>Contributing</h1>
      <p>
        We welcome contributions to spectre-ui! Please read our{" "}
        <a href="https://github.com/apitlekays/spectre-ui/blob/main/CONTRIBUTING.md">
          Contributing Guide
        </a>{" "}
        on GitHub for detailed instructions.
      </p>
      <h2>Quick Start</h2>
      <pre><code>{`git clone https://github.com/apitlekays/spectre-ui.git
cd spectre-ui
pnpm install
pnpm dev`}</code></pre>
      <h2>What to Contribute</h2>
      <ul>
        <li>New components following the FUI aesthetic</li>
        <li>Bug fixes and improvements</li>
        <li>Documentation improvements</li>
        <li>Additional theme presets</li>
        <li>Test coverage improvements</li>
      </ul>
    </div>
  );
}
