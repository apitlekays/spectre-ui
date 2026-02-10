import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/design-brief")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/design-brief` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/design-brief`,
    images: [{ url: `/api/og?path=/docs/design-brief`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/design-brief`],
  },
};

export default function DesignBriefPage() {
  return (
    <div className="docs-prose">
      <h1>Design Brief</h1>
      <p>
        spectre-ui is inspired by the FUI (Futuristic User Interface) aesthetic found
        in science fiction films, military command centers, and espionage technology.
        The design language borrows from HUD (Heads-Up Display) interfaces, combining
        sharp geometric precision with atmospheric visual effects.
      </p>

      <h2>Core Aesthetic Principles</h2>

      <h3>1. Sharp Edges</h3>
      <p>
        All components use 0px border-radius. This is an opinionated, non-configurable
        design decision that creates the angular, technical feel central to the FUI
        aesthetic. Rounded corners suggest friendliness; sharp corners suggest precision
        and authority.
      </p>

      <h3>2. Monospace Typography</h3>
      <p>
        The default font stack prioritizes monospace fonts (Geist Mono, JetBrains Mono).
        Labels and headings use uppercase tracking-widest for that military/technical
        readout feel. This creates visual rhythm that echoes terminal interfaces.
      </p>

      <h3>3. HUD Corner Brackets</h3>
      <p>
        The signature decorative element: small L-shaped brackets at the corners of
        containers. These reference targeting reticles and HUD overlay frames. Used
        on Cards (hud variant), Alerts, and Dialogs.
      </p>

      <h3>4. Cyan Glow Effects</h3>
      <p>
        Interactive elements emit a soft cyan glow (box-shadow) on focus and hover.
        This creates the holographic projection effect common in sci-fi interfaces.
        The glow uses the primary color at reduced opacity for a subtle, non-distracting
        effect.
      </p>

      <h3>5. Grid Backgrounds</h3>
      <p>
        Subtle grid line patterns in the background reference blueprint/schematic
        aesthetics and create depth. The GridBackground component provides this
        with configurable density and fade effects.
      </p>

      <h3>6. Scanline Animations</h3>
      <p>
        Optional scanline overlays add the CRT/old-monitor effect. These are
        decorative-only and use CSS animations for performance. The ScanlineOverlay
        component makes this easy to apply.
      </p>

      <h2>Color Philosophy</h2>
      <p>
        The dark theme uses a near-black slate background (#020617) with a cyan
        primary (#0ea5e9). This high-contrast combination maximizes readability while
        maintaining the atmospheric dark interface feel. The light theme inverts
        the contrast while preserving the same geometric sharpness and design elements.
      </p>

      <h2>Inspirations</h2>
      <ul>
        <li>TRON: Legacy UI design</li>
        <li>Marvel Cinematic Universe HUD interfaces</li>
        <li>Military command center displays</li>
        <li>Bloomberg Terminal aesthetics</li>
        <li>Cyberpunk 2077 in-game UI</li>
        <li>GitHub&apos;s dark mode + Vercel&apos;s design system</li>
      </ul>
    </div>
  );
}
