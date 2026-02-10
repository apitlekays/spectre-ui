import React from "react";
import { cn } from "../../utils/cn";

export interface ScanlineOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  opacity?: number;
  speed?: "slow" | "normal" | "fast";
}

const speedMap = {
  slow: "12s",
  normal: "8s",
  fast: "4s",
};

const ScanlineOverlay = React.forwardRef<HTMLDivElement, ScanlineOverlayProps>(
  ({ className, opacity = 0.05, speed = "normal", style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        style={style}
        aria-hidden="true"
        {...props}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, ${opacity}) 2px, rgba(255, 255, 255, ${opacity}) 4px)`,
            animation: `spectre-scanline-move ${speedMap[speed]} linear infinite`,
          }}
        />
      </div>
    );
  }
);

ScanlineOverlay.displayName = "ScanlineOverlay";

export { ScanlineOverlay };
