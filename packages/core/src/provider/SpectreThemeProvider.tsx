"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type SpectreTheme = "dark" | "light";

export interface SpectreThemeTokens {
  background?: string;
  foreground?: string;
  primary?: string;
  primaryForeground?: string;
  secondary?: string;
  secondaryForeground?: string;
  muted?: string;
  mutedForeground?: string;
  accent?: string;
  accentForeground?: string;
  border?: string;
  input?: string;
  ring?: string;
  success?: string;
  warning?: string;
  destructive?: string;
  fontSans?: string;
  fontMono?: string;
  glowSm?: string;
  glowMd?: string;
  glowLg?: string;
}

export interface SpectreThemeContextValue {
  theme: SpectreTheme;
  setTheme: (theme: SpectreTheme) => void;
  toggleTheme: () => void;
}

const SpectreThemeContext = createContext<SpectreThemeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "spectre-ui-theme";

function getSystemTheme(): SpectreTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export interface SpectreThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: SpectreTheme;
  storageKey?: string;
  forcedTheme?: SpectreTheme;
  customTokens?: Partial<Record<SpectreTheme, SpectreThemeTokens>>;
  useSystemTheme?: boolean;
}

const TOKEN_MAP: Record<keyof SpectreThemeTokens, string> = {
  background: "--spectre-background",
  foreground: "--spectre-foreground",
  primary: "--spectre-primary",
  primaryForeground: "--spectre-primary-foreground",
  secondary: "--spectre-secondary",
  secondaryForeground: "--spectre-secondary-foreground",
  muted: "--spectre-muted",
  mutedForeground: "--spectre-muted-foreground",
  accent: "--spectre-accent",
  accentForeground: "--spectre-accent-foreground",
  border: "--spectre-border",
  input: "--spectre-input",
  ring: "--spectre-ring",
  success: "--spectre-success",
  warning: "--spectre-warning",
  destructive: "--spectre-destructive",
  fontSans: "--spectre-font-sans",
  fontMono: "--spectre-font-mono",
  glowSm: "--spectre-glow-sm",
  glowMd: "--spectre-glow-md",
  glowLg: "--spectre-glow-lg",
};

export function SpectreThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = STORAGE_KEY,
  forcedTheme,
  customTokens,
  useSystemTheme = false,
}: SpectreThemeProviderProps) {
  const [theme, setThemeState] = useState<SpectreTheme>(() => {
    if (forcedTheme) return forcedTheme;
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey) as SpectreTheme | null;
      if (stored === "dark" || stored === "light") return stored;
    } catch {}
    return useSystemTheme ? getSystemTheme() : defaultTheme;
  });

  const setTheme = useCallback(
    (newTheme: SpectreTheme) => {
      if (forcedTheme) return;
      setThemeState(newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {}
    },
    [forcedTheme, storageKey]
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (!useSystemTheme || forcedTheme) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      setThemeState(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [useSystemTheme, forcedTheme]);

  const customStyles = useMemo(() => {
    const tokens = customTokens?.[theme];
    if (!tokens) return {};
    const styles: Record<string, string> = {};
    for (const [key, cssVar] of Object.entries(TOKEN_MAP)) {
      const value = tokens[key as keyof SpectreThemeTokens];
      if (value) styles[cssVar] = value;
    }
    return styles;
  }, [customTokens, theme]);

  const contextValue = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <SpectreThemeContext.Provider value={contextValue}>
      <div
        data-spectre-theme={theme}
        style={{
          minHeight: "100%",
          ...customStyles,
        }}
      >
        {children}
      </div>
    </SpectreThemeContext.Provider>
  );
}

export function useSpectreTheme(): SpectreThemeContextValue {
  const context = useContext(SpectreThemeContext);
  if (!context) {
    throw new Error("useSpectreTheme must be used within a SpectreThemeProvider");
  }
  return context;
}
