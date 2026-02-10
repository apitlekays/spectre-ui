"use client";

import React, { useState } from "react";
import { Button, CommandPalette, type CommandItem } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const commandPaletteProps: PropDef[] = [
  {
    name: "items",
    type: "CommandItem[]",
    required: true,
    description:
      "Array of command items to display. Each item has id, label, onSelect, and optional description, icon, shortcut, and group.",
  },
  {
    name: "open",
    type: "boolean",
    description:
      "Controlled open state. When provided, the component becomes controlled.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback when the open state changes.",
  },
  {
    name: "placeholder",
    type: "string",
    default: '"Type a command..."',
    description: "Placeholder text shown in the search input.",
  },
];

const commandItemProps: PropDef[] = [
  {
    name: "id",
    type: "string",
    required: true,
    description: "Unique identifier for the command item.",
  },
  {
    name: "label",
    type: "string",
    required: true,
    description: "Display label for the command.",
  },
  {
    name: "description",
    type: "string",
    description: "Optional secondary text shown below the label.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Optional icon displayed to the left of the label.",
  },
  {
    name: "shortcut",
    type: "string",
    description: "Keyboard shortcut hint displayed on the right side.",
  },
  {
    name: "group",
    type: "string",
    default: '"Commands"',
    description: "Group heading under which this item appears.",
  },
  {
    name: "onSelect",
    type: "() => void",
    required: true,
    description: "Callback invoked when the command is selected.",
  },
];

const demoItems: CommandItem[] = [
  {
    id: "dashboard",
    label: "Go to Dashboard",
    description: "Open the main dashboard",
    group: "Navigation",
    onSelect: () => {},
  },
  {
    id: "settings",
    label: "Open Settings",
    description: "Configure preferences",
    group: "Navigation",
    shortcut: "Ctrl+,",
    onSelect: () => {},
  },
  {
    id: "theme",
    label: "Toggle Theme",
    group: "Actions",
    shortcut: "Ctrl+T",
    onSelect: () => {},
  },
  {
    id: "search",
    label: "Search Agents",
    description: "Find active agents",
    group: "Actions",
    shortcut: "Ctrl+F",
    onSelect: () => {},
  },
];

export default function CommandPalettePageContent() {
  const [open, setOpen] = useState(false);

  return (
    <div className="docs-prose">
      <h1>CommandPalette</h1>
      <p>
        A Cmd+K style command palette for searching and executing commands.
        Supports grouped items, keyboard navigation, fuzzy filtering, and
        keyboard shortcuts. Built on Radix Dialog.
      </p>

      <h2>Basic Usage</h2>
      <ComponentPreview
        code={`const items: CommandItem[] = [
  { id: "dashboard", label: "Go to Dashboard", group: "Navigation", onSelect: () => {} },
  { id: "theme", label: "Toggle Theme", group: "Actions", shortcut: "Ctrl+T", onSelect: () => {} },
];

<Button onClick={() => setOpen(true)}>Open Command Palette (Ctrl+K)</Button>
<CommandPalette items={items} open={open} onOpenChange={setOpen} />`}
      >
        <Button onClick={() => setOpen(true)}>
          Open Command Palette (Ctrl+K)
        </Button>
        <CommandPalette items={demoItems} open={open} onOpenChange={setOpen} />
      </ComponentPreview>

      <h2>CommandPalette Props</h2>
      <PropsTable props={commandPaletteProps} />

      <h2>CommandItem Shape</h2>
      <PropsTable props={commandItemProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Built on Radix Dialog with an accessible overlay and focus trap.
        </li>
        <li>
          Opens with Ctrl+K (or Cmd+K on macOS) globally, closes with Escape.
        </li>
        <li>
          Arrow Up/Down keys navigate between items, Enter selects the
          highlighted item.
        </li>
        <li>
          The dialog title and description are screen-reader-only for assistive
          technology.
        </li>
        <li>Search input is automatically focused when the palette opens.</li>
      </ul>
    </div>
  );
}
