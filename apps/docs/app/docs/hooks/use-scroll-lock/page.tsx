import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-scroll-lock")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-scroll-lock` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-scroll-lock`,
    images: [{ url: `/api/og?path=/docs/hooks/use-scroll-lock`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-scroll-lock`],
  },
};

export default function UseScrollLockPage() {
  return (
    <div className="docs-prose">
      <h1>useScrollLock</h1>
      <p>Hook to lock body scroll (useful for modals and overlays).</p>
      <h2>Usage</h2>
      <pre><code>{`import { useScrollLock } from "@spectre-ui/hooks";

function Modal({ open }) {
  useScrollLock(open);
  if (!open) return null;
  return <div>Modal content</div>;
}`}</code></pre>
    </div>
  );
}
