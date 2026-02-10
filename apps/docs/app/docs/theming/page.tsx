import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/theming")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/theming` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/theming`,
    images: [{ url: `/api/og?path=/docs/theming`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/theming`],
  },
};

export default function ThemingPage() {
  return (
    <div className="docs-prose">
      <h1>Theming</h1>
      <p>
        spectre-ui uses CSS custom properties (variables) for theming. This makes it
        easy to switch between themes at runtime, create custom themes, and integrate
        with any CSS framework.
      </p>

      <h2>Built-in Themes</h2>
      <ul>
        <li><strong>Cyber Dark</strong> (default) — Dark background (#020617), cyan primary (#0ea5e9)</li>
        <li><strong>Cyber Light</strong> — Light background (#f8fafc), blue primary (#0284c7)</li>
      </ul>

      <h2>Theme Provider</h2>
      <pre><code>{`import { SpectreThemeProvider } from "@spectre-ui/core";

function App() {
  return (
    <SpectreThemeProvider
      defaultTheme="dark"   // "dark" | "light"
      storageKey="my-theme" // localStorage key
      useSystemTheme={true} // follow OS preference
    >
      {children}
    </SpectreThemeProvider>
  );
}`}</code></pre>

      <h2>Using the Theme Hook</h2>
      <pre><code>{`import { useSpectreTheme } from "@spectre-ui/core";

function ThemeToggle() {
  const { theme, setTheme, toggleTheme } = useSpectreTheme();
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}`}</code></pre>

      <h2>CSS Variables</h2>
      <p>All design tokens are exposed as CSS custom properties:</p>
      <pre><code>{`/* Colors */
--spectre-background
--spectre-foreground
--spectre-primary
--spectre-primary-foreground
--spectre-secondary
--spectre-secondary-foreground
--spectre-muted
--spectre-muted-foreground
--spectre-accent
--spectre-accent-foreground
--spectre-border
--spectre-input
--spectre-ring
--spectre-success
--spectre-warning
--spectre-destructive

/* Typography */
--spectre-font-sans
--spectre-font-mono

/* Glow Effects */
--spectre-glow-sm
--spectre-glow-md
--spectre-glow-lg`}</code></pre>

      <h2>Custom Themes</h2>
      <p>
        Pass custom tokens to override any design token per-theme:
      </p>
      <pre><code>{`<SpectreThemeProvider
  customTokens={{
    dark: {
      primary: "#22c55e",       // Green instead of cyan
      background: "#0a0a0a",    // Darker background
    },
    light: {
      primary: "#16a34a",
      background: "#ffffff",
    },
  }}
>
  {children}
</SpectreThemeProvider>`}</code></pre>

      <h2>Design Principles</h2>
      <ul>
        <li><strong>0px border-radius</strong> everywhere (non-configurable, core to the aesthetic)</li>
        <li><strong>Monospace-first</strong> typography (Geist Mono / JetBrains Mono)</li>
        <li><strong>Uppercase tracking</strong> for labels and headings</li>
        <li><strong>Cyan glow effects</strong> on interactive elements</li>
        <li><strong>HUD corner brackets</strong> on cards and containers</li>
      </ul>
    </div>
  );
}
