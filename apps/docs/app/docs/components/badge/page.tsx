import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import BadgePageContent from "./BadgePageContent";

const seo = getPageMetadata("/docs/components/badge")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/badge" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/badge`,
    images: [{ url: "/api/og?path=/docs/components/badge", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/badge"],
  },
};

export default function BadgePage() {
  return <BadgePageContent />;
}
