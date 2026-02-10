import type { GuideDoc } from "../types.js";

export const themingGuide: GuideDoc = {
  slug: "theming",
  title: "Theming",
  content: `# Theming

spectre-ui uses CSS custom properties (variables) for theming. This makes it easy to switch between themes at runtime, create custom themes, and integrate with any CSS framework.

## Built-in Themes

- **Cyber Dark** (default) — Dark background (#020617), cyan primary (#0ea5e9)
- **Cyber Light** — Light background (#f8fafc), blue primary (#0284c7)

## Theme Provider

\`\`\`tsx
import { SpectreThemeProvider } from "@spectre-ui/core";

function App() {
  return (
    <SpectreThemeProvider
      defaultTheme="dark"    // "dark" | "light"
      storageKey="my-theme"  // localStorage key (default: "spectre-ui-theme")
      useSystemTheme={true}  // follow OS preference
    >
      {children}
    </SpectreThemeProvider>
  );
}
\`\`\`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`defaultTheme\` | \`"dark" \\| "light"\` | \`"dark"\` | Initial theme when no stored preference exists |
| \`storageKey\` | \`string\` | \`"spectre-ui-theme"\` | localStorage key for persisting theme choice |
| \`forcedTheme\` | \`"dark" \\| "light"\` | — | Forces a specific theme, ignoring user preference |
| \`customTokens\` | \`Partial<Record<SpectreTheme, SpectreThemeTokens>>\` | — | Override any design token per theme |
| \`useSystemTheme\` | \`boolean\` | \`false\` | Follow the OS color scheme preference |

## Using the Theme Hook

\`\`\`tsx
import { useSpectreTheme } from "@spectre-ui/core";

function ThemeToggle() {
  const { theme, setTheme, toggleTheme } = useSpectreTheme();
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}
\`\`\`

## CSS Variables

All design tokens are exposed as CSS custom properties:

### Colors
- \`--spectre-background\` / \`--spectre-foreground\`
- \`--spectre-primary\` / \`--spectre-primary-foreground\`
- \`--spectre-secondary\` / \`--spectre-secondary-foreground\`
- \`--spectre-muted\` / \`--spectre-muted-foreground\`
- \`--spectre-accent\` / \`--spectre-accent-foreground\`
- \`--spectre-border\` / \`--spectre-input\` / \`--spectre-ring\`
- \`--spectre-success\` / \`--spectre-warning\` / \`--spectre-destructive\`

### Typography
- \`--spectre-font-sans\` — Inter, system sans-serif
- \`--spectre-font-mono\` — Geist Mono, JetBrains Mono, Fira Code

### Glow Effects
- \`--spectre-glow-sm\` / \`--spectre-glow-md\` / \`--spectre-glow-lg\`

## Custom Themes

Pass custom tokens to override any design token per-theme:

\`\`\`tsx
<SpectreThemeProvider
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
</SpectreThemeProvider>
\`\`\`

## Forced Theme

Lock a page or section to a specific theme regardless of user preference:

\`\`\`tsx
<SpectreThemeProvider forcedTheme="dark">
  {/* Always dark, theme toggle has no effect */}
</SpectreThemeProvider>
\`\`\`

## System Theme

Follow the OS color scheme preference and react to changes:

\`\`\`tsx
<SpectreThemeProvider useSystemTheme>
  {/* Automatically switches when OS theme changes */}
</SpectreThemeProvider>
\`\`\`
`,
};
