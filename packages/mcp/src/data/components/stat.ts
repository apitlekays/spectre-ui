import type { ComponentDoc } from "../types.js";

export const statDoc: ComponentDoc = {
  name: "Stat",
  slug: "stat",
  category: "data-display",
  description: "Metric display card showing a label, value, optional change indicator, and icon. Perfect for dashboard KPIs.",
  importStatement: 'import { Stat } from "@spectre-ui/core";',
  props: [
    { name: "label", type: "string", required: true, description: "Metric label." },
    { name: "value", type: "string | number", required: true, description: "Metric value." },
    { name: "change", type: "string", description: "Change indicator text (e.g., '+12%')." },
    { name: "changeType", type: '"positive" | "negative" | "neutral"', default: '"neutral"', description: "Color coding for the change indicator." },
    { name: "icon", type: "ReactNode", description: "Optional icon element." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Dashboard Stats",
      code: `<Grid cols={3} gap="md">\n  <Stat label="Total Users" value="12,345" change="+5.2%" changeType="positive" />\n  <Stat label="Revenue" value="$48.2k" change="-2.1%" changeType="negative" />\n  <Stat label="Uptime" value="99.97%" changeType="neutral" />\n</Grid>`,
    },
  ],
};
