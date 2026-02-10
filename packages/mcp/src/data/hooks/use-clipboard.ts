import type { HookDoc } from "../types.js";

export const useClipboardDoc: HookDoc = {
  name: "useClipboard",
  slug: "use-clipboard",
  description:
    "Provides a `copy` function to write text to the system clipboard and a `copied` boolean that resets after a configurable timeout.",
  importStatement: 'import { useClipboard } from "@spectre-ui/hooks";',
  signature: "function useClipboard(timeout?: number): UseClipboardReturn",
  params: [
    {
      name: "timeout",
      type: "number",
      default: "2000",
      description: "Milliseconds before `copied` resets to `false` after a successful copy.",
    },
  ],
  returnType: "{ copy: (text: string) => Promise<void>; copied: boolean }",
  returnDescription:
    "`copy(text)` writes the string to the clipboard. `copied` is `true` for the duration of `timeout` after a successful copy, then resets to `false`.",
  examples: [
    {
      title: "Copy to Clipboard Button",
      code: `const { copy, copied } = useClipboard();

return (
  <Button onClick={() => copy("npm install @spectre-ui/core")}>
    {copied ? "Copied!" : "Copy Command"}
  </Button>
);`,
    },
    {
      title: "Custom Timeout",
      code: `const { copy, copied } = useClipboard(5000);

return (
  <Button onClick={() => copy(apiKey)}>
    {copied ? "Copied for 5s" : "Copy API Key"}
  </Button>
);`,
    },
  ],
};
