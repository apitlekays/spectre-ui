# @spectre-ui/core

Core component library for **spectre-ui** — 35+ futuristic React components with HUD aesthetics, Radix UI accessibility, and Framer Motion animations.

## Installation

```bash
pnpm add @spectre-ui/core framer-motion
```

```bash
npm install @spectre-ui/core framer-motion
```

```bash
yarn add @spectre-ui/core framer-motion
```

## Quick Start

Import the CSS, wrap your app in `SpectreThemeProvider`, and start using components:

```tsx
import "@spectre-ui/core/styles.css";

import { SpectreThemeProvider, Button } from "@spectre-ui/core";

function App() {
  return (
    <SpectreThemeProvider>
      <Button variant="primary">Launch System</Button>
    </SpectreThemeProvider>
  );
}
```

## Components

### Layout

Container, Grid, Stack, Separator

### Navigation

Navbar, Sidebar, Breadcrumb, Tabs

### Data Display

Card, DataTable, Table, Badge, Avatar, Stat, Timeline, Tooltip, Popover

### Forms

Button, Input, Textarea, Select, Checkbox, Switch, Slider, Form

### Feedback

Alert, Dialog, Toast, Progress, Skeleton, DropdownMenu, CommandPalette

### Decorative

GlowBorder, GridBackground, ScanBeam, ScanlineOverlay, SystemTicker, TerminalText

## Peer Dependencies

| Package | Version |
|---------|---------|
| `react` | `^18 \|\| ^19` |
| `react-dom` | `^18 \|\| ^19` |
| `framer-motion` | `^11 \|\| ^12` (optional) |
| `tailwindcss` | `^3.4.0` |

## Documentation

Full documentation, examples, and theming guides are available at [spectreui.dev](https://spectreui.dev).

Source code is on [GitHub](https://github.com/apitlekays/spectre-ui).

## License

MIT
