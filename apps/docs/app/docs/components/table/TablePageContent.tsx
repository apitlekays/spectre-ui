"use client";

import React from "react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const tableProps: PropDef[] = [{ name: "className", type: "string", description: "Additional CSS classes for the table wrapper." }];
const tableHeadProps: PropDef[] = [{ name: "className", type: "string", description: "Additional CSS classes for the header cell." }];
const tableCellProps: PropDef[] = [{ name: "className", type: "string", description: "Additional CSS classes for the body cell." }];

export default function TablePageContent() {
  return (
    <div className="docs-prose">
      <h1>Table</h1>
      <p>Data table composed from sub-components for headers, rows, and cells. Designed for structured agent data with consistent HUD styling.</p>

      <h2>Basic Table</h2>
      <ComponentPreview code={`<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Agent</TableHead>\n      <TableHead>Status</TableHead>\n      <TableHead>Missions</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Alpha-7</TableCell>\n      <TableCell>Active</TableCell>\n      <TableCell>12</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell>Bravo-3</TableCell>\n      <TableCell>Standby</TableCell>\n      <TableCell>8</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Missions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Alpha-7</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bravo-3</TableCell>
              <TableCell>Standby</TableCell>
              <TableCell>8</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentPreview>

      <h2>Table Props</h2>
      <PropsTable props={tableProps} />

      <h2>TableHead Props</h2>
      <PropsTable props={tableHeadProps} />

      <h2>TableCell Props</h2>
      <PropsTable props={tableCellProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Renders semantic <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>,{" "}<code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>,{" "}<code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> elements</li>
        <li><code>&lt;TableHead&gt;</code> uses <code>&lt;th&gt;</code> with implicit{" "}<code>scope=&quot;col&quot;</code> for screen reader column association</li>
        <li>Supports <code>ref</code> forwarding on all sub-components</li>
        <li>Passes through all standard HTML attributes including{" "}<code>aria-*</code> and <code>role</code></li>
      </ul>
    </div>
  );
}
