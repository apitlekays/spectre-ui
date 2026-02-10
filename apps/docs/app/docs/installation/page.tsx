import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/installation")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/installation` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/installation`,
    images: [{ url: `/api/og?path=/docs/installation`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/installation`],
  },
};

export default function InstallationPage() {
  return (
    <div className="docs-prose">
      <h1>Installation</h1>

      <h2>Prerequisites</h2>
      <ul>
        <li>React 18 or 19</li>
        <li>Node.js 18+</li>
        <li>A package manager (pnpm, npm, or yarn)</li>
      </ul>

      <h2>Install Core Package</h2>
      <pre><code>{`# pnpm (recommended)
pnpm add @spectre-ui/core framer-motion

# npm
npm install @spectre-ui/core framer-motion

# yarn
yarn add @spectre-ui/core framer-motion`}</code></pre>

      <h2>Install Optional Packages</h2>
      <pre><code>{`# Utility hooks
pnpm add @spectre-ui/hooks

# Theme presets
pnpm add @spectre-ui/themes

# Tailwind CSS plugin
pnpm add -D @spectre-ui/tailwind-config`}</code></pre>

      <h2>Peer Dependencies</h2>
      <p>
        <code>@spectre-ui/core</code> has the following peer dependencies:
      </p>
      <ul>
        <li><code>react</code> ^18 || ^19</li>
        <li><code>react-dom</code> ^18 || ^19</li>
        <li><code>framer-motion</code> ^11 || ^12 (optional, for animations)</li>
        <li><code>tailwindcss</code> ^3.4 (optional, for Tailwind integration)</li>
      </ul>

      <h2>CSS Import</h2>
      <p>
        Import the base styles in your app&apos;s entry point. This provides the CSS
        variable definitions for both dark and light themes:
      </p>
      <pre><code>{`import "@spectre-ui/core/styles.css";`}</code></pre>

      <h2>TypeScript</h2>
      <p>
        spectre-ui is written in TypeScript and ships with type declarations.
        No additional <code>@types/*</code> packages are needed.
      </p>
    </div>
  );
}
