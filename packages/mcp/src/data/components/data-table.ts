import type { ComponentDoc } from "../types.js";

export const dataTableDoc: ComponentDoc = {
  name: "DataTable",
  slug: "data-table",
  category: "data-display",
  description: "Feature-rich data table with built-in sorting, pagination, and striped rows. Pass data and column definitions for automatic rendering.",
  importStatement: 'import { DataTable } from "@spectre-ui/core";',
  props: [
    { name: "data", type: "T[]", required: true, description: "Array of data objects to display." },
    { name: "columns", type: "DataTableColumn<T>[]", required: true, description: "Column definitions: `{ key, header, render?, sortable?, width? }`." },
    { name: "pageSize", type: "number", default: "10", description: "Number of rows per page." },
    { name: "striped", type: "boolean", default: "true", description: "Alternate row background colors." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic DataTable",
      code: `const columns = [\n  { key: "name", header: "Name", sortable: true },\n  { key: "status", header: "Status", render: (val) => <Badge variant={val === "active" ? "success" : "default"}>{val}</Badge> },\n  { key: "role", header: "Role" },\n];\n\nconst data = [\n  { name: "Alice", status: "active", role: "Admin" },\n  { name: "Bob", status: "inactive", role: "User" },\n];\n\n<DataTable data={data} columns={columns} pageSize={5} />`,
    },
  ],
};
