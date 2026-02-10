export const SITE_CONFIG = {
  name: "spectre-ui",
  title: "spectre-ui | FUI React Component Framework",
  description:
    "A futuristic React UI component framework with dark cyber aesthetics, HUD-style interfaces, Framer Motion animations, and Radix UI accessibility. Build interfaces that look like they belong in a covert ops dashboard.",
  url: "https://spectreui.dev",
  author: "Hafiz Hanif, PhD",
  authorUrl: "https://drhafizhanif.net",
  githubUrl: "https://github.com/apitlekays/spectre-ui",
  ogImage: "/og-image.png",
  themeColor: "#0ea5e9",
  locale: "en_US",
  version: "1.0.0",
} as const;

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  category: "landing" | "guide" | "component" | "hook";
}

export const PAGE_METADATA: Record<string, PageSEO> = {
  "/": {
    title: "spectre-ui — Futuristic React UI Framework",
    description:
      "Build futuristic, HUD-style interfaces with spectre-ui. 35+ dark-themed React components with Framer Motion animations, Radix UI accessibility, and a cyberpunk design system for covert ops dashboards.",
    keywords: [
      "futuristic UI framework",
      "FUI React components",
      "cyberpunk UI",
      "HUD interface React",
      "spectre dashboard",
      "sci-fi UI library",
      "movie-like UI React",
      "spy interface components",
      "covert ops UI",
      "dark theme React framework",
      "React component library",
      "Tailwind CSS components",
      "Framer Motion UI",
      "Radix UI components",
    ],
    category: "landing",
  },

  // ── Guides ──────────────────────────────────────────
  "/docs/getting-started": {
    title: "Getting Started",
    description:
      "Get up and running with spectre-ui in under a minute. Install the core package, wrap your app with SpectreThemeProvider, and start building futuristic interfaces.",
    keywords: [
      "spectre-ui getting started",
      "FUI setup guide",
      "install React UI framework",
      "dark theme setup",
      "SpectreThemeProvider setup",
    ],
    category: "guide",
  },
  "/docs/installation": {
    title: "Installation",
    description:
      "Install spectre-ui packages via pnpm, npm, or yarn. Configure Tailwind CSS, import styles, and set up the theme provider for your project.",
    keywords: [
      "spectre-ui installation",
      "install FUI components",
      "pnpm add spectre-ui",
      "React component library install",
      "Tailwind CSS plugin setup",
    ],
    category: "guide",
  },
  "/docs/theming": {
    title: "Theming",
    description:
      "Customize spectre-ui with CSS custom properties. Create custom themes, switch between dark and light modes, and build your own color palettes with the theming system.",
    keywords: [
      "spectre-ui theming",
      "dark theme customization",
      "CSS variables theme",
      "HUD design system",
      "cyberpunk color palette",
      "custom dark theme React",
    ],
    category: "guide",
  },
  "/docs/design-brief": {
    title: "Design Brief",
    description:
      "The design philosophy behind spectre-ui: sharp edges, HUD corners, cyan glow effects, monospace typography, and a covert operations aesthetic inspired by sci-fi film interfaces.",
    keywords: [
      "FUI design brief",
      "futuristic UI design",
      "HUD design principles",
      "cyberpunk design system",
      "sci-fi interface design",
    ],
    category: "guide",
  },
  "/docs/changelog": {
    title: "Changelog",
    description:
      "spectre-ui release history. Track new components, features, bug fixes, and breaking changes across all versions.",
    keywords: [
      "spectre-ui changelog",
      "spectre-ui releases",
      "spectre-ui versions",
    ],
    category: "guide",
  },
  "/docs/contributing": {
    title: "Contributing",
    description:
      "Contribute to spectre-ui. Learn the project structure, component guidelines, testing requirements, and pull request workflow.",
    keywords: [
      "contribute to spectre-ui",
      "open source React components",
      "spectre-ui development",
    ],
    category: "guide",
  },
  "/docs/mcp": {
    title: "MCP Server",
    description:
      "Give AI coding assistants like Claude Code, Cursor, and Claude Desktop full access to spectre-ui documentation via the Model Context Protocol server.",
    keywords: [
      "spectre-ui MCP",
      "Model Context Protocol",
      "AI coding assistant",
      "Claude Code spectre-ui",
      "Cursor MCP server",
      "spectre-ui documentation API",
    ],
    category: "guide",
  },

  // ── Components ──────────────────────────────────────
  "/docs/components/alert": {
    title: "Alert",
    description:
      "Contextual feedback messages with FUI styling. Supports info, success, warning, and destructive variants with HUD-style borders and glow effects.",
    keywords: ["FUI alert component", "dark theme alert", "cyberpunk alert React", "spectre-ui Alert"],
    category: "component",
  },
  "/docs/components/avatar": {
    title: "Avatar",
    description:
      "User representation with image, initials, or icon fallback. Sizes from xs to xl with optional status indicator and HUD border styling.",
    keywords: ["FUI avatar component", "dark theme avatar", "cyberpunk avatar React", "spectre-ui Avatar"],
    category: "component",
  },
  "/docs/components/badge": {
    title: "Badge",
    description:
      "Status indicators and labels with FUI aesthetics. Variants for primary, secondary, success, warning, destructive, and outline with optional pulse dot.",
    keywords: ["FUI badge component", "dark theme badge", "cyberpunk badge React", "spectre-ui Badge"],
    category: "component",
  },
  "/docs/components/breadcrumb": {
    title: "Breadcrumb",
    description:
      "Navigation breadcrumb trail with monospace typography and HUD styling. Supports custom separators and truncation.",
    keywords: ["FUI breadcrumb component", "dark theme breadcrumb", "cyberpunk navigation", "spectre-ui Breadcrumb"],
    category: "component",
  },
  "/docs/components/button": {
    title: "Button",
    description:
      "Primary interactive element with FUI styling. Variants: primary, secondary, outline, ghost, destructive. Sizes: sm, md, lg, icon. Built-in Framer Motion animations.",
    keywords: ["FUI button component", "dark theme button", "cyberpunk button React", "spectre-ui Button", "animated button React"],
    category: "component",
  },
  "/docs/components/card": {
    title: "Card",
    description:
      "Content container with HUD corner brackets and glow effects. Variants: default, hud, elevated. Composable with CardHeader, CardContent, CardFooter.",
    keywords: ["FUI card component", "dark theme card", "HUD card React", "cyberpunk card", "spectre-ui Card"],
    category: "component",
  },
  "/docs/components/checkbox": {
    title: "Checkbox",
    description:
      "Accessible checkbox built on Radix UI with FUI styling. Supports indeterminate state and keyboard navigation.",
    keywords: ["FUI checkbox component", "dark theme checkbox", "cyberpunk checkbox React", "spectre-ui Checkbox"],
    category: "component",
  },
  "/docs/components/command-palette": {
    title: "CommandPalette",
    description:
      "Keyboard-driven command menu with search, sections, and keyboard navigation. Inspired by VS Code and Raycast with FUI aesthetics.",
    keywords: ["FUI command palette", "dark theme command menu", "keyboard command React", "spectre-ui CommandPalette"],
    category: "component",
  },
  "/docs/components/container": {
    title: "Container",
    description:
      "Layout wrapper with responsive max-widths and optional HUD corner decoration. Centers content with consistent padding.",
    keywords: ["FUI container component", "dark theme layout", "HUD container React", "spectre-ui Container"],
    category: "component",
  },
  "/docs/components/data-table": {
    title: "DataTable",
    description:
      "Feature-rich data table with sorting, filtering, and pagination. FUI-styled headers and rows with monospace typography.",
    keywords: ["FUI data table", "dark theme data grid", "cyberpunk table React", "spectre-ui DataTable"],
    category: "component",
  },
  "/docs/components/dialog": {
    title: "Dialog",
    description:
      "Accessible modal dialog built on Radix UI with FUI overlay and HUD-style content panel. Supports custom close triggers and animations.",
    keywords: ["FUI dialog component", "dark theme modal", "cyberpunk dialog React", "spectre-ui Dialog"],
    category: "component",
  },
  "/docs/components/dropdown-menu": {
    title: "DropdownMenu",
    description:
      "Accessible dropdown menu built on Radix UI with FUI styling. Supports submenus, checkboxes, radio groups, and keyboard navigation.",
    keywords: ["FUI dropdown menu", "dark theme dropdown", "cyberpunk menu React", "spectre-ui DropdownMenu"],
    category: "component",
  },
  "/docs/components/form": {
    title: "Form",
    description:
      "Form layout component with labeled fields and validation messages. Integrates with spectre-ui input components for consistent FUI styling.",
    keywords: ["FUI form component", "dark theme form", "cyberpunk form React", "spectre-ui Form"],
    category: "component",
  },
  "/docs/components/glow-border": {
    title: "GlowBorder",
    description:
      "Decorative wrapper that adds an animated cyan glow border effect. Customizable intensity and animation speed.",
    keywords: ["FUI glow border", "neon border React", "cyberpunk glow effect", "spectre-ui GlowBorder"],
    category: "component",
  },
  "/docs/components/grid": {
    title: "Grid",
    description:
      "CSS Grid layout component with responsive columns, gap control, and FUI-aligned defaults. Supports auto-fill and auto-fit patterns.",
    keywords: ["FUI grid component", "dark theme grid layout", "cyberpunk grid React", "spectre-ui Grid"],
    category: "component",
  },
  "/docs/components/grid-background": {
    title: "GridBackground",
    description:
      "Full-page grid pattern background inspired by HUD interfaces. Customizable grid size, color, and opacity.",
    keywords: ["FUI grid background", "HUD background pattern", "cyberpunk grid React", "spectre-ui GridBackground"],
    category: "component",
  },
  "/docs/components/input": {
    title: "Input",
    description:
      "Text input field with FUI styling. Supports all HTML input types with monospace typography, border glow on focus, and validation states.",
    keywords: ["FUI input component", "dark theme input", "cyberpunk input React", "spectre-ui Input"],
    category: "component",
  },
  "/docs/components/navbar": {
    title: "Navbar",
    description:
      "Top navigation bar with sticky positioning, backdrop blur, and FUI border styling. Composable with links, buttons, and brand elements.",
    keywords: ["FUI navbar component", "dark theme navbar", "cyberpunk navigation bar", "spectre-ui Navbar"],
    category: "component",
  },
  "/docs/components/popover": {
    title: "Popover",
    description:
      "Floating content panel built on Radix UI with FUI styling. Supports positioning, arrow, and custom triggers.",
    keywords: ["FUI popover component", "dark theme popover", "cyberpunk popover React", "spectre-ui Popover"],
    category: "component",
  },
  "/docs/components/progress": {
    title: "Progress",
    description:
      "Determinate and indeterminate progress indicators with FUI glow effects and optional percentage label.",
    keywords: ["FUI progress bar", "dark theme progress", "cyberpunk progress React", "spectre-ui Progress"],
    category: "component",
  },
  "/docs/components/scan-beam": {
    title: "ScanBeam",
    description:
      "Decorative scanning beam effect that sweeps across its container. Customizable speed, opacity, size, and direction.",
    keywords: ["FUI scan beam", "HUD scan effect", "cyberpunk scan animation", "spectre-ui ScanBeam"],
    category: "component",
  },
  "/docs/components/scanline-overlay": {
    title: "ScanlineOverlay",
    description:
      "CRT-style scanline overlay that adds retro-futuristic texture to any container. Customizable opacity and line spacing.",
    keywords: ["FUI scanline overlay", "CRT effect React", "retro futuristic overlay", "spectre-ui ScanlineOverlay"],
    category: "component",
  },
  "/docs/components/select": {
    title: "Select",
    description:
      "Accessible select dropdown built on Radix UI with FUI styling. Supports groups, labels, and keyboard navigation.",
    keywords: ["FUI select component", "dark theme select", "cyberpunk dropdown React", "spectre-ui Select"],
    category: "component",
  },
  "/docs/components/separator": {
    title: "Separator",
    description:
      "Visual divider for content sections. Horizontal and vertical orientations with FUI border color.",
    keywords: ["FUI separator component", "dark theme divider", "spectre-ui Separator"],
    category: "component",
  },
  "/docs/components/sidebar": {
    title: "Sidebar",
    description:
      "Side navigation panel with FUI styling. Supports collapsible sections, active states, and responsive behavior.",
    keywords: ["FUI sidebar component", "dark theme sidebar", "cyberpunk navigation panel", "spectre-ui Sidebar"],
    category: "component",
  },
  "/docs/components/skeleton": {
    title: "Skeleton",
    description:
      "Loading placeholder with animated shimmer effect. Matches FUI aesthetic with configurable dimensions.",
    keywords: ["FUI skeleton loader", "dark theme skeleton", "cyberpunk loading React", "spectre-ui Skeleton"],
    category: "component",
  },
  "/docs/components/slider": {
    title: "Slider",
    description:
      "Range slider built on Radix UI with FUI styling. Supports min, max, step, and custom track/thumb colors.",
    keywords: ["FUI slider component", "dark theme range slider", "cyberpunk slider React", "spectre-ui Slider"],
    category: "component",
  },
  "/docs/components/stack": {
    title: "Stack",
    description:
      "Flex-based layout component for vertical and horizontal stacking. Configurable gap, alignment, and wrapping.",
    keywords: ["FUI stack component", "dark theme layout stack", "spectre-ui Stack"],
    category: "component",
  },
  "/docs/components/stat": {
    title: "Stat",
    description:
      "Numeric statistic display with label, value, and optional change indicator. HUD-style presentation for dashboards.",
    keywords: ["FUI stat component", "dark theme statistic", "HUD dashboard stat", "spectre-ui Stat"],
    category: "component",
  },
  "/docs/components/switch": {
    title: "Switch",
    description:
      "Toggle switch built on Radix UI with FUI styling. Accessible with keyboard navigation and screen reader support.",
    keywords: ["FUI switch component", "dark theme toggle", "cyberpunk switch React", "spectre-ui Switch"],
    category: "component",
  },
  "/docs/components/system-ticker": {
    title: "SystemTicker",
    description:
      "Scrolling text ticker displaying system-style messages. Customizable speed, direction, and message array.",
    keywords: ["FUI system ticker", "HUD scrolling text", "cyberpunk ticker React", "spectre-ui SystemTicker"],
    category: "component",
  },
  "/docs/components/table": {
    title: "Table",
    description:
      "Styled HTML table with FUI aesthetics. Composable with TableHeader, TableBody, TableRow, TableCell, and TableCaption.",
    keywords: ["FUI table component", "dark theme table", "cyberpunk table React", "spectre-ui Table"],
    category: "component",
  },
  "/docs/components/tabs": {
    title: "Tabs",
    description:
      "Tabbed interface built on Radix UI with FUI styling. Supports keyboard navigation and animated active indicator.",
    keywords: ["FUI tabs component", "dark theme tabs", "cyberpunk tabs React", "spectre-ui Tabs"],
    category: "component",
  },
  "/docs/components/terminal-text": {
    title: "TerminalText",
    description:
      "Typewriter text effect with blinking cursor. Simulates terminal output with configurable typing speed and delay.",
    keywords: ["FUI terminal text", "typewriter effect React", "cyberpunk text animation", "spectre-ui TerminalText"],
    category: "component",
  },
  "/docs/components/textarea": {
    title: "Textarea",
    description:
      "Multi-line text input with FUI styling. Monospace typography, border glow on focus, and auto-resize support.",
    keywords: ["FUI textarea component", "dark theme textarea", "cyberpunk textarea React", "spectre-ui Textarea"],
    category: "component",
  },
  "/docs/components/timeline": {
    title: "Timeline",
    description:
      "Vertical timeline for displaying chronological events. HUD-style connector lines and dot indicators.",
    keywords: ["FUI timeline component", "dark theme timeline", "cyberpunk timeline React", "spectre-ui Timeline"],
    category: "component",
  },
  "/docs/components/toast": {
    title: "Toast",
    description:
      "Notification toast built on Radix UI with FUI styling. Supports variants, actions, and auto-dismiss with progress indicator.",
    keywords: ["FUI toast notification", "dark theme toast", "cyberpunk notification React", "spectre-ui Toast"],
    category: "component",
  },
  "/docs/components/tooltip": {
    title: "Tooltip",
    description:
      "Accessible tooltip built on Radix UI with FUI styling. Appears on hover/focus with configurable positioning and delay.",
    keywords: ["FUI tooltip component", "dark theme tooltip", "cyberpunk tooltip React", "spectre-ui Tooltip"],
    category: "component",
  },

  // ── Hooks ───────────────────────────────────────────
  "/docs/hooks/use-theme": {
    title: "useTheme",
    description:
      "Access and control the current spectre-ui theme. Returns theme state, setTheme, and toggleTheme from SpectreThemeProvider.",
    keywords: ["React useTheme hook", "spectre-ui useTheme", "dark mode toggle hook", "theme context React"],
    category: "hook",
  },
  "/docs/hooks/use-clipboard": {
    title: "useClipboard",
    description:
      "Copy text to clipboard with success feedback. Returns copy function and copied state with configurable timeout.",
    keywords: ["React useClipboard hook", "spectre-ui useClipboard", "copy to clipboard React", "clipboard hook"],
    category: "hook",
  },
  "/docs/hooks/use-media-query": {
    title: "useMediaQuery",
    description:
      "Listen to CSS media query matches. Returns boolean indicating if the query matches, with SSR support.",
    keywords: ["React useMediaQuery hook", "spectre-ui useMediaQuery", "responsive hook React", "media query hook"],
    category: "hook",
  },
  "/docs/hooks/use-keyboard-shortcut": {
    title: "useKeyboardShortcut",
    description:
      "Register keyboard shortcuts with modifier key support. Handles key combinations like Ctrl+K, Cmd+Shift+P.",
    keywords: ["React useKeyboardShortcut hook", "spectre-ui useKeyboardShortcut", "keyboard shortcut React", "hotkey hook"],
    category: "hook",
  },
  "/docs/hooks/use-debounce": {
    title: "useDebounce",
    description:
      "Debounce a value with configurable delay. Useful for search inputs and API calls that should wait for user to stop typing.",
    keywords: ["React useDebounce hook", "spectre-ui useDebounce", "debounce value React", "debounce hook"],
    category: "hook",
  },
  "/docs/hooks/use-local-storage": {
    title: "useLocalStorage",
    description:
      "Persist state to localStorage with automatic serialization. Syncs across tabs with the storage event.",
    keywords: ["React useLocalStorage hook", "spectre-ui useLocalStorage", "localStorage React hook", "persistent state hook"],
    category: "hook",
  },
  "/docs/hooks/use-click-outside": {
    title: "useClickOutside",
    description:
      "Detect clicks outside a referenced element. Useful for closing dropdowns, modals, and popovers.",
    keywords: ["React useClickOutside hook", "spectre-ui useClickOutside", "click outside React", "outside click hook"],
    category: "hook",
  },
  "/docs/hooks/use-scroll-lock": {
    title: "useScrollLock",
    description:
      "Lock body scroll when modals or overlays are open. Preserves scroll position and prevents background scrolling.",
    keywords: ["React useScrollLock hook", "spectre-ui useScrollLock", "scroll lock React", "body scroll lock hook"],
    category: "hook",
  },
  "/docs/hooks/use-reduced-motion": {
    title: "useReducedMotion",
    description:
      "Detect if the user prefers reduced motion. Returns boolean to conditionally disable animations for accessibility.",
    keywords: ["React useReducedMotion hook", "spectre-ui useReducedMotion", "reduced motion React", "accessibility motion hook"],
    category: "hook",
  },
  "/docs/hooks/use-is-mounted": {
    title: "useIsMounted",
    description:
      "Track whether a component is mounted. Returns boolean to prevent state updates on unmounted components.",
    keywords: ["React useIsMounted hook", "spectre-ui useIsMounted", "is mounted React", "mount state hook"],
    category: "hook",
  },
};

export function getPageMetadata(pathname: string): PageSEO | undefined {
  return PAGE_METADATA[pathname];
}

export function getAllRoutes(): string[] {
  return Object.keys(PAGE_METADATA);
}
