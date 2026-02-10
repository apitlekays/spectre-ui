import type { ComponentDoc } from "../types.js";

export const popoverDoc: ComponentDoc = {
  name: "Popover",
  slug: "popover",
  category: "feedback",
  description: "Interactive popup content panel triggered by click. Unlike Tooltip, Popover can contain interactive elements. Built on Radix UI Popover.",
  importStatement: 'import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from "@spectre-ui/core";',
  props: [
    { name: "open", type: "boolean", description: "Controlled open state." },
    { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes." },
  ],
  subComponents: [
    { name: "PopoverTrigger", description: "Element that opens the popover on click.", props: [{ name: "asChild", type: "boolean", description: "Merge props onto child." }] },
    { name: "PopoverContent", description: "The popover panel.", props: [{ name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment relative to trigger." }, { name: "sideOffset", type: "number", default: "4", description: "Distance from trigger." }, { name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "PopoverAnchor", description: "Alternative anchor element for positioning.", props: [] },
  ],
  examples: [
    {
      title: "Settings Popover",
      code: '<Popover>\n  <PopoverTrigger asChild>\n    <Button variant="outline">Settings</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <Stack gap="sm">\n      <Switch label="Dark Mode" />\n      <Switch label="Notifications" />\n      <Slider label="Volume" defaultValue={[75]} />\n    </Stack>\n  </PopoverContent>\n</Popover>',
    },
  ],
  accessibility: "Built on Radix UI Popover with focus management and Escape to close.",
};
