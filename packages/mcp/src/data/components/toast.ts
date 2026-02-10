import type { ComponentDoc } from "../types.js";

export const toastDoc: ComponentDoc = {
  name: "Toast",
  slug: "toast",
  category: "feedback",
  description: "Temporary notification popup with auto-dismiss. Supports variants, actions, and swipe-to-dismiss. Built on Radix UI Toast.",
  importStatement: 'import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction } from "@spectre-ui/core";',
  props: [
    { name: "variant", type: '"default" | "success" | "warning" | "destructive"', default: '"default"', description: "Color variant." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  variants: [
    { name: "variant", values: ["default", "success", "warning", "destructive"], default: "default" },
  ],
  subComponents: [
    { name: "ToastProvider", description: "Context provider for toast functionality. Wrap your app root.", props: [] },
    { name: "ToastViewport", description: "Positioned container for toast notifications.", props: [] },
    { name: "ToastTitle", description: "Toast heading.", props: [] },
    { name: "ToastDescription", description: "Toast body text.", props: [] },
    { name: "ToastClose", description: "Close button (X icon).", props: [] },
    { name: "ToastAction", description: "Action button within the toast.", props: [{ name: "altText", type: "string", required: true, description: "Accessible label for the action." }] },
  ],
  examples: [
    {
      title: "Basic Toast Setup",
      code: '// In your root layout:\n<ToastProvider>\n  {children}\n  <ToastViewport />\n</ToastProvider>\n\n// Triggering a toast:\n<Toast variant="success">\n  <ToastTitle>Saved</ToastTitle>\n  <ToastDescription>Your changes have been saved.</ToastDescription>\n  <ToastClose />\n</Toast>',
    },
  ],
  accessibility: "Built on Radix UI Toast with swipe-to-dismiss. Announces to screen readers via live region.",
};
