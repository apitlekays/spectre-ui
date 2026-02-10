"use client";

import React from "react";
import { DataTable, type DataTableColumn } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const dataTableProps: PropDef[] = [
  {
    name: "data",
    type: "T[]",
    required: true,
    description: "Array of row objects to display in the table.",
  },
  {
    name: "columns",
    type: "DataTableColumn<T>[]",
    required: true,
    description: "Column definitions specifying how to render each column.",
  },
  {
    name: "pageSize",
    type: "number",
    default: "10",
    description: "Number of rows per page.",
  },
  {
    name: "striped",
    type: "boolean",
    default: "true",
    description: "Whether to apply alternating row background colors.",
  },
];

const columnProps: PropDef[] = [
  {
    name: "key",
    type: "string",
    required: true,
    description: "Property key on the row object to read data from.",
  },
  {
    name: "header",
    type: "string",
    required: true,
    description: "Column header text.",
  },
  {
    name: "sortable",
    type: "boolean",
    default: "false",
    description: "Whether this column can be sorted by clicking the header.",
  },
  {
    name: "render",
    type: "(value: unknown, row: T) => ReactNode",
    description: "Custom render function for cell content.",
  },
  {
    name: "width",
    type: "string",
    description: 'CSS width for the column (e.g. "200px").',
  },
];

type AgentRow = Record<string, unknown> & {
  name: string;
  status: string;
  uptime: string;
  region: string;
};

const sampleColumns: DataTableColumn<AgentRow>[] = [
  { key: "name", header: "Agent", sortable: true },
  { key: "status", header: "Status", sortable: true },
  { key: "uptime", header: "Uptime" },
  { key: "region", header: "Region", sortable: true },
];

const sampleData: AgentRow[] = [
  { name: "Alpha-7", status: "Active", uptime: "99.98%", region: "US-East" },
  { name: "Bravo-3", status: "Standby", uptime: "99.91%", region: "EU-West" },
  { name: "Charlie-9", status: "Active", uptime: "99.95%", region: "AP-South" },
  { name: "Delta-1", status: "Offline", uptime: "87.20%", region: "US-West" },
  { name: "Echo-5", status: "Active", uptime: "99.99%", region: "EU-Central" },
];

const statusColumns: DataTableColumn<AgentRow>[] = [
  { key: "name", header: "Agent", sortable: true, width: "200px" },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (value) => {
      const status = String(value);
      if (status === "Active") {
        return <span className="text-green-400">{status}</span>;
      }
      if (status === "Offline") {
        return <span className="text-red-400">{status}</span>;
      }
      return <span className="text-yellow-400">{status}</span>;
    },
  },
  { key: "uptime", header: "Uptime" },
  { key: "region", header: "Region" },
];

export default function DataTablePageContent() {
  return (
    <div className="docs-prose">
      <h1>DataTable</h1>
      <p>
        Enhanced table component with built-in sorting, pagination, and striped
        rows. Accepts generic row types and column definitions with optional
        custom renderers.
      </p>

      <h2>Basic Table</h2>
      <ComponentPreview
        code={`const columns = [
  { key: "name", header: "Agent", sortable: true },
  { key: "status", header: "Status", sortable: true },
  { key: "uptime", header: "Uptime" },
  { key: "region", header: "Region", sortable: true },
];

const data = [
  { name: "Alpha-7", status: "Active", uptime: "99.98%", region: "US-East" },
  { name: "Bravo-3", status: "Standby", uptime: "99.91%", region: "EU-West" },
  { name: "Charlie-9", status: "Active", uptime: "99.95%", region: "AP-South" },
];

<DataTable columns={columns} data={data} pageSize={10} />`}
      >
        <DataTable columns={sampleColumns} data={sampleData} pageSize={10} />
      </ComponentPreview>

      <h2>Custom Cell Rendering</h2>
      <ComponentPreview
        code={`const columns = [
  { key: "name", header: "Agent", sortable: true, width: "200px" },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (value) => {
      const status = String(value);
      if (status === "Active") return <span className="text-green-400">{status}</span>;
      if (status === "Offline") return <span className="text-red-400">{status}</span>;
      return <span className="text-yellow-400">{status}</span>;
    },
  },
  { key: "uptime", header: "Uptime" },
  { key: "region", header: "Region" },
];

<DataTable columns={columns} data={data} striped={false} />`}
      >
        <DataTable
          columns={statusColumns}
          data={sampleData}
          striped={false}
        />
      </ComponentPreview>

      <h2>DataTable Props</h2>
      <PropsTable props={dataTableProps} />

      <h2>DataTableColumn Shape</h2>
      <PropsTable props={columnProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Renders a semantic <code>&lt;table&gt;</code> with{" "}
          <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code>.
        </li>
        <li>
          Sortable column headers are interactive and indicate sort direction
          with visible arrow indicators.
        </li>
        <li>
          Pagination controls use <code>&lt;button&gt;</code> elements with{" "}
          <code>disabled</code> states.
        </li>
        <li>
          Consider adding <code>aria-sort</code> attributes to sortable headers
          for screen reader announcements.
        </li>
      </ul>
    </div>
  );
}
