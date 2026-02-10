import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import AlertPageContent from "./AlertPageContent";

const seo = getPageMetadata("/docs/components/alert")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/alert" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/alert`,
    images: [{ url: "/api/og?path=/docs/components/alert", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/alert"],
  },
};

export default function AlertPage() {
  return <AlertPageContent />;
}
