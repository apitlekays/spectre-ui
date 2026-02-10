import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import GlowBorderPageContent from "./GlowBorderPageContent";

const seo = getPageMetadata("/docs/components/glow-border")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/glow-border" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/glow-border`,
    images: [{ url: "/api/og?path=/docs/components/glow-border", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/glow-border"],
  },
};

export default function GlowBorderPage() {
  return <GlowBorderPageContent />;
}
