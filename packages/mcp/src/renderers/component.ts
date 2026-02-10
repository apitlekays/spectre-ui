import type { ComponentDoc, PropDef, SubComponent } from "../data/types.js";

function renderPropsTable(props: PropDef[]): string {
  if (props.length === 0) return "_No additional props._\n";

  const lines = [
    "| Prop | Type | Default | Required | Description |",
    "|------|------|---------|----------|-------------|",
  ];

  for (const p of props) {
    const def = p.default ?? "—";
    const req = p.required ? "Yes" : "No";
    const type = `\`${p.type}\``;
    lines.push(`| \`${p.name}\` | ${type} | ${def} | ${req} | ${p.description} |`);
  }

  return lines.join("\n") + "\n";
}

function renderSubComponent(sub: SubComponent): string {
  const lines = [
    `### ${sub.name}`,
    "",
    sub.description,
    "",
    "#### Props",
    "",
    renderPropsTable(sub.props),
  ];
  return lines.join("\n");
}

export function renderComponentMarkdown(doc: ComponentDoc): string {
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

  // Props
  sections.push("## Props");
  sections.push("");
  sections.push(renderPropsTable(doc.props));

  // Variants
  if (doc.variants && doc.variants.length > 0) {
    sections.push("## Variants");
    sections.push("");
    for (const v of doc.variants) {
      sections.push(
        `- **${v.name}**: ${v.values.map((val) => `\`"${val}"\``).join(", ")} (default: \`"${v.default}"\`)`
      );
    }
    sections.push("");
  }

  // Sub-components
  if (doc.subComponents && doc.subComponents.length > 0) {
    sections.push("## Sub-Components");
    sections.push("");
    for (const sub of doc.subComponents) {
      sections.push(renderSubComponent(sub));
    }
  }

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

  // Accessibility
  if (doc.accessibility) {
    sections.push("## Accessibility");
    sections.push("");
    sections.push(doc.accessibility);
    sections.push("");
  }

  return sections.join("\n");
}
