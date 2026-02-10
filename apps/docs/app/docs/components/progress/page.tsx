import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import ProgressPageContent from "./ProgressPageContent";

const seo = getPageMetadata("/docs/components/progress")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/progress" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/progress`,
    images: [{ url: "/api/og?path=/docs/components/progress", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/progress"],
  },
};

export default function ProgressPage() {
  return <ProgressPageContent />;
}
