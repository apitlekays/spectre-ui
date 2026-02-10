"use client";

import React from "react";
import { Timeline } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const timelineProps: PropDef[] = [
  {
    name: "items",
    type: "TimelineItemData[]",
    required: true,
    description: "Array of timeline items to display.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

const timelineItemProps: PropDef[] = [
  {
    name: "title",
    type: "string",
    required: true,
    description: "Title text for the timeline entry.",
  },
  {
    name: "description",
    type: "string",
    description: "Optional description text below the title.",
  },
  {
    name: "date",
    type: "string",
    description: "Date or time label displayed to the right of the title.",
  },
  {
    name: "status",
    type: '"completed" | "active" | "pending"',
    default: '"pending"',
    description:
      "Status determines the diamond marker color. Completed is green, active has a glow effect, and pending is muted.",
  },
];

export default function TimelinePageContent() {
  return (
    <div className="docs-prose">
      <h1>Timeline</h1>
      <p>
        Vertical timeline with diamond-shaped markers and status-based colors.
        Ideal for displaying sequences of events, mission logs, or process
        steps.
      </p>

      <h2>Basic Timeline</h2>
      <ComponentPreview
        code={`<Timeline items={[
  { title: "Mission Started", date: "09:00", status: "completed" },
  { title: "Checkpoint Alpha", date: "11:30", status: "completed" },
  { title: "Data Upload", date: "14:00", status: "active" },
  { title: "Extraction Point", date: "15:00", status: "pending" },
]} />`}
      >
        <Timeline
          items={[
            {
              title: "Mission Started",
              date: "09:00",
              status: "completed",
            },
            {
              title: "Checkpoint Alpha",
              date: "11:30",
              status: "completed",
            },
            {
              title: "Data Upload",
              date: "14:00",
              status: "active",
            },
            {
              title: "Extraction Point",
              date: "15:00",
              status: "pending",
            },
          ]}
        />
      </ComponentPreview>

      <h2>With Descriptions</h2>
      <ComponentPreview
        code={`<Timeline items={[
  {
    title: "System Initialized",
    description: "All subsystems online. Diagnostics passed.",
    date: "Day 1",
    status: "completed",
  },
  {
    title: "Calibration Phase",
    description: "Sensor array calibration in progress.",
    date: "Day 2",
    status: "active",
  },
  {
    title: "Deployment",
    description: "Awaiting authorization for deployment.",
    date: "Day 3",
    status: "pending",
  },
]} />`}
      >
        <Timeline
          items={[
            {
              title: "System Initialized",
              description: "All subsystems online. Diagnostics passed.",
              date: "Day 1",
              status: "completed",
            },
            {
              title: "Calibration Phase",
              description: "Sensor array calibration in progress.",
              date: "Day 2",
              status: "active",
            },
            {
              title: "Deployment",
              description: "Awaiting authorization for deployment.",
              date: "Day 3",
              status: "pending",
            },
          ]}
        />
      </ComponentPreview>

      <h2>Timeline Props</h2>
      <PropsTable props={timelineProps} />

      <h2>TimelineItemData Shape</h2>
      <PropsTable props={timelineItemProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Timeline items are rendered in DOM order matching their visual order
        </li>
        <li>
          Status is conveyed visually through color; consider adding{" "}
          <code>aria-label</code> attributes to the container for screen reader
          context
        </li>
        <li>
          Diamond markers are decorative; titles and descriptions carry the
          semantic content
        </li>
        <li>Supports <code>ref</code> forwarding for DOM access</li>
      </ul>
    </div>
  );
}
