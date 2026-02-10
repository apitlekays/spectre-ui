import type { ComponentDoc } from "../types.js";

export const stackDoc: ComponentDoc = {
  name: "Stack",
  slug: "stack",
  category: "layout",
  description: "Flexbox stack layout component for vertical or horizontal arrangements with configurable gap, alignment, and justification.",
  importStatement: 'import { Stack } from "@spectre-ui/core";',
  props: [
    { name: "direction", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Stack direction." },
    { name: "gap", type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Gap between items." },
    { name: "align", type: '"start" | "center" | "end" | "stretch"', default: '"stretch"', description: "Cross-axis alignment." },
    { name: "justify", type: '"start" | "center" | "end" | "between" | "around"', default: '"start"', description: "Main-axis justification." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", required: true, description: "Stack items." },
  ],
  variants: [
    { name: "direction", values: ["vertical", "horizontal"], default: "vertical" },
    { name: "gap", values: ["none", "xs", "sm", "md", "lg", "xl"], default: "md" },
    { name: "align", values: ["start", "center", "end", "stretch"], default: "stretch" },
    { name: "justify", values: ["start", "center", "end", "between", "around"], default: "start" },
  ],
  examples: [
    {
      title: "Vertical Stack",
      code: `<Stack gap="md">\n  <Input label="Name" />\n  <Input label="Email" type="email" />\n  <Button>Submit</Button>\n</Stack>`,
    },
    {
      title: "Horizontal Stack",
      code: `<Stack direction="horizontal" gap="sm" align="center">\n  <Button variant="primary">Save</Button>\n  <Button variant="outline">Cancel</Button>\n</Stack>`,
    },
  ],
};
