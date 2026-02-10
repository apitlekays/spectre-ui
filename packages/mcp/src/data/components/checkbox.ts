import type { ComponentDoc } from "../types.js";

export const checkboxDoc: ComponentDoc = {
  name: "Checkbox",
  slug: "checkbox",
  category: "forms",
  description: "Checkbox input with optional label. Built on Radix UI Checkbox with spectre-ui styling and SVG checkmark.",
  importStatement: 'import { Checkbox } from "@spectre-ui/core";',
  props: [
    { name: "label", type: "string", description: "Label text displayed next to the checkbox." },
    { name: "checked", type: "boolean", description: "Controlled checked state." },
    { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback when checked state changes." },
    { name: "defaultChecked", type: "boolean", description: "Default checked state (uncontrolled)." },
    { name: "disabled", type: "boolean", description: "Disable the checkbox." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Checkbox",
      code: '<Checkbox label="Accept terms and conditions" />',
    },
    {
      title: "Controlled",
      code: 'const [checked, setChecked] = useState(false);\n\n<Checkbox\n  label="Enable notifications"\n  checked={checked}\n  onCheckedChange={setChecked}\n/>',
    },
  ],
};
