import type { ComponentDoc } from "../types.js";

export const dropdownMenuDoc: ComponentDoc = {
  name: "DropdownMenu",
  slug: "dropdown-menu",
  category: "navigation",
  description: "Context menu with keyboard navigation, submenus, checkbox items, and radio groups. Built on Radix UI DropdownMenu.",
  importStatement: 'import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuRadioGroup } from "@spectre-ui/core";',
  props: [
    { name: "children", type: "ReactNode", required: true, description: "Trigger and content elements." },
  ],
  subComponents: [
    {
      name: "DropdownMenuTrigger",
      description: "Element that opens the dropdown when clicked.",
      props: [{ name: "asChild", type: "boolean", description: "Merge props onto child element instead of wrapping." }],
    },
    {
      name: "DropdownMenuContent",
      description: "The dropdown panel. Rendered in a portal with glow border effect.",
      props: [
        { name: "sideOffset", type: "number", default: "4", description: "Distance from the trigger." },
        { name: "className", type: "string", description: "Additional CSS classes." },
      ],
    },
    {
      name: "DropdownMenuItem",
      description: "A single menu item.",
      props: [
        { name: "inset", type: "boolean", description: "Adds left padding to align with items that have icons." },
        { name: "className", type: "string", description: "Additional CSS classes." },
      ],
    },
    {
      name: "DropdownMenuCheckboxItem",
      description: "A menu item with a checkbox indicator.",
      props: [
        { name: "checked", type: "boolean", description: "Whether the item is checked." },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback on check change." },
      ],
    },
    {
      name: "DropdownMenuLabel",
      description: "Non-interactive label for grouping items.",
      props: [{ name: "inset", type: "boolean", description: "Adds left padding." }],
    },
    {
      name: "DropdownMenuSeparator",
      description: "Visual separator line between menu items.",
      props: [],
    },
    {
      name: "DropdownMenuShortcut",
      description: "Right-aligned keyboard shortcut hint text.",
      props: [],
    },
  ],
  examples: [
    {
      title: "Basic Dropdown",
      code: `<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline">Open Menu</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>Actions</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Profile <DropdownMenuShortcut>⌘P</DropdownMenuShortcut></DropdownMenuItem>\n    <DropdownMenuItem>Settings <DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Log out</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`,
    },
  ],
  accessibility: "Built on Radix UI DropdownMenu with full keyboard navigation, focus management, and ARIA roles.",
};
