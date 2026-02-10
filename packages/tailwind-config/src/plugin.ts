import plugin from "tailwindcss/plugin";

export const spectreUIPlugin = plugin(
  function ({ addUtilities, addComponents }) {
    // HUD corner bracket decoration
    addComponents({
      ".spectre-hud-corners": {
        position: "relative",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          width: "12px",
          height: "12px",
          borderColor: "var(--spectre-primary)",
          pointerEvents: "none",
        },
        "&::before": {
          top: "0",
          left: "0",
          borderTop: "2px solid",
          borderLeft: "2px solid",
          borderColor: "var(--spectre-primary)",
        },
        "&::after": {
          top: "0",
          right: "0",
          borderTop: "2px solid",
          borderRight: "2px solid",
          borderColor: "var(--spectre-primary)",
        },
      },
      ".spectre-hud-corners-full": {
        position: "relative",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          width: "12px",
          height: "12px",
          borderColor: "var(--spectre-primary)",
          pointerEvents: "none",
        },
        "&::before": {
          top: "0",
          left: "0",
          borderTop: "2px solid",
          borderLeft: "2px solid",
          borderColor: "var(--spectre-primary)",
        },
        "&::after": {
          bottom: "0",
          right: "0",
          borderBottom: "2px solid",
          borderRight: "2px solid",
          borderColor: "var(--spectre-primary)",
        },
      },
    });

    // Grid background pattern
    addUtilities({
      ".spectre-grid-bg": {
        backgroundImage:
          "linear-gradient(var(--spectre-border) 1px, transparent 1px), linear-gradient(90deg, var(--spectre-border) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      },
      ".spectre-grid-bg-sm": {
        backgroundImage:
          "linear-gradient(var(--spectre-border) 1px, transparent 1px), linear-gradient(90deg, var(--spectre-border) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      },
    });

    // Scanline overlay
    addUtilities({
      ".spectre-scanline": {
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: "0",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.05) 2px, rgba(255, 255, 255, 0.05) 4px)",
          pointerEvents: "none",
          animation: "spectre-scanline-move 8s linear infinite",
        },
      },
    });

    // Glow effects
    addUtilities({
      ".spectre-glow": {
        boxShadow: "0 0 10px var(--spectre-glow-sm), 0 0 20px var(--spectre-glow-md)",
      },
      ".spectre-glow-sm": {
        boxShadow: "0 0 5px var(--spectre-glow-sm)",
      },
      ".spectre-glow-lg": {
        boxShadow:
          "0 0 15px var(--spectre-glow-sm), 0 0 30px var(--spectre-glow-md), 0 0 45px var(--spectre-glow-lg)",
      },
      ".spectre-glow-text": {
        textShadow: "0 0 10px var(--spectre-glow-sm), 0 0 20px var(--spectre-glow-md)",
      },
    });

    // Flicker animation
    addUtilities({
      ".spectre-flicker": {
        animation: "spectre-flicker 3s infinite",
      },
    });
  },
  {
    theme: {
      extend: {
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
      },
    },
  }
);

export default spectreUIPlugin;
