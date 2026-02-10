import type { HookDoc } from "../types.js";

export const useLocalStorageDoc: HookDoc = {
  name: "useLocalStorage",
  slug: "use-local-storage",
  description:
    "Manages a value in `localStorage` with the same API as `useState`. Automatically serializes to JSON on write and deserializes on read. Falls back to the initial value on SSR or when storage is unavailable.",
  importStatement: 'import { useLocalStorage } from "@spectre-ui/hooks";',
  signature:
    "function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void]",
  params: [
    {
      name: "key",
      type: "string",
      required: true,
      description: "The localStorage key to read from and write to.",
    },
    {
      name: "initialValue",
      type: "T",
      required: true,
      description: "Default value used when the key does not exist in storage or on the server.",
    },
  ],
  returnType: "[T, (value: T | ((prev: T) => T)) => void]",
  returnDescription:
    "A tuple of the current stored value and a setter function. The setter accepts either a direct value or an updater function, identical to `useState`.",
  examples: [
    {
      title: "Persist User Preference",
      code: `const [language, setLanguage] = useLocalStorage("lang", "en");

return (
  <Select value={language} onValueChange={setLanguage}>
    <SelectItem value="en">English</SelectItem>
    <SelectItem value="ja">Japanese</SelectItem>
  </Select>
);`,
    },
  ],
};
