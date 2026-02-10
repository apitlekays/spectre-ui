import type { HookDoc } from "../types.js";

export const useScrollLockDoc: HookDoc = {
  name: "useScrollLock",
  slug: "use-scroll-lock",
  description:
    "Locks or unlocks body scrolling. When locked, sets `document.body.style.overflow` to 'hidden' and restores the original value on unlock or unmount.",
  importStatement: 'import { useScrollLock } from "@spectre-ui/hooks";',
  signature: "function useScrollLock(locked: boolean): void",
  params: [
    {
      name: "locked",
      type: "boolean",
      required: true,
      description: "When `true`, body scroll is disabled. When `false`, the original overflow is restored.",
    },
  ],
  returnType: "void",
  returnDescription: "This hook does not return a value. It manages body overflow as a side effect.",
  examples: [
    {
      title: "Lock Scroll When Modal is Open",
      code: `const [modalOpen, setModalOpen] = useState(false);

useScrollLock(modalOpen);

return (
  <>
    <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
    {modalOpen && <Dialog onClose={() => setModalOpen(false)}>...</Dialog>}
  </>
);`,
    },
  ],
};
