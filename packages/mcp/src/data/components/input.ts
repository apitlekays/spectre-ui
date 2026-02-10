import type { ComponentDoc } from "../types.js";

export const inputDoc: ComponentDoc = {
  name: "Input",
  slug: "input",
  category: "forms",
  description: "Text input field with optional label, error message, and hint text. Styled with spectre-ui borders and focus glow.",
  importStatement: 'import { Input } from "@spectre-ui/core";',
  props: [
    { name: "label", type: "string", description: "Input label displayed above the field." },
    { name: "error", type: "string", description: "Error message displayed below the field in red." },
    { name: "hint", type: "string", description: "Helper text displayed below the field." },
    { name: "type", type: "string", default: '"text"', description: "HTML input type." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Input",
      code: '<Input label="Email" type="email" placeholder="agent@spectre.dev" />',
    },
    {
      title: "With Error",
      code: '<Input label="Username" error="Username is required" />',
    },
    {
      title: "With Hint",
      code: '<Input label="Password" type="password" hint="Must be at least 8 characters" />',
    },
  ],
  accessibility: "Label is associated via htmlFor. Error messages use aria-describedby.",
};
