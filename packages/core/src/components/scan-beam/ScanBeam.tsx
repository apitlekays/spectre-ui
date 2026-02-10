import React from "react";
import { cn } from "../../utils/cn";

export interface ScanBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Beam color. Defaults to the theme primary color. */
  color?: string;
  /** Beam opacity (0 to 1). */
  opacity?: number;
  /** Animation speed. slow = 6s, normal = 3s, fast = 1.5s. */
  speed?: "slow" | "normal" | "fast";
  /** Beam height as a percentage of the container. */
  size?: number;
  /** Sweep direction. */
  direction?: "down" | "up";
}

const speedMap = {
  slow: "6s",
  normal: "3s",
  fast: "1.5s",
};

const ScanBeam = React.forwardRef<HTMLDivElement, ScanBeamProps>(
  (
    {
      className,
      color,
      opacity = 0.3,
      speed = "normal",
      size = 20,
      direction = "down",
      style,
      ...props
    },
    ref
  ) => {
    const beamColor = color || "var(--spectre-primary)";
    const animationName =
      direction === "down" ? "spectre-scan-beam-down" : "spectre-scan-beam-up";

    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        style={style}
        aria-hidden="true"
        {...props}
      >
        <div
          className="w-full"
          style={{
            height: `${size}%`,
            opacity,
            background: `linear-gradient(${direction === "down" ? "to bottom" : "to top"}, ${beamColor}, transparent)`,
            animation: `${animationName} ${speedMap[speed]} linear infinite`,
          }}
        />
      </div>
    );
  }
);

ScanBeam.displayName = "ScanBeam";

export { ScanBeam };
