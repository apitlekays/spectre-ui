import type { HookDoc } from "../types.js";

import { useClickOutsideDoc } from "./use-click-outside.js";
import { useClipboardDoc } from "./use-clipboard.js";
import { useDebounceDoc } from "./use-debounce.js";
import { useIsMountedDoc } from "./use-is-mounted.js";
import { useKeyboardShortcutDoc } from "./use-keyboard-shortcut.js";
import { useLocalStorageDoc } from "./use-local-storage.js";
import { useMediaQueryDoc } from "./use-media-query.js";
import { useReducedMotionDoc } from "./use-reduced-motion.js";
import { useScrollLockDoc } from "./use-scroll-lock.js";
import { useSpectreThemeDoc } from "./use-spectre-theme.js";

export const allHooks: HookDoc[] = [
  useClickOutsideDoc,
  useClipboardDoc,
  useDebounceDoc,
  useIsMountedDoc,
  useKeyboardShortcutDoc,
  useLocalStorageDoc,
  useMediaQueryDoc,
  useReducedMotionDoc,
  useScrollLockDoc,
  useSpectreThemeDoc,
].sort((a, b) => a.name.localeCompare(b.name));

export const hooksBySlug: Record<string, HookDoc> = Object.fromEntries(
  allHooks.map((h) => [h.slug, h])
);
