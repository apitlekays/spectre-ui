import type { HookDoc } from "../types.js";

export const useDebounceDoc: HookDoc = {
  name: "useDebounce",
  slug: "use-debounce",
  description:
    "Debounces a value by the specified delay. The returned value only updates after no changes have occurred for `delay` milliseconds.",
  importStatement: 'import { useDebounce } from "@spectre-ui/hooks";',
  signature: "function useDebounce<T>(value: T, delay: number): T",
  params: [
    {
      name: "value",
      type: "T",
      required: true,
      description: "The value to debounce.",
    },
    {
      name: "delay",
      type: "number",
      required: true,
      description: "Debounce delay in milliseconds.",
    },
  ],
  returnType: "T",
  returnDescription:
    "The debounced value. It updates only after the source value has remained unchanged for the duration of `delay`.",
  examples: [
    {
      title: "Debounced Search Input",
      code: `const [query, setQuery] = useState("");
const debouncedQuery = useDebounce(query, 300);

useEffect(() => {
  if (debouncedQuery) {
    fetchResults(debouncedQuery);
  }
}, [debouncedQuery]);

return <Input value={query} onChange={(e) => setQuery(e.target.value)} />;`,
    },
  ],
};
