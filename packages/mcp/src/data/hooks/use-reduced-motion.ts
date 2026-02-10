import type { HookDoc } from "../types.js";

export const useReducedMotionDoc: HookDoc = {
  name: "useReducedMotion",
  slug: "use-reduced-motion",
  description:
    "Returns whether the user has enabled the 'prefers-reduced-motion: reduce' OS setting. Built on top of `useMediaQuery`.",
  importStatement: 'import { useReducedMotion } from "@spectre-ui/hooks";',
  signature: "function useReducedMotion(): boolean",
  params: [],
  returnType: "boolean",
  returnDescription:
    "Returns `true` if the user prefers reduced motion, `false` otherwise. Updates reactively when the preference changes.",
  examples: [
    {
      title: "Conditionally Disable Animations",
      code: `const reducedMotion = useReducedMotion();

return (
  <Card
    style={{
      transition: reducedMotion ? "none" : "transform 0.3s ease",
    }}
  >
    Content
  </Card>
);`,
    },
  ],
};
