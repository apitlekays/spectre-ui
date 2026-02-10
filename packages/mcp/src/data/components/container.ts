import type { ComponentDoc } from "../types.js";

export const containerDoc: ComponentDoc = {
  name: "Container",
  slug: "container",
  category: "layout",
  description: "Responsive max-width container for page content. Centers content horizontally with configurable max-width breakpoints.",
  importStatement: 'import { Container } from "@spectre-ui/core";',
  props: [
    { name: "maxWidth", type: '"sm" | "md" | "lg" | "xl" | "2xl" | "full"', default: '"xl"', description: "Maximum width of the container." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", required: true, description: "Content to render inside the container." },
  ],
  variants: [
    { name: "maxWidth", values: ["sm", "md", "lg", "xl", "2xl", "full"], default: "xl" },
  ],
  examples: [
    {
      title: "Basic Usage",
      code: `<Container>\n  <p>Centered content with max-width constraint</p>\n</Container>`,
    },
    {
      title: "Custom Max Width",
      code: `<Container maxWidth="sm">\n  <p>Narrow container</p>\n</Container>`,
    },
  ],
};
