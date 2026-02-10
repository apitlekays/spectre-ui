import type { ComponentDoc } from "../types.js";

export const avatarDoc: ComponentDoc = {
  name: "Avatar",
  slug: "avatar",
  category: "data-display",
  description: "User avatar with image, fallback initials, and optional online/offline status indicator. Supports multiple sizes.",
  importStatement: 'import { Avatar } from "@spectre-ui/core";',
  props: [
    { name: "src", type: "string", description: "Image URL." },
    { name: "alt", type: "string", description: "Alt text for the image." },
    { name: "fallback", type: "string", description: "Initials or text shown when image fails to load." },
    { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Avatar size." },
    { name: "status", type: '"online" | "offline" | "busy" | "away"', description: "Status indicator dot." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  variants: [
    { name: "size", values: ["sm", "md", "lg", "xl"], default: "md" },
  ],
  examples: [
    {
      title: "With Image",
      code: `<Avatar src="/avatar.jpg" alt="John Doe" fallback="JD" />`,
    },
    {
      title: "With Status",
      code: `<Avatar fallback="JD" size="lg" status="online" />`,
    },
  ],
};
