import type { ComponentDoc } from "../types.js";

export const dialogDoc: ComponentDoc = {
  name: "Dialog",
  slug: "dialog",
  category: "feedback",
  description: "Modal dialog with backdrop overlay, close button, and focus trapping. Built on Radix UI Dialog with spectre-ui styling.",
  importStatement: 'import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from "@spectre-ui/core";',
  props: [
    { name: "open", type: "boolean", description: "Controlled open state." },
    { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes." },
  ],
  subComponents: [
    { name: "DialogTrigger", description: "Element that opens the dialog.", props: [{ name: "asChild", type: "boolean", description: "Merge props onto child element." }] },
    { name: "DialogContent", description: "The modal panel with backdrop blur overlay.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "DialogHeader", description: "Top section for title and description.", props: [] },
    { name: "DialogFooter", description: "Bottom section for action buttons.", props: [] },
    { name: "DialogTitle", description: "Dialog heading.", props: [] },
    { name: "DialogDescription", description: "Dialog description text.", props: [] },
    { name: "DialogClose", description: "Close button.", props: [{ name: "asChild", type: "boolean", description: "Merge props onto child element." }] },
  ],
  examples: [
    {
      title: "Confirmation Dialog",
      code: '<Dialog>\n  <DialogTrigger asChild>\n    <Button variant="destructive">Delete Project</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Confirm Deletion</DialogTitle>\n      <DialogDescription>This action cannot be undone. Are you sure?</DialogDescription>\n    </DialogHeader>\n    <DialogFooter>\n      <DialogClose asChild>\n        <Button variant="outline">Cancel</Button>\n      </DialogClose>\n      <Button variant="destructive" onClick={handleDelete}>Delete</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>',
    },
  ],
  accessibility: "Built on Radix UI Dialog with focus trapping, Escape to close, and proper ARIA roles.",
};
