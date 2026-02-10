import type { GuideDoc } from "../types.js";

export const designBriefGuide: GuideDoc = {
  slug: "design-brief",
  title: "Design Brief",
  content: `# Design Brief

spectre-ui is inspired by the FUI (Futuristic User Interface) aesthetic found in science fiction films, military command centers, and espionage technology. The design language borrows from HUD (Heads-Up Display) interfaces, combining sharp geometric precision with atmospheric visual effects.

## Core Aesthetic Principles

### 1. Sharp Edges (0px border-radius)

All components use 0px border-radius. This is an opinionated, non-configurable design decision that creates the angular, technical feel central to the FUI aesthetic. Rounded corners suggest friendliness; sharp corners suggest precision and authority.

### 2. Monospace Typography

The default font stack prioritizes monospace fonts (Geist Mono, JetBrains Mono, Fira Code). Labels and headings use uppercase with wide letter-spacing for that military/technical readout feel. This creates visual rhythm that echoes terminal interfaces.

### 3. HUD Corner Brackets

The signature decorative element: small L-shaped brackets at the corners of containers. These reference targeting reticles and HUD overlay frames. Used on Cards (hud variant), Alerts, and Dialogs. Available as the \`.spectre-hud-corners\` utility class.

### 4. Cyan Glow Effects

Interactive elements emit a soft cyan glow (box-shadow) on focus and hover. This creates the holographic projection effect common in sci-fi interfaces. The glow uses the primary color at reduced opacity for a subtle, non-distracting effect. Available as \`.spectre-glow\`, \`.spectre-glow-sm\`, \`.spectre-glow-lg\`, and \`.spectre-glow-text\` utilities.

### 5. Grid Backgrounds

Subtle grid line patterns in the background reference blueprint/schematic aesthetics and create depth. The \`GridBackground\` component provides this with configurable density and fade effects. Also available as \`.spectre-grid-bg\` and \`.spectre-grid-bg-sm\` utilities.

### 6. Scanline Animations

Optional scanline overlays add the CRT/old-monitor effect. These are decorative-only and use CSS animations for performance. The \`ScanlineOverlay\` component and \`.spectre-scanline\` utility make this easy to apply.

## Color Philosophy

The dark theme uses a near-black slate background (#020617) with a cyan primary (#0ea5e9). This high-contrast combination maximizes readability while maintaining the atmospheric dark interface feel. The light theme inverts the contrast while preserving the same geometric sharpness and design elements.

## When Building with spectre-ui

- Always use 0px border-radius — never round corners
- Prefer monospace fonts for data and labels
- Use uppercase + tracking-widest for section headings
- Apply HUD corners to key containers for the signature look
- Use the glow utilities on interactive/highlighted elements
- Consider grid backgrounds for full-page layouts
- Use scanline overlays sparingly for atmospheric effect

## Inspirations

- TRON: Legacy UI design
- Marvel Cinematic Universe HUD interfaces
- Military command center displays
- Bloomberg Terminal aesthetics
- Cyberpunk 2077 in-game UI
- GitHub's dark mode + Vercel's design system
`,
};
