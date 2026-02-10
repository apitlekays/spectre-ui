import type { HookDoc } from "../types.js";

export const useKeyboardShortcutDoc: HookDoc = {
  name: "useKeyboardShortcut",
  slug: "use-keyboard-shortcut",
  description:
    "Registers a global keyboard shortcut listener. Supports modifier keys (Ctrl, Meta, Shift, Alt) and calls `preventDefault` by default.",
  importStatement: 'import { useKeyboardShortcut } from "@spectre-ui/hooks";',
  signature:
    "function useKeyboardShortcut(key: string, handler: (event: KeyboardEvent) => void, options?: KeyboardShortcutOptions): void",
  params: [
    {
      name: "key",
      type: "string",
      required: true,
      description: "The keyboard key to listen for (case-insensitive), e.g. 'k', 'Escape', 'Enter'.",
    },
    {
      name: "handler",
      type: "(event: KeyboardEvent) => void",
      required: true,
      description: "Callback invoked when the shortcut is triggered.",
    },
    {
      name: "options",
      type: "KeyboardShortcutOptions",
      default: "{}",
      description:
        "Optional modifier requirements: `ctrlKey`, `metaKey`, `shiftKey`, `altKey` (all boolean). `preventDefault` defaults to `true`.",
    },
  ],
  returnType: "void",
  returnDescription:
    "This hook does not return a value. It registers a keydown listener on `document` and cleans up on unmount.",
  examples: [
    {
      title: "Open Command Palette with Cmd+K",
      code: `const [open, setOpen] = useState(false);

useKeyboardShortcut("k", () => setOpen(true), { metaKey: true });

return open ? <CommandPalette onClose={() => setOpen(false)} /> : null;`,
    },
    {
      title: "Close Dialog with Escape",
      code: `useKeyboardShortcut("Escape", () => onClose());`,
    },
  ],
};
