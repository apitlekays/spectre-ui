export const tailwindTheme = {
  colors: {
    spectre: {
      background: "var(--spectre-background)",
      foreground: "var(--spectre-foreground)",
      primary: {
        DEFAULT: "var(--spectre-primary)",
        foreground: "var(--spectre-primary-foreground)",
      },
      secondary: {
        DEFAULT: "var(--spectre-secondary)",
        foreground: "var(--spectre-secondary-foreground)",
      },
      muted: {
        DEFAULT: "var(--spectre-muted)",
        foreground: "var(--spectre-muted-foreground)",
      },
      accent: {
        DEFAULT: "var(--spectre-accent)",
        foreground: "var(--spectre-accent-foreground)",
      },
      border: "var(--spectre-border)",
      input: "var(--spectre-input)",
      ring: "var(--spectre-ring)",
      success: "var(--spectre-success)",
      warning: "var(--spectre-warning)",
      destructive: "var(--spectre-destructive)",
    },
  },
  fontFamily: {
    "spectre-sans": ["var(--spectre-font-sans)"],
    "spectre-mono": ["var(--spectre-font-mono)"],
  },
  borderRadius: {
    spectre: "0px",
  },
  keyframes: {
    "spectre-scanline-move": {
      "0%": { transform: "translateY(0)" },
      "100%": { transform: "translateY(4px)" },
    },
    "spectre-flicker": {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.98" },
      "52%": { opacity: "0.94" },
      "54%": { opacity: "1" },
      "80%": { opacity: "0.97" },
      "82%": { opacity: "1" },
    },
    "spectre-pulse-glow": {
      "0%, 100%": { boxShadow: "0 0 5px var(--spectre-glow-sm)" },
      "50%": {
        boxShadow:
          "0 0 15px var(--spectre-glow-sm), 0 0 30px var(--spectre-glow-md)",
      },
    },
    "spectre-typewriter": {
      from: { width: "0" },
      to: { width: "100%" },
    },
    "spectre-blink": {
      "0%, 100%": { borderColor: "transparent" },
      "50%": { borderColor: "var(--spectre-primary)" },
    },
  },
  animation: {
    "spectre-scanline": "spectre-scanline-move 8s linear infinite",
    "spectre-flicker": "spectre-flicker 3s infinite",
    "spectre-pulse-glow": "spectre-pulse-glow 2s ease-in-out infinite",
    "spectre-blink": "spectre-blink 1s step-end infinite",
  },
};
