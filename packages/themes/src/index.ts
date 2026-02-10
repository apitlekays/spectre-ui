export interface AgentUIThemePreset {
  name: string;
  label: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
    input: string;
    ring: string;
    success: string;
    warning: string;
    destructive: string;
  };
  fonts: {
    sans: string;
    mono: string;
  };
  glow: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const cyberDark: AgentUIThemePreset = {
  name: "cyber-dark",
  label: "Cyber Dark",
  colors: {
    background: "#020617",
    foreground: "#e2e8f0",
    primary: "#0ea5e9",
    primaryForeground: "#020617",
    secondary: "#1e293b",
    secondaryForeground: "#e2e8f0",
    muted: "#0f172a",
    mutedForeground: "#94a3b8",
    accent: "#0ea5e9",
    accentForeground: "#020617",
    border: "rgba(14, 165, 233, 0.15)",
    input: "#1e293b",
    ring: "#0ea5e9",
    success: "#22c55e",
    warning: "#eab308",
    destructive: "#ef4444",
  },
  fonts: {
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    mono: '"Geist Mono", "JetBrains Mono", "Fira Code", ui-monospace, monospace',
  },
  glow: {
    sm: "rgba(14, 165, 233, 0.3)",
    md: "rgba(14, 165, 233, 0.15)",
    lg: "rgba(14, 165, 233, 0.08)",
  },
};

export const cyberLight: AgentUIThemePreset = {
  name: "cyber-light",
  label: "Cyber Light",
  colors: {
    background: "#f8fafc",
    foreground: "#0f172a",
    primary: "#0284c7",
    primaryForeground: "#f8fafc",
    secondary: "#e2e8f0",
    secondaryForeground: "#1e293b",
    muted: "#f1f5f9",
    mutedForeground: "#64748b",
    accent: "#0284c7",
    accentForeground: "#f8fafc",
    border: "rgba(2, 132, 199, 0.2)",
    input: "#e2e8f0",
    ring: "#0284c7",
    success: "#16a34a",
    warning: "#ca8a04",
    destructive: "#dc2626",
  },
  fonts: {
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    mono: '"Geist Mono", "JetBrains Mono", "Fira Code", ui-monospace, monospace',
  },
  glow: {
    sm: "rgba(2, 132, 199, 0.2)",
    md: "rgba(2, 132, 199, 0.1)",
    lg: "rgba(2, 132, 199, 0.05)",
  },
};

export const themes = {
  "cyber-dark": cyberDark,
  "cyber-light": cyberLight,
} as const;

export type ThemeName = keyof typeof themes;
