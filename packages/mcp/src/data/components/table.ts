import type { ComponentDoc } from "../types.js";

export const tableDoc: ComponentDoc = {
  name: "Table",
  slug: "table",
  category: "data-display",
  description: "Compound table component with semantic HTML table elements styled for the spectre-ui aesthetic. For auto-pagination and sorting, see DataTable.",
  importStatement: 'import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "@spectre-ui/core";',
  props: [
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", required: true, description: "Table sections (TableHeader, TableBody, TableFooter)." },
  ],
  subComponents: [
    { name: "TableHeader", description: "Wraps header rows.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "TableBody", description: "Wraps data rows.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "TableFooter", description: "Wraps footer rows.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "TableHead", description: "Header cell (th element).", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "TableRow", description: "Table row.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "TableCell", description: "Table data cell.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "TableCaption", description: "Table caption.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
  ],
  examples: [
    {
      title: "Basic Table",
      code: `<Table>\n  <TableCaption>System Logs</TableCaption>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Timestamp</TableHead>\n      <TableHead>Level</TableHead>\n      <TableHead>Message</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>2026-01-15 08:30</TableCell>\n      <TableCell><Badge variant="success">INFO</Badge></TableCell>\n      <TableCell>System initialized</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`,
    },
  ],
};
