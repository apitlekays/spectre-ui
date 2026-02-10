import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-local-storage")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-local-storage` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-local-storage`,
    images: [{ url: `/api/og?path=/docs/hooks/use-local-storage`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-local-storage`],
  },
};

export default function UseLocalStoragePage() {
  return (
    <div className="docs-prose">
      <h1>useLocalStorage</h1>
      <p>Hook for persisted state in localStorage with SSR safety.</p>
      <h2>Usage</h2>
      <pre><code>{`import { useLocalStorage } from "@spectre-ui/hooks";

function Settings() {
  const [lang, setLang] = useLocalStorage("language", "en");

  return (
    <select value={lang} onChange={(e) => setLang(e.target.value)}>
      <option value="en">English</option>
      <option value="id">Bahasa</option>
    </select>
  );
}`}</code></pre>
    </div>
  );
}
