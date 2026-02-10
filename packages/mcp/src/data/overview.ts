export const overview = `# spectre-ui

A futuristic React component framework with a HUD/FUI aesthetic. 35+ production-ready components, dark cyber design tokens, Framer Motion animations, and Radix UI accessibility — all with sharp 0px borders and monospace typography.

## Packages

| Package | Description |
|---------|-------------|
| \`@spectre-ui/core\` | Components, ThemeProvider, and base CSS |
| \`@spectre-ui/hooks\` | Utility hooks: useMediaQuery, useClipboard, useDebounce, useLocalStorage, and more |
| \`@spectre-ui/themes\` | Theme presets (cyber-dark, cyber-light) |
| \`@spectre-ui/tailwind-config\` | Tailwind CSS plugin with spectre-ui colors, fonts, keyframes, and utility classes |

## Quick Start

\`\`\`bash
pnpm add @spectre-ui/core framer-motion
\`\`\`

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

## Design Philosophy

- **0px border-radius** — sharp, angular corners everywhere (non-configurable)
- **Monospace-first** — Geist Mono / JetBrains Mono font stack
- **Cyan glow effects** — holographic-style highlights on interactive elements
- **HUD corner brackets** — decorative L-shaped brackets on containers
- **Grid backgrounds** — subtle blueprint-style line patterns
- **Scanline animations** — optional CRT/retro overlay effects

## Guides

- **Getting Started** — \`spectre://guides/getting-started\`
- **Installation** — \`spectre://guides/installation\`
- **Theming** — \`spectre://guides/theming\`
- **Design Brief** — \`spectre://guides/design-brief\`

## Explore

- All components: \`spectre://components\`
- All hooks: \`spectre://hooks\`
- Design tokens: \`spectre://design-system/tokens\`
- Tailwind theme: \`spectre://design-system/tailwind-theme\`
- Utility classes: \`spectre://design-system/utilities\`
- Color palettes: \`spectre://design-system/colors\`
`;
