import type { GuideDoc } from "../types.js";

export const installationGuide: GuideDoc = {
  slug: "installation",
  title: "Installation",
  content: `# Installation

## Prerequisites

- React 18 or 19
- Node.js 18+
- A package manager (pnpm, npm, or yarn)

## Install Core Package

\`\`\`bash
# pnpm (recommended)
pnpm add @spectre-ui/core framer-motion

# npm
npm install @spectre-ui/core framer-motion

# yarn
yarn add @spectre-ui/core framer-motion
\`\`\`

## Install Optional Packages

\`\`\`bash
# Utility hooks
pnpm add @spectre-ui/hooks

# Theme presets
pnpm add @spectre-ui/themes

# Tailwind CSS plugin
pnpm add -D @spectre-ui/tailwind-config
\`\`\`

## Peer Dependencies

\`@spectre-ui/core\` has the following peer dependencies:

- \`react\` ^18 || ^19
- \`react-dom\` ^18 || ^19
- \`framer-motion\` ^11 || ^12 (optional, for animations)
- \`tailwindcss\` ^3.4 (optional, for Tailwind integration)

## CSS Import

Import the base styles in your app's entry point. This provides the CSS variable definitions for both dark and light themes:

\`\`\`tsx
import "@spectre-ui/core/styles.css";
\`\`\`

## ThemeProvider Setup

Wrap your root layout with \`SpectreThemeProvider\`:

\`\`\`tsx
import { SpectreThemeProvider } from "@spectre-ui/core";
import "@spectre-ui/core/styles.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SpectreThemeProvider defaultTheme="dark">
          {children}
        </SpectreThemeProvider>
      </body>
    </html>
  );
}
\`\`\`

## Tailwind Plugin Setup

\`\`\`ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import { spectreUIPlugin } from "@spectre-ui/tailwind-config";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [spectreUIPlugin],
};

export default config;
\`\`\`

This adds spectre-ui's color tokens, font families, keyframes, animations, and utility classes (.spectre-hud-corners, .spectre-glow, .spectre-grid-bg, etc.) to your Tailwind build.

## TypeScript

spectre-ui is written in TypeScript and ships with type declarations. No additional \`@types/*\` packages are needed.
`,
};
