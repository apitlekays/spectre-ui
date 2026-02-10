"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface SystemTickerProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: string[];
  speed?: "slow" | "normal" | "fast";
  separator?: string;
}

const speedMap = {
  slow: "40s",
  normal: "25s",
  fast: "15s",
};

const defaultMessages = [
  "sys.status: online",
  "sec.level: classified",
  "net.latency: 12ms",
  "mem.usage: 64%",
  "cpu.load: 0.42",
  "uptime: 99.97%",
];

const SystemTicker = React.forwardRef<HTMLDivElement, SystemTickerProps>(
  (
    {
      className,
      messages = defaultMessages,
      speed = "normal",
      separator = " // ",
      ...props
    },
    ref
  ) => {
    const text = messages.join(separator);

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden border-y border-spectre-border bg-spectre-muted/50 py-1 font-mono text-[10px] uppercase tracking-widest text-spectre-muted-foreground",
          className
        )}
        {...props}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: `spectre-ticker ${speedMap[speed]} linear infinite`,
          }}
        >
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
        </div>
        <style>{`
          @keyframes spectre-ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}</style>
      </div>
    );
  }
);

SystemTicker.displayName = "SystemTicker";

export { SystemTicker };
