export interface PropDef {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

export interface VariantOption {
  name: string;
  values: string[];
  default: string;
}

export interface SubComponent {
  name: string;
  description: string;
  props: PropDef[];
}

export interface CodeExample {
  title: string;
  description?: string;
  code: string;
}

export type ComponentCategory =
  | "layout"
  | "data-display"
  | "forms"
  | "feedback"
  | "navigation"
  | "decorative";

export interface ComponentDoc {
  name: string;
  slug: string;
  category: ComponentCategory;
  description: string;
  importStatement: string;
  props: PropDef[];
  variants?: VariantOption[];
  subComponents?: SubComponent[];
  examples: CodeExample[];
  accessibility?: string;
}

export interface HookDoc {
  name: string;
  slug: string;
  description: string;
  importStatement: string;
  signature: string;
  params: PropDef[];
  returnType: string;
  returnDescription: string;
  examples: CodeExample[];
}

export interface GuideDoc {
  slug: string;
  title: string;
  content: string;
}

export interface CSSToken {
  variable: string;
  darkValue: string;
  lightValue: string;
  description: string;
  category: "color" | "font" | "effect";
}
