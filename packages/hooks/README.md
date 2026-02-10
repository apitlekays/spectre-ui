# @spectre-ui/hooks

Utility React hooks for **spectre-ui** — 9 hooks for clipboard, media queries, keyboard shortcuts, scroll lock, and more.

## Installation

```bash
pnpm add @spectre-ui/hooks
```

```bash
npm install @spectre-ui/hooks
```

```bash
yarn add @spectre-ui/hooks
```

## Available Hooks

| Hook | Description |
|------|-------------|
| `useMediaQuery` | Subscribe to a CSS media query and get a boolean match result |
| `useClickOutside` | Detect clicks outside a referenced element |
| `useScrollLock` | Lock and unlock body scroll programmatically |
| `useClipboard` | Copy text to the clipboard with a copied-state timeout |
| `useLocalStorage` | Read and write values to localStorage with React state sync |
| `useKeyboardShortcut` | Bind global keyboard shortcuts with modifier key support |
| `useReducedMotion` | Detect the user's `prefers-reduced-motion` system setting |
| `useIsMounted` | Track whether a component is currently mounted |
| `useDebounce` | Debounce a rapidly changing value by a given delay |

## Quick Example

```tsx
import { useClipboard } from "@spectre-ui/hooks";

function CopyButton({ text }: { text: string }) {
  const { copy, hasCopied } = useClipboard();

  return (
    <button onClick={() => copy(text)}>
      {hasCopied ? "Copied" : "Copy"}
    </button>
  );
}
```

## Note

`useSpectreTheme` lives in `@spectre-ui/core`, not this package. Import it from there when working with theme tokens.

## Peer Dependencies

| Package | Version |
|---------|---------|
| `react` | `^18 \|\| ^19` |
| `react-dom` | `^18 \|\| ^19` |

## Documentation

Full documentation, examples, and API references are available at [spectreui.dev](https://spectreui.dev).

Source code is on [GitHub](https://github.com/apitlekays/spectre-ui).

## License

MIT
