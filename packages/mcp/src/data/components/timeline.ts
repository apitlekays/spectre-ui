import type { ComponentDoc } from "../types.js";

export const timelineDoc: ComponentDoc = {
  name: "Timeline",
  slug: "timeline",
  category: "data-display",
  description: "Vertical timeline component for displaying sequential events. Each item has a title, optional description, date, and status indicator.",
  importStatement: 'import { Timeline } from "@spectre-ui/core";',
  props: [
    { name: "items", type: "TimelineItemData[]", required: true, description: "Array of timeline items: `{ title, description?, date?, status? }`." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Deployment Timeline",
      code: `<Timeline\n  items={[\n    { title: "Deployed to production", date: "2026-01-15", status: "completed" },\n    { title: "Running integration tests", date: "2026-01-15", status: "active" },\n    { title: "Code review", date: "2026-01-14", status: "completed" },\n    { title: "Awaiting QA", status: "pending" },\n  ]}\n/>`,
    },
  ],
};
