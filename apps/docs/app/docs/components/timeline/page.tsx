import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import TimelinePageContent from "./TimelinePageContent";

const seo = getPageMetadata("/docs/components/timeline")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/timeline" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/timeline`,
    images: [{ url: "/api/og?path=/docs/components/timeline", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/timeline"],
  },
};

export default function TimelinePage() {
  return <TimelinePageContent />;
}
