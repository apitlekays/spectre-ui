import type { HookDoc } from "../types.js";

export const useIsMountedDoc: HookDoc = {
  name: "useIsMounted",
  slug: "use-is-mounted",
  description:
    "Returns `false` during SSR and the first render, then `true` after the component mounts. Useful for avoiding hydration mismatches when rendering client-only content.",
  importStatement: 'import { useIsMounted } from "@spectre-ui/hooks";',
  signature: "function useIsMounted(): boolean",
  params: [],
  returnType: "boolean",
  returnDescription:
    "Returns `false` on the server and during the initial render, `true` after `useEffect` fires on mount.",
  examples: [
    {
      title: "Prevent Hydration Mismatch",
      code: `const mounted = useIsMounted();

if (!mounted) return <Skeleton className="h-10 w-32" />;

return <Button>{window.innerWidth > 768 ? "Desktop" : "Mobile"}</Button>;`,
    },
  ],
};
