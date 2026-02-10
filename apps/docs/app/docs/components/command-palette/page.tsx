import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import CommandPalettePageContent from "./CommandPalettePageContent";

const seo = getPageMetadata("/docs/components/command-palette")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/command-palette" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/command-palette`,
    images: [{ url: "/api/og?path=/docs/components/command-palette", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/command-palette"],
  },
};

export default function CommandPalettePage() {
  return <CommandPalettePageContent />;
}
