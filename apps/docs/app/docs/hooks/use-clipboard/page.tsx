import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-clipboard")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-clipboard` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-clipboard`,
    images: [{ url: `/api/og?path=/docs/hooks/use-clipboard`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-clipboard`],
  },
};

export default function UseClipboardPage() {
  return (
    <div className="docs-prose">
      <h1>useClipboard</h1>
      <p>Hook for copying text to clipboard with a copied state indicator.</p>
      <h2>Usage</h2>
      <pre><code>{`import { useClipboard } from "@spectre-ui/hooks";

function CopyButton({ text }) {
  const { copy, copied } = useClipboard(2000);

  return (
    <button onClick={() => copy(text)}>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}`}</code></pre>
      <h2>Parameters</h2>
      <pre><code>{`useClipboard(timeout?: number) // ms before copied resets (default: 2000)`}</code></pre>
      <h2>Return Value</h2>
      <pre><code>{`{
  copy: (text: string) => Promise<void>,
  copied: boolean,
}`}</code></pre>
    </div>
  );
}
