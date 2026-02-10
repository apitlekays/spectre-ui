import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-is-mounted")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-is-mounted` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-is-mounted`,
    images: [{ url: `/api/og?path=/docs/hooks/use-is-mounted`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-is-mounted`],
  },
};

export default function UseIsMountedPage() {
  return (
    <div className="docs-prose">
      <h1>useIsMounted</h1>
      <p>Hook for SSR-safe mounted state detection.</p>
      <h2>Usage</h2>
      <pre><code>{`import { useIsMounted } from "@spectre-ui/hooks";

function ClientOnly() {
  const mounted = useIsMounted();
  if (!mounted) return null;
  return <div>Client-only content</div>;
}`}</code></pre>
    </div>
  );
}
