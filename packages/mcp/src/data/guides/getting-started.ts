import type { GuideDoc } from "../types.js";

export const gettingStartedGuide: GuideDoc = {
  slug: "getting-started",
  title: "Getting Started with spectre-ui",
  content: `# Getting Started

spectre-ui is a futuristic React component framework built for developers who want their interfaces to look like they belong in a secret agent's HUD. It provides 35+ production-ready components with dark cyber aesthetics, built-in Framer Motion animations, and full Radix UI accessibility.

## Quick Start

Install the core package and its peer dependencies:

\`\`\`bash
pnpm add @spectre-ui/core framer-motion
\`\`\`

## Setup

Wrap your application with the \`SpectreThemeProvider\` and import the CSS:

\`\`\`tsx
import { SpectreThemeProvider } from "@spectre-ui/core";
import "@spectre-ui/core/styles.css";

function App() {
  return (
    <SpectreThemeProvider defaultTheme="dark">
      {/* Your app */}
    </SpectreThemeProvider>
  );
}
\`\`\`

## Tailwind CSS Integration

If you're using Tailwind CSS, install the spectre-ui plugin for additional utility classes:

\`\`\`bash
pnpm add -D @spectre-ui/tailwind-config
\`\`\`

\`\`\`ts
// tailwind.config.ts
import { spectreUIPlugin } from "@spectre-ui/tailwind-config/plugin";

export default {
  plugins: [spectreUIPlugin],
};
\`\`\`

## Use Components

Import and use any component:

\`\`\`tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@spectre-ui/core";

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
}
\`\`\`

## Packages

- \`@spectre-ui/core\` — Components + ThemeProvider + CSS
- \`@spectre-ui/hooks\` — Utility hooks (useMediaQuery, useClipboard, useDebounce, etc.)
- \`@spectre-ui/themes\` — Theme presets (cyber-dark, cyber-light)
- \`@spectre-ui/tailwind-config\` — Tailwind plugin + config preset
`,
};
