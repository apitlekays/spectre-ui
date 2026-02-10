import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import SeparatorPageContent from "./SeparatorPageContent";

const seo = getPageMetadata("/docs/components/separator")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/separator" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/separator`,
    images: [{ url: "/api/og?path=/docs/components/separator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/separator"],
  },
};

export default function SeparatorPage() {
  return <SeparatorPageContent />;
}
