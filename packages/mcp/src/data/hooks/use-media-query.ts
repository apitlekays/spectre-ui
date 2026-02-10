import type { HookDoc } from "../types.js";

export const useMediaQueryDoc: HookDoc = {
  name: "useMediaQuery",
  slug: "use-media-query",
  description:
    "Subscribes to a CSS media query and returns whether it currently matches. Updates reactively when the match state changes.",
  importStatement: 'import { useMediaQuery } from "@spectre-ui/hooks";',
  signature: "function useMediaQuery(query: string): boolean",
  params: [
    {
      name: "query",
      type: "string",
      required: true,
      description:
        "A valid CSS media query string, e.g. '(min-width: 768px)' or '(prefers-color-scheme: dark)'.",
    },
  ],
  returnType: "boolean",
  returnDescription:
    "Returns `true` when the media query matches, `false` otherwise. The value updates automatically when the viewport or user preferences change.",
  examples: [
    {
      title: "Responsive Layout",
      code: `const isDesktop = useMediaQuery("(min-width: 1024px)");

return isDesktop ? <DesktopLayout /> : <MobileLayout />;`,
    },
    {
      title: "Dark Mode Detection",
      code: `const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

return <p>User prefers {prefersDark ? "dark" : "light"} mode</p>;`,
    },
  ],
};
