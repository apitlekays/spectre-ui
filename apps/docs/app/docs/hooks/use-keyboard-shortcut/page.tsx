import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-keyboard-shortcut")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-keyboard-shortcut` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-keyboard-shortcut`,
    images: [{ url: `/api/og?path=/docs/hooks/use-keyboard-shortcut`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-keyboard-shortcut`],
  },
};

export default function UseKeyboardShortcutPage() {
  return (
    <div className="docs-prose">
      <h1>useKeyboardShortcut</h1>
      <p>Hook for binding keyboard shortcuts with modifier key support.</p>
      <h2>Usage</h2>
      <pre><code>{`import { useKeyboardShortcut } from "@spectre-ui/hooks";

function App() {
  useKeyboardShortcut("k", () => {
    console.log("Ctrl+K pressed!");
  }, { ctrlKey: true });

  useKeyboardShortcut("Escape", () => {
    console.log("Escape pressed!");
  });
}`}</code></pre>
    </div>
  );
}
