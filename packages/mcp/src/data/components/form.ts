import type { ComponentDoc } from "../types.js";

export const formDoc: ComponentDoc = {
  name: "Form",
  slug: "form",
  category: "forms",
  description: "Form layout components for structuring form fields with labels and validation messages. Use with Input, Select, Checkbox, etc.",
  importStatement: 'import { Form, FormField, FormLabel, FormMessage } from "@spectre-ui/core";',
  props: [
    { name: "onSubmit", type: "(e: FormEvent) => void", description: "Form submit handler." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", required: true, description: "Form fields." },
  ],
  subComponents: [
    { name: "FormField", description: "Wrapper for a single form field. Provides spacing.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "FormLabel", description: "Label element for a form field.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "FormMessage", description: "Validation or helper message.", props: [{ name: "error", type: "boolean", description: "Style as error message." }, { name: "className", type: "string", description: "Additional CSS classes." }] },
  ],
  examples: [
    {
      title: "Login Form",
      code: '<Form onSubmit={handleSubmit}>\n  <FormField>\n    <FormLabel>Email</FormLabel>\n    <Input type="email" placeholder="agent@spectre.dev" />\n  </FormField>\n  <FormField>\n    <FormLabel>Password</FormLabel>\n    <Input type="password" />\n    <FormMessage>Must be at least 8 characters</FormMessage>\n  </FormField>\n  <Button type="submit">Sign In</Button>\n</Form>',
    },
  ],
};
