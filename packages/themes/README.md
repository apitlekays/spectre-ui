# @spectre-ui/themes

Theme presets for **spectre-ui** — pre-built dark and light themes with the cyber-futuristic aesthetic.

## Installation

```bash
pnpm add @spectre-ui/themes
```

```bash
npm install @spectre-ui/themes
```

```bash
yarn add @spectre-ui/themes
```

## Available Themes

| Theme | Background | Primary | Description |
|-------|-----------|---------|-------------|
| `cyber-dark` | `#020617` | `#0ea5e9` (cyan) | Dark HUD aesthetic with cyan accents |
| `cyber-light` | `#f8fafc` | `#0284c7` (blue) | Light interface with blue accents |

Each theme includes 17 color tokens, font families, and glow effect definitions.

## Usage

```tsx
import { SpectreThemeProvider } from "@spectre-ui/core";
import { cyberDark, cyberLight } from "@spectre-ui/themes";

function App() {
  return (
    <SpectreThemeProvider customTokens={cyberDark}>
      {/* Your app */}
    </SpectreThemeProvider>
  );
}
```

## Documentation

Full theming guide, token references, and customization examples are available at [spectreui.dev/docs/theming](https://spectreui.dev/docs/theming).

Source code is on [GitHub](https://github.com/apitlekays/spectre-ui).

## License

MIT
