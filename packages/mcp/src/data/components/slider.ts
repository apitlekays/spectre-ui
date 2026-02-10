import type { ComponentDoc } from "../types.js";

export const sliderDoc: ComponentDoc = {
  name: "Slider",
  slug: "slider",
  category: "forms",
  description: "Range slider input with optional label. Features glow effect on the range track and a touch-friendly thumb.",
  importStatement: 'import { Slider } from "@spectre-ui/core";',
  props: [
    { name: "label", type: "string", description: "Label text above the slider." },
    { name: "value", type: "number[]", description: "Controlled value (array for range)." },
    { name: "onValueChange", type: "(value: number[]) => void", description: "Callback when value changes." },
    { name: "min", type: "number", default: "0", description: "Minimum value." },
    { name: "max", type: "number", default: "100", description: "Maximum value." },
    { name: "step", type: "number", default: "1", description: "Step increment." },
    { name: "disabled", type: "boolean", description: "Disable the slider." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Slider",
      code: '<Slider label="Volume" defaultValue={[50]} max={100} />',
    },
  ],
};
