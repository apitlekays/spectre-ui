import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/getting-started")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/getting-started` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/getting-started`,
    images: [{ url: `/api/og?path=/docs/getting-started`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/getting-started`],
  },
};

export default function GettingStartedPage() {
  return (
    <div className="docs-prose">
      <h1>Getting Started</h1>
      <p>
        spectre-ui is a futuristic React component framework built for developers who want
        their interfaces to look like they belong in a secret agent&apos;s HUD. It provides
        35+ production-ready components with dark cyber aesthetics, built-in Framer Motion
        animations, and full Radix UI accessibility.
      </p>

      <h2>Quick Start</h2>
      <p>Install the core package and its peer dependencies:</p>
      <pre>
        <code>pnpm add @spectre-ui/core framer-motion</code>
      </pre>

      <h2>Setup</h2>
      <p>Wrap your application with the SpectreThemeProvider and import the CSS:</p>
      <pre>
        <code>{`import { SpectreThemeProvider } from "@spectre-ui/core";
import "@spectre-ui/core/styles.css";

function App() {
  return (
    <SpectreThemeProvider defaultTheme="dark">
      {/* Your app */}
    </SpectreThemeProvider>
  );
}`}</code>
      </pre>

      <h2>Tailwind CSS Integration</h2>
      <p>
        If you&apos;re using Tailwind CSS, install the spectre-ui plugin for additional
        utility classes:
      </p>
      <pre>
        <code>pnpm add @spectre-ui/tailwind-config</code>
      </pre>
      <pre>
        <code>{`// tailwind.config.ts
import { spectreUIPlugin } from "@spectre-ui/tailwind-config/plugin";

export default {
  plugins: [spectreUIPlugin],
};`}</code>
      </pre>

      <h2>Use Components</h2>
      <p>Import and use any component:</p>
      <pre>
        <code>{`import { Button, Card, CardHeader, CardTitle, CardContent } from "@spectre-ui/core";

function MyComponent() {
  return (
    <Card variant="hud">
      <CardHeader>
        <CardTitle>Mission Briefing</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Accept Mission</Button>
      </CardContent>
    </Card>
  );
}`}</code>
      </pre>

      <h2>Packages</h2>
      <ul>
        <li><code>@spectre-ui/core</code> — Components + ThemeProvider + CSS</li>
        <li><code>@spectre-ui/hooks</code> — Utility hooks</li>
        <li><code>@spectre-ui/themes</code> — Theme presets (cyber-dark, cyber-light)</li>
        <li><code>@spectre-ui/tailwind-config</code> — Tailwind plugin + config preset</li>
      </ul>
    </div>
  );
}
