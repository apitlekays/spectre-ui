import type { HookDoc, PropDef } from "../data/types.js";

function renderParamsTable(params: PropDef[]): string {
  if (params.length === 0) return "_No parameters._\n";

  const lines = [
    "| Parameter | Type | Default | Required | Description |",
    "|-----------|------|---------|----------|-------------|",
  ];

  for (const p of params) {
    const def = p.default ?? "—";
    const req = p.required ? "Yes" : "No";
    const type = `\`${p.type}\``;
    lines.push(`| \`${p.name}\` | ${type} | ${def} | ${req} | ${p.description} |`);
  }

  return lines.join("\n") + "\n";
}

export function renderHookMarkdown(doc: HookDoc): string {
  const sections: string[] = [];

  // Header
  sections.push(`# ${doc.name}`);
  sections.push("");
  sections.push(doc.description);
  sections.push("");

  // Import
  sections.push("## Import");
  sections.push("");
  sections.push("```tsx");
  sections.push(doc.importStatement);
  sections.push("```");
  sections.push("");

  // Signature
  sections.push("## Signature");
  sections.push("");
  sections.push("```tsx");
  sections.push(doc.signature);
  sections.push("```");
  sections.push("");

  // Parameters
  sections.push("## Parameters");
  sections.push("");
  sections.push(renderParamsTable(doc.params));

  // Return Type
  sections.push("## Return Value");
  sections.push("");
  sections.push(`**Type:** \`${doc.returnType}\``);
  sections.push("");
  sections.push(doc.returnDescription);
  sections.push("");

  // Examples
  if (doc.examples.length > 0) {
    sections.push("## Examples");
    sections.push("");
    for (const ex of doc.examples) {
      sections.push(`### ${ex.title}`);
      sections.push("");
      if (ex.description) {
        sections.push(ex.description);
        sections.push("");
      }
      sections.push("```tsx");
      sections.push(ex.code);
      sections.push("```");
      sections.push("");
    }
  }

  return sections.join("\n");
}
