import type { ComponentDoc } from "../types.js";

export const tooltipDoc: ComponentDoc = {
  name: "Tooltip",
  slug: "tooltip",
  category: "feedback",
  description: "Informational popup that appears on hover/focus. Built on Radix UI Tooltip with spectre-ui styling.",
  importStatement: 'import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@spectre-ui/core";',
  props: [],
  subComponents: [
    { name: "TooltipProvider", description: "Context provider. Wrap your app root or a section.", props: [] },
    { name: "Tooltip", description: "Root component.", props: [] },
    { name: "TooltipTrigger", description: "Element that triggers the tooltip on hover/focus.", props: [{ name: "asChild", type: "boolean", description: "Merge props onto child." }] },
    { name: "TooltipContent", description: "The tooltip popup content.", props: [{ name: "sideOffset", type: "number", default: "4", description: "Distance from trigger." }, { name: "className", type: "string", description: "Additional CSS classes." }] },
  ],
  examples: [
    {
      title: "Basic Tooltip",
      code: '<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger asChild>\n      <Button variant="outline" size="icon">?</Button>\n    </TooltipTrigger>\n    <TooltipContent>Keyboard shortcut: ⌘K</TooltipContent>\n  </Tooltip>\n</TooltipProvider>',
    },
  ],
  accessibility: "Built on Radix UI Tooltip. Shows on hover and focus. ARIA attributes are handled automatically.",
};
