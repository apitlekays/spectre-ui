"use client";

import React from "react";
import { Skeleton } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const skeletonProps: PropDef[] = [
  { name: "variant", type: '"default" | "text" | "circular" | "rectangular"', default: '"default"', description: "Shape preset for the skeleton placeholder." },
  { name: "width", type: "string | number", description: "Custom width override. Accepts CSS values or pixel numbers." },
  { name: "height", type: "string | number", description: "Custom height override. Accepts CSS values or pixel numbers." },
  { name: "className", type: "string", description: "Additional CSS classes." },
];

export default function SkeletonPageContent() {
  return (
    <div className="docs-prose">
      <h1>Skeleton</h1>
      <p>Loading placeholder with pulse animation. Use skeletons to indicate content that is loading, preserving layout structure while data is fetched.</p>

      <h2>Variants</h2>
      <ComponentPreview code={`<Skeleton variant="default" />\n<Skeleton variant="text" />\n<Skeleton variant="circular" />\n<Skeleton variant="rectangular" />`}>
        <div className="space-y-6">
          <div><p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">default</p><Skeleton variant="default" /></div>
          <div><p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">text</p><Skeleton variant="text" /></div>
          <div><p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">circular</p><Skeleton variant="circular" /></div>
          <div><p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">rectangular</p><Skeleton variant="rectangular" /></div>
        </div>
      </ComponentPreview>

      <h2>Custom Sizes</h2>
      <ComponentPreview code={`<Skeleton variant="rectangular" width={200} height={120} />\n<Skeleton variant="circular" width={64} height={64} />\n<Skeleton variant="text" width="60%" />`}>
        <div className="flex flex-wrap items-start gap-4">
          <Skeleton variant="rectangular" width={200} height={120} />
          <Skeleton variant="circular" width={64} height={64} />
          <Skeleton variant="text" width="60%" />
        </div>
      </ComponentPreview>

      <h2>Card Placeholder</h2>
      <ComponentPreview code={`<div className="space-y-3 w-64">\n  <Skeleton variant="rectangular" height={140} />\n  <Skeleton variant="text" width="80%" />\n  <Skeleton variant="text" width="60%" />\n</div>`}>
        <div className="w-64 space-y-3 border border-spectre-border p-4">
          <Skeleton variant="rectangular" height={140} />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={skeletonProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Use <code>aria-busy=&quot;true&quot;</code> on the parent container while content is loading</li>
        <li>Add <code>aria-label</code> or <code>aria-hidden=&quot;true&quot;</code> to skeleton elements as appropriate</li>
        <li>The pulse animation respects <code>prefers-reduced-motion</code> when configured in Tailwind</li>
        <li>Supports <code>ref</code> forwarding for DOM access</li>
      </ul>
    </div>
  );
}
