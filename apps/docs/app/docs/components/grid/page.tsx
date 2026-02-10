import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import GridPageContent from "./GridPageContent";

const seo = getPageMetadata("/docs/components/grid")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/grid" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/grid`,
    images: [{ url: "/api/og?path=/docs/components/grid", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/grid"],
  },
};

export default function GridPage() {
  return <GridPageContent />;
}
