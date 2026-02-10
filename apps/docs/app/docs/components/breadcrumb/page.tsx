import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import BreadcrumbPageContent from "./BreadcrumbPageContent";

const seo = getPageMetadata("/docs/components/breadcrumb")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/breadcrumb" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/breadcrumb`,
    images: [{ url: "/api/og?path=/docs/components/breadcrumb", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/breadcrumb"],
  },
};

export default function BreadcrumbPage() {
  return <BreadcrumbPageContent />;
}
