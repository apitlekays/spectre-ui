import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import SkeletonPageContent from "./SkeletonPageContent";

const seo = getPageMetadata("/docs/components/skeleton")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/skeleton" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/skeleton`,
    images: [{ url: "/api/og?path=/docs/components/skeleton", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/skeleton"],
  },
};

export default function SkeletonPage() {
  return <SkeletonPageContent />;
}
