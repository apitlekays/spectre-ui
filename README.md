# spectre-ui

A futuristic React component framework with dark cyber aesthetics, built-in animations, and full accessibility.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Features

- **35+ Components** — Production-ready, from Buttons to Command Palettes
- **FUI Aesthetic** — Sharp edges, HUD corners, cyan glow effects, monospace typography
- **Dark + Light Themes** — Cyber Dark and Cyber Light presets with CSS variable theming
- **Framer Motion** — Built-in entrance, hover, and exit animations
- **Radix UI** — Accessible primitives for keyboard navigation and screen readers
- **Tailwind CSS** — Custom plugin with spectre-ui design tokens and utilities
- **TypeScript** — Full type safety with exported interfaces
- **Tree-shakeable** — Import only what you need

## Quick Start

```bash
pnpm add @spectre-ui/core framer-motion
```

```tsx
import { SpectreThemeProvider, Button, Card } from "@spectre-ui/core";
import "@spectre-ui/core/styles.css";

function App() {
  return (
    <SpectreThemeProvider defaultTheme="dark">
      <Card variant="hud">
        <Button variant="primary">Launch Mission</Button>
      </Card>
    </SpectreThemeProvider>
  );
}
```

## Packages

| Package | Description |
|---------|-------------|
| `@spectre-ui/core` | Components + ThemeProvider + CSS |
| `@spectre-ui/hooks` | Utility hooks (useClipboard, useMediaQuery, etc.) |
| `@spectre-ui/themes` | Theme presets (cyber-dark, cyber-light) |
| `@spectre-ui/tailwind-config` | Tailwind CSS plugin + config preset |

## Components

### Layout
Container, Grid, Stack, Separator, Sidebar

### Data Display
Card, Badge, Avatar, Table, DataTable, Timeline, Stat, Skeleton, Progress

### Forms
Button, Input, Textarea, Select, Checkbox, Switch, Slider, Form

### Feedback
Alert, Toast, Dialog, Tooltip, Popover

### Navigation
Navbar, Tabs, Breadcrumb, DropdownMenu, CommandPalette

### Decorative
GridBackground, ScanlineOverlay, SystemTicker, TerminalText, GlowBorder

## Theming

spectre-ui uses CSS custom properties for theming. Wrap your app with `SpectreThemeProvider`:

```tsx
<SpectreThemeProvider
  defaultTheme="dark"
  customTokens={{
    dark: { primary: "#22c55e" }, // Custom green theme
  }}
>
  {children}
</SpectreThemeProvider>
```

## Tailwind Integration

```bash
pnpm add -D @spectre-ui/tailwind-config
```

```ts
// tailwind.config.ts
import { spectreUIPlugin } from "@spectre-ui/tailwind-config/plugin";

export default {
  plugins: [spectreUIPlugin],
};
```

This gives you utilities like `spectre-hud-corners`, `spectre-grid-bg`, `spectre-scanline`, and `spectre-glow`.

## Development

```bash
git clone https://github.com/apitlekays/spectre-ui.git
cd spectre-ui
pnpm install
pnpm dev
```

## License

MIT
