import type { ComponentDoc } from "../types.js";

export const selectDoc: ComponentDoc = {
  name: "Select",
  slug: "select",
  category: "forms",
  description: "Dropdown select component built on Radix UI Select. Features grouped items, custom trigger styling, and keyboard navigation.",
  importStatement: 'import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from "@spectre-ui/core";',
  props: [
    { name: "value", type: "string", description: "Controlled selected value." },
    { name: "onValueChange", type: "(value: string) => void", description: "Callback when selection changes." },
    { name: "defaultValue", type: "string", description: "Default selected value (uncontrolled)." },
  ],
  subComponents: [
    { name: "SelectTrigger", description: "Button that opens the dropdown.", props: [{ name: "error", type: "boolean", description: "Show error styling." }, { name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "SelectValue", description: "Displays the selected value text.", props: [{ name: "placeholder", type: "string", description: "Placeholder when no value selected." }] },
    { name: "SelectContent", description: "Dropdown panel containing items.", props: [{ name: "position", type: '"popper"', description: "Positioning strategy." }] },
    { name: "SelectItem", description: "A selectable option.", props: [{ name: "value", type: "string", required: true, description: "Item value." }] },
    { name: "SelectGroup", description: "Groups related items.", props: [] },
    { name: "SelectLabel", description: "Label for a group.", props: [] },
    { name: "SelectSeparator", description: "Visual separator between groups.", props: [] },
  ],
  examples: [
    {
      title: "Basic Select",
      code: '<Select>\n  <SelectTrigger>\n    <SelectValue placeholder="Select a role" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="admin">Admin</SelectItem>\n    <SelectItem value="user">User</SelectItem>\n    <SelectItem value="viewer">Viewer</SelectItem>\n  </SelectContent>\n</Select>',
    },
  ],
  accessibility: "Built on Radix UI Select with full keyboard navigation and ARIA roles.",
};
