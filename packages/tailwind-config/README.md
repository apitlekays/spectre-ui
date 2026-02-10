# @spectre-ui/tailwind-config

Shared Tailwind CSS plugin and preset for **spectre-ui** — adds HUD corners, grid backgrounds, scanline effects, and glow utilities.

## Installation

```bash
pnpm add @spectre-ui/tailwind-config
```

```bash
npm install @spectre-ui/tailwind-config
```

```bash
yarn add @spectre-ui/tailwind-config
```

## Usage

Add the plugin to your `tailwind.config.js`:

```js
import { spectrePlugin } from "@spectre-ui/tailwind-config";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [spectrePlugin],
};
```

## Utility Classes

| Class | Description |
|-------|-------------|
| `.spectre-hud-corners` | Clipped corner borders in HUD style |
| `.spectre-hud-corners-full` | Full-size clipped corner borders |
| `.spectre-grid-bg` | Futuristic grid background pattern |
| `.spectre-grid-bg-sm` | Smaller grid background pattern |
| `.spectre-scanline` | Animated scanline overlay effect |
| `.spectre-glow` | Default glow box shadow |
| `.spectre-glow-sm` | Small glow box shadow |
| `.spectre-glow-lg` | Large glow box shadow |

## Theme Extensions

The plugin also extends the default Tailwind theme with:

- **Colors** — mapped to CSS custom properties set by the spectre-ui theme system
- **Fonts** — `sans` (Geist Sans), `mono` (Geist Mono / JetBrains Mono)
- **Keyframes and animations** — used by decorative components like ScanBeam and SystemTicker

## Documentation

Full documentation and utility references are available at [spectreui.dev](https://spectreui.dev).

Source code is on [GitHub](https://github.com/apitlekays/spectre-ui).

## License

MIT
