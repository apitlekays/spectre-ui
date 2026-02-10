import { z } from "zod";

export interface PromptDef {
  name: string;
  description: string;
  argsSchema?: Record<string, z.ZodType>;
  render: (args: Record<string, string>) => { role: "user"; content: { type: "text"; text: string } }[];
}

const SPECTRE_CONTEXT = `You are building with spectre-ui, a futuristic React component framework with a HUD/FUI aesthetic.

Key design rules:
- 0px border-radius everywhere (sharp corners, never rounded)
- Monospace typography (Geist Mono / JetBrains Mono)
- Cyan glow effects on interactive elements
- HUD corner brackets on key containers (use Card variant="hud" or .spectre-hud-corners)
- Dark backgrounds (#020617) with cyan primary (#0ea5e9)
- Uppercase tracking-widest for section headings

Imports: import { ComponentName } from "@spectre-ui/core";
CSS: import "@spectre-ui/core/styles.css";
Theme: Wrap in <SpectreThemeProvider defaultTheme="dark">`;

export const prompts: PromptDef[] = [
  {
    name: "build-dashboard",
    description:
      "Build a monitoring/analytics dashboard using spectre-ui components",
    argsSchema: {
      sections: z
        .string()
        .describe(
          "Comma-separated dashboard sections (e.g. stat-cards, charts-area, activity-feed, data-table)"
        ),
    },
    render: (args) => [
      {
        role: "user",
        content: {
          type: "text",
          text: `${SPECTRE_CONTEXT}

Build a dashboard with these sections: ${args.sections}

Use these spectre-ui components:
- Stat: for KPI/metric cards (with label, value, change, changeType props)
- Card (variant="hud"): for section containers with HUD corner brackets
- Grid: for responsive layout (cols prop for column count)
- Table / DataTable: for tabular data
- Progress: for progress bars and gauges
- Badge: for status indicators
- Skeleton: for loading states
- Container: for page-level max-width

Apply .spectre-grid-bg to the page background. Use uppercase tracking-widest headings.`,
        },
      },
    ],
  },
  {
    name: "build-landing-page",
    description: "Build a futuristic landing page with spectre-ui",
    argsSchema: {
      sections: z
        .string()
        .describe(
          "Comma-separated sections (e.g. hero, features, cta, testimonials)"
        ),
    },
    render: (args) => [
      {
        role: "user",
        content: {
          type: "text",
          text: `${SPECTRE_CONTEXT}

Build a landing page with these sections: ${args.sections}

Use these spectre-ui components:
- Container: for max-width page sections
- Stack: for vertical spacing between sections
- Card (variant="hud"): for feature cards
- Button (variant="primary"): for CTAs with cyan glow
- TerminalText: for typewriter-effect hero text
- GridBackground: for atmospheric grid pattern behind the hero
- ScanlineOverlay: for subtle CRT effect on the hero
- GlowBorder: for highlighted sections
- Badge: for labels and tags
- Separator: between sections

Apply .spectre-glow-text to the main heading. Use the HUD aesthetic throughout.`,
        },
      },
    ],
  },
  {
    name: "build-form",
    description: "Build a form with spectre-ui form components",
    argsSchema: {
      fields: z
        .string()
        .describe("Comma-separated field names and types (e.g. name:text, email:email, role:select, terms:checkbox)"),
      withValidation: z
        .string()
        .describe("Whether to include validation ('true' or 'false')")
        .default("true"),
    },
    render: (args) => [
      {
        role: "user",
        content: {
          type: "text",
          text: `${SPECTRE_CONTEXT}

Build a form with these fields: ${args.fields}
Include validation: ${args.withValidation}

Use these spectre-ui components:
- Form: for form container with validation support
- Input: for text/email/password fields (with label, error, hint props)
- Textarea: for multi-line text
- Select: for dropdown selection
- Checkbox: for boolean toggles
- Switch: for on/off toggles
- Slider: for range inputs
- Button: for submit (variant="primary") and cancel (variant="ghost")
- Card: wrap the form in a Card for structure

All form inputs have the spectre-ui styling with 0px borders and cyan focus glow built in.`,
        },
      },
    ],
  },
  {
    name: "build-data-view",
    description:
      "Build a data display page with tables, cards, and stats",
    argsSchema: {
      dataType: z
        .string()
        .describe("Type of data to display (e.g. users, products, analytics, orders)"),
    },
    render: (args) => [
      {
        role: "user",
        content: {
          type: "text",
          text: `${SPECTRE_CONTEXT}

Build a data view page for: ${args.dataType}

Use these spectre-ui components:
- DataTable: for the main data table with sorting, filtering, pagination
- Stat: for summary statistics at the top
- Card (variant="hud"): for containing sections
- Badge: for status columns (e.g. active/inactive)
- Avatar: for user images
- Skeleton: for loading states
- Grid: for responsive stat card layout
- Button: for actions (edit, delete, export)
- Dialog: for confirmation modals
- Toast: for action feedback

Use uppercase tracking-widest for table column headers.`,
        },
      },
    ],
  },
  {
    name: "setup-project",
    description: "Set up a new project with spectre-ui from scratch",
    argsSchema: {
      framework: z
        .string()
        .describe("Framework to use (Next.js, Vite, or Remix)"),
    },
    render: (args) => [
      {
        role: "user",
        content: {
          type: "text",
          text: `${SPECTRE_CONTEXT}

Set up a new ${args.framework} project with spectre-ui:

1. Install packages:
   - @spectre-ui/core + framer-motion (required)
   - @spectre-ui/hooks (recommended)
   - @spectre-ui/tailwind-config (if using Tailwind)

2. Import CSS: import "@spectre-ui/core/styles.css" in the root layout

3. Wrap the root with SpectreThemeProvider:
   <SpectreThemeProvider defaultTheme="dark">

4. If using Tailwind, add the plugin:
   import { spectreUIPlugin } from "@spectre-ui/tailwind-config";
   plugins: [spectreUIPlugin]

5. Create a basic page with:
   - Container for max-width
   - Card with variant="hud"
   - Button with variant="primary"
   - A theme toggle using useSpectreTheme

Provide the complete file structure and code.`,
        },
      },
    ],
  },
  {
    name: "build-navigation",
    description:
      "Build a navigation structure with navbar, sidebar, and breadcrumbs",
    argsSchema: {
      layout: z
        .string()
        .describe("Navigation layout type (sidebar, top-nav, or combined)"),
    },
    render: (args) => [
      {
        role: "user",
        content: {
          type: "text",
          text: `${SPECTRE_CONTEXT}

Build a ${args.layout} navigation layout.

Use these spectre-ui components:
- Navbar: top navigation bar with logo, links, and actions
- Sidebar: collapsible side navigation with sections and items
- Breadcrumb: path-based breadcrumb trail
- Tabs: for sub-navigation within pages
- DropdownMenu: for user menu and overflow items
- CommandPalette: for Cmd+K search/navigation
- Button (variant="ghost"): for nav items
- Separator: for dividing nav sections

The navigation should feel like a military command interface with uppercase labels and the HUD aesthetic.`,
        },
      },
    ],
  },
  {
    name: "add-theme-switching",
    description: "Add dark/light theme switching to an existing app",
    argsSchema: {
      storageMethod: z
        .string()
        .describe("Where to persist the theme choice (localStorage or cookie)")
        .default("localStorage"),
    },
    render: (args) => [
      {
        role: "user",
        content: {
          type: "text",
          text: `${SPECTRE_CONTEXT}

Add theme switching to the app using ${args.storageMethod} for persistence.

Steps:
1. Wrap root with SpectreThemeProvider:
   - storageKey: "spectre-ui-theme" (for localStorage)
   - useSystemTheme: true (to follow OS preference initially)

2. Create a ThemeToggle component using useSpectreTheme():
   const { theme, toggleTheme } = useSpectreTheme();
   - Use Button variant="ghost" with a sun/moon icon
   - Display current theme name

3. For cookie persistence (SSR/Next.js):
   - Read cookie on server to set defaultTheme
   - Update cookie in setTheme callback

The SpectreThemeProvider manages all CSS variable switching automatically via the data-spectre-theme attribute.

Available theme tokens that change per-theme:
- Background/foreground colors
- Primary/secondary/accent colors
- Border, input, ring colors
- Glow effect intensities`,
        },
      },
    ],
  },
];
