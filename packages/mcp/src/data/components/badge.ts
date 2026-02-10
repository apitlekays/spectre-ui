import type { ComponentDoc } from "../types.js";

export const badgeDoc: ComponentDoc = {
  name: "Badge",
  slug: "badge",
  category: "data-display",
  description: "Inline status indicator with multiple color variants. Supports an optional pulsing dot for live/active states.",
  importStatement: 'import { Badge } from "@spectre-ui/core";',
  props: [
    { name: "variant", type: '"default" | "primary" | "success" | "warning" | "destructive" | "outline"', default: '"default"', description: "Color variant." },
    { name: "dot", type: "boolean", description: "Show a pulsing dot indicator." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", required: true, description: "Badge label text." },
  ],
  variants: [
    { name: "variant", values: ["default", "primary", "success", "warning", "destructive", "outline"], default: "default" },
  ],
  examples: [
    {
      title: "Variants",
      code: `<Badge variant="primary">Primary</Badge>\n<Badge variant="success">Online</Badge>\n<Badge variant="warning">Pending</Badge>\n<Badge variant="destructive">Error</Badge>\n<Badge variant="outline">Draft</Badge>`,
    },
    {
      title: "With Dot",
      code: `<Badge variant="success" dot>Live</Badge>`,
    },
  ],
};
