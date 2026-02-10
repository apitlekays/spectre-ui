"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export interface UseClipboardReturn {
  copy: (text: string) => Promise<void>;
  copied: boolean;
}

export function useClipboard(timeout = 2000): UseClipboardReturn {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = useCallback(
    async (text: string) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        timeoutRef.current = setTimeout(() => setCopied(false), timeout);
      } catch {
        setCopied(false);
      }
    },
    [timeout]
  );

  return { copy, copied };
}
