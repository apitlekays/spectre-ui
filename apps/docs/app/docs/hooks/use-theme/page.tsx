import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-theme")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-theme` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-theme`,
    images: [{ url: `/api/og?path=/docs/hooks/use-theme`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-theme`],
  },
};

export default function UseThemePage() {
  return (
    <div className="docs-prose">
      <h1>useSpectreTheme</h1>
      <p>Hook to read and control the current spectre-ui theme.</p>
      <h2>Usage</h2>
      <pre><code>{`import { useSpectreTheme } from "@spectre-ui/core";

function ThemeToggle() {
  const { theme, setTheme, toggleTheme } = useSpectreTheme();

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}`}</code></pre>
      <h2>Return Value</h2>
      <pre><code>{`{
  theme: "dark" | "light",     // Current theme
  setTheme: (theme) => void,   // Set specific theme
  toggleTheme: () => void,     // Toggle between dark/light
}`}</code></pre>
    </div>
  );
}
