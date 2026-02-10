export interface UtilityClass {
  className: string;
  description: string;
  css: string;
}

export const utilities: UtilityClass[] = [
  {
    className: ".spectre-hud-corners",
    description:
      "Adds L-shaped bracket decorations to the top-left and top-right corners of an element. Uses ::before and ::after pseudo-elements.",
    css: `position: relative;
&::before { top: 0; left: 0; border-top: 2px solid var(--spectre-primary); border-left: 2px solid var(--spectre-primary); width: 12px; height: 12px; }
&::after { top: 0; right: 0; border-top: 2px solid var(--spectre-primary); border-right: 2px solid var(--spectre-primary); width: 12px; height: 12px; }`,
  },
  {
    className: ".spectre-hud-corners-full",
    description:
      "Adds L-shaped bracket decorations to the top-left and bottom-right corners of an element.",
    css: `position: relative;
&::before { top: 0; left: 0; border-top: 2px solid var(--spectre-primary); border-left: 2px solid var(--spectre-primary); width: 12px; height: 12px; }
&::after { bottom: 0; right: 0; border-bottom: 2px solid var(--spectre-primary); border-right: 2px solid var(--spectre-primary); width: 12px; height: 12px; }`,
  },
  {
    className: ".spectre-grid-bg",
    description:
      "Applies a 40px grid background pattern using the border color. Creates a subtle blueprint/schematic effect.",
    css: `background-image: linear-gradient(var(--spectre-border) 1px, transparent 1px), linear-gradient(90deg, var(--spectre-border) 1px, transparent 1px);
background-size: 40px 40px;`,
  },
  {
    className: ".spectre-grid-bg-sm",
    description:
      "Same as .spectre-grid-bg but with a tighter 20px grid density.",
    css: `background-image: linear-gradient(var(--spectre-border) 1px, transparent 1px), linear-gradient(90deg, var(--spectre-border) 1px, transparent 1px);
background-size: 20px 20px;`,
  },
  {
    className: ".spectre-scanline",
    description:
      "Adds an animated scanline overlay effect using a repeating gradient on ::after. Moves slowly downward in an 8s loop.",
    css: `position: relative; overflow: hidden;
&::after { content: ""; position: absolute; inset: 0; background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px); animation: spectre-scanline-move 8s linear infinite; }`,
  },
  {
    className: ".spectre-glow",
    description:
      "Standard cyan glow box-shadow using --spectre-glow-sm and --spectre-glow-md.",
    css: `box-shadow: 0 0 10px var(--spectre-glow-sm), 0 0 20px var(--spectre-glow-md);`,
  },
  {
    className: ".spectre-glow-sm",
    description: "Subtle cyan glow box-shadow using --spectre-glow-sm only.",
    css: `box-shadow: 0 0 5px var(--spectre-glow-sm);`,
  },
  {
    className: ".spectre-glow-lg",
    description:
      "Large cyan glow box-shadow using all three glow tokens for a dramatic holographic effect.",
    css: `box-shadow: 0 0 15px var(--spectre-glow-sm), 0 0 30px var(--spectre-glow-md), 0 0 45px var(--spectre-glow-lg);`,
  },
  {
    className: ".spectre-glow-text",
    description: "Cyan text-shadow glow for headings and highlighted text.",
    css: `text-shadow: 0 0 10px var(--spectre-glow-sm), 0 0 20px var(--spectre-glow-md);`,
  },
  {
    className: ".spectre-flicker",
    description:
      "Subtle opacity flicker animation (3s loop) that simulates screen interference.",
    css: `animation: spectre-flicker 3s infinite;`,
  },
];
