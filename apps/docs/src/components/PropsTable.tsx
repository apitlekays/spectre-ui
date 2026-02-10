import React from "react";

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: PropDef[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-auto border border-spectre-border">
      <table className="w-full font-mono text-sm">
        <thead className="border-b border-spectre-border bg-spectre-muted">
          <tr>
            <th className="px-4 py-2 text-left text-xs uppercase tracking-widest text-spectre-muted-foreground">
              Prop
            </th>
            <th className="px-4 py-2 text-left text-xs uppercase tracking-widest text-spectre-muted-foreground">
              Type
            </th>
            <th className="px-4 py-2 text-left text-xs uppercase tracking-widest text-spectre-muted-foreground">
              Default
            </th>
            <th className="px-4 py-2 text-left text-xs uppercase tracking-widest text-spectre-muted-foreground">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-b border-spectre-border hover:bg-spectre-muted/30"
            >
              <td className="px-4 py-2 text-spectre-primary">
                {prop.name}
                {prop.required && (
                  <span className="ml-1 text-spectre-destructive">*</span>
                )}
              </td>
              <td className="px-4 py-2 text-spectre-muted-foreground">
                <code className="text-xs">{prop.type}</code>
              </td>
              <td className="px-4 py-2 text-spectre-muted-foreground">
                {prop.default ? (
                  <code className="text-xs">{prop.default}</code>
                ) : (
                  <span className="text-spectre-muted-foreground/50">-</span>
                )}
              </td>
              <td className="px-4 py-2 text-spectre-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
