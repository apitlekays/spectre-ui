import type { ComponentDoc } from "../types.js";

export const textareaDoc: ComponentDoc = {
  name: "Textarea",
  slug: "textarea",
  category: "forms",
  description: "Multi-line text input with optional label, error, and hint. Minimum height of 80px with spectre-ui styling.",
  importStatement: 'import { Textarea } from "@spectre-ui/core";',
  props: [
    { name: "label", type: "string", description: "Label displayed above the textarea." },
    { name: "error", type: "string", description: "Error message in red below the textarea." },
    { name: "hint", type: "string", description: "Helper text below the textarea." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Textarea",
      code: '<Textarea label="Message" placeholder="Enter your message..." />',
    },
    {
      title: "With Error",
      code: '<Textarea label="Bio" error="Bio must be under 500 characters" />',
    },
  ],
};
