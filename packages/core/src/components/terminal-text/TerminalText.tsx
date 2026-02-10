"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

export interface TerminalTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  speed?: number;
  cursor?: boolean;
  prefix?: string;
  onComplete?: () => void;
}

const TerminalText = React.forwardRef<HTMLDivElement, TerminalTextProps>(
  (
    {
      className,
      text,
      speed = 50,
      cursor = true,
      prefix = "> ",
      onComplete,
      ...props
    },
    ref
  ) => {
    const [displayed, setDisplayed] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const indexRef = useRef(0);

    useEffect(() => {
      setDisplayed("");
      setIsComplete(false);
      indexRef.current = 0;

      const interval = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayed(text.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(interval);
    }, [text, speed, onComplete]);

    return (
      <div
        ref={ref}
        className={cn("font-mono text-sm text-spectre-foreground", className)}
        {...props}
      >
        <span className="text-spectre-primary">{prefix}</span>
        <span>{displayed}</span>
        {cursor && !isComplete && (
          <span className="inline-block w-2 h-4 ml-0.5 bg-spectre-primary animate-spectre-blink align-middle" />
        )}
      </div>
    );
  }
);

TerminalText.displayName = "TerminalText";

export { TerminalText };
