import type { ComponentDoc } from "../types.js";

export const commandPaletteDoc: ComponentDoc = {
  name: "CommandPalette",
  slug: "command-palette",
  category: "navigation",
  description: "Searchable command palette overlay (Cmd+K / Ctrl+K). Supports grouping, keyboard navigation, icons, and shortcut hints.",
  importStatement: 'import { CommandPalette } from "@spectre-ui/core";',
  props: [
    { name: "items", type: "CommandItem[]", required: true, description: "Array of command items. Each has `id`, `label`, `onSelect`, and optional `description`, `icon`, `shortcut`, `group`." },
    { name: "open", type: "boolean", description: "Controlled open state." },
    { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes." },
    { name: "placeholder", type: "string", default: '"Type a command..."', description: "Search input placeholder text." },
  ],
  examples: [
    {
      title: "Basic Command Palette",
      code: `const items = [\n  { id: "1", label: "Go to Dashboard", group: "Navigation", onSelect: () => router.push("/dashboard") },\n  { id: "2", label: "Go to Settings", group: "Navigation", onSelect: () => router.push("/settings") },\n  { id: "3", label: "Toggle Theme", group: "Actions", shortcut: "⌘T", onSelect: () => toggleTheme() },\n];\n\n<CommandPalette items={items} />`,
    },
  ],
  accessibility: "Focuses search input on open. Arrow keys navigate items. Enter selects. Escape closes. Items are announced via aria-label.",
};
