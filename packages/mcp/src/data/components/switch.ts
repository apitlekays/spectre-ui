import type { ComponentDoc } from "../types.js";

export const switchDoc: ComponentDoc = {
  name: "Switch",
  slug: "switch",
  category: "forms",
  description: "Toggle switch with optional label. Features an animated thumb transition and glow effect on the checked state.",
  importStatement: 'import { Switch } from "@spectre-ui/core";',
  props: [
    { name: "label", type: "string", description: "Label text next to the switch." },
    { name: "checked", type: "boolean", description: "Controlled checked state." },
    { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback when toggled." },
    { name: "disabled", type: "boolean", description: "Disable the switch." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Switch",
      code: '<Switch label="Dark mode" />',
    },
    {
      title: "Controlled",
      code: 'const [enabled, setEnabled] = useState(true);\n\n<Switch label="Notifications" checked={enabled} onCheckedChange={setEnabled} />',
    },
  ],
};
