import type { HookDoc } from "../types.js";

export const useClickOutsideDoc: HookDoc = {
  name: "useClickOutside",
  slug: "use-click-outside",
  description:
    "Detects clicks (mousedown) and touches (touchstart) outside a referenced element and invokes a callback. Useful for closing dropdowns, modals, and popovers.",
  importStatement: 'import { useClickOutside } from "@spectre-ui/hooks";',
  signature:
    "function useClickOutside<T extends HTMLElement>(ref: RefObject<T | null>, handler: (event: MouseEvent | TouchEvent) => void): void",
  params: [
    {
      name: "ref",
      type: "RefObject<T | null>",
      required: true,
      description: "React ref attached to the element you want to monitor.",
    },
    {
      name: "handler",
      type: "(event: MouseEvent | TouchEvent) => void",
      required: true,
      description: "Callback fired when a click or touch occurs outside the referenced element.",
    },
  ],
  returnType: "void",
  returnDescription: "This hook does not return a value. It registers and cleans up event listeners automatically.",
  examples: [
    {
      title: "Close Dropdown on Outside Click",
      code: `const ref = useRef<HTMLDivElement>(null);
const [open, setOpen] = useState(false);

useClickOutside(ref, () => setOpen(false));

return (
  <div ref={ref}>
    <Button onClick={() => setOpen(true)}>Open Menu</Button>
    {open && <DropdownMenu>...</DropdownMenu>}
  </div>
);`,
    },
  ],
};
