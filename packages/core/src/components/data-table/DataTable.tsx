"use client";

import React, { useState, useMemo } from "react";
import { cn } from "../../utils/cn";

export interface DataTableColumn<T> {
  key: string;
  header: string;
  render?: (value: unknown, row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}

export interface DataTableProps<T extends Record<string, unknown>> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  columns: DataTableColumn<T>[];
  pageSize?: number;
  striped?: boolean;
}

function DataTableInner<T extends Record<string, unknown>>(
  { className, data, columns, pageSize = 10, striped = true, ...props }: DataTableProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [page, setPage] = useState(0);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal === bVal) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const pageData = sortedData.slice(page * pageSize, (page + 1) * pageSize);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
      <div className="overflow-auto border border-spectre-border">
        <table className="w-full font-mono text-sm">
          <thead className="border-b border-spectre-border bg-spectre-muted">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "h-10 px-4 text-left text-xs font-semibold uppercase tracking-widest text-spectre-muted-foreground",
                    col.sortable && "cursor-pointer select-none hover:text-spectre-primary"
                  )}
                  style={col.width ? { width: col.width } : undefined}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <span className="flex items-center gap-1">
                    {col.header}
                    {col.sortable && sortKey === col.key && (
                      <span>{sortDir === "asc" ? "\u25B2" : "\u25BC"}</span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  "border-b border-spectre-border transition-colors hover:bg-spectre-muted/50",
                  striped && i % 2 === 1 && "bg-spectre-muted/30"
                )}
              >
                {columns.map((col) => (
                  <td key={col.key} className="p-4 text-spectre-foreground">
                    {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-between font-mono text-xs text-spectre-muted-foreground">
          <span>
            Page {page + 1} of {totalPages} ({sortedData.length} records)
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="border border-spectre-border px-2 py-1 hover:border-spectre-primary hover:text-spectre-primary disabled:opacity-50 transition-colors"
            >
              Prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="border border-spectre-border px-2 py-1 hover:border-spectre-primary hover:text-spectre-primary disabled:opacity-50 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const DataTable = React.forwardRef(DataTableInner) as <T extends Record<string, unknown>>(
  props: DataTableProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;

export { DataTable };
