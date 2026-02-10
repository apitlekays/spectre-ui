import type { ComponentDoc } from "../types.js";

export const separatorDoc: ComponentDoc = {
  name: "Separator",
  slug: "separator",
  category: "layout",
  description: "Visual divider between content sections. Supports horizontal and vertical orientations with an optional text label.",
  importStatement: 'import { Separator } from "@spectre-ui/core";',
  props: [
    { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direction of the separator line." },
    { name: "label", type: "string", description: "Optional text label displayed in the middle of the separator." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Separator",
      code: `<div>\n  <p>Content above</p>\n  <Separator />\n  <p>Content below</p>\n</div>`,
    },
    {
      title: "With Label",
      code: `<Separator label="OR" />`,
    },
  ],
  accessibility: "Renders as a semantic separator role. Decorative separators are hidden from assistive technology.",
};
