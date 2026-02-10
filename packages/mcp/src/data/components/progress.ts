import type { ComponentDoc } from "../types.js";

export const progressDoc: ComponentDoc = {
  name: "Progress",
  slug: "progress",
  category: "data-display",
  description: "Animated progress bar with label and value display. Supports color variants for different states (success, warning, error).",
  importStatement: 'import { Progress } from "@spectre-ui/core";',
  props: [
    { name: "value", type: "number", default: "0", description: "Current progress value." },
    { name: "max", type: "number", default: "100", description: "Maximum value." },
    { name: "label", type: "string", description: "Label text above the bar." },
    { name: "showValue", type: "boolean", description: "Show the percentage value." },
    { name: "variant", type: '"default" | "success" | "warning" | "destructive"', default: '"default"', description: "Color variant." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  variants: [
    { name: "variant", values: ["default", "success", "warning", "destructive"], default: "default" },
  ],
  examples: [
    {
      title: "Upload Progress",
      code: `<Progress value={67} label="Uploading..." showValue variant="default" />`,
    },
    {
      title: "System Resources",
      code: `<Stack gap="sm">\n  <Progress value={45} label="CPU" showValue variant="success" />\n  <Progress value={78} label="Memory" showValue variant="warning" />\n  <Progress value={92} label="Disk" showValue variant="destructive" />\n</Stack>`,
    },
  ],
  accessibility: "Uses role='progressbar' with aria-valuenow, aria-valuemin, and aria-valuemax attributes.",
};
