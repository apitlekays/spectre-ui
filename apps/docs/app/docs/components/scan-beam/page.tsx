import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import ScanBeamPageContent from "./ScanBeamPageContent";

const seo = getPageMetadata("/docs/components/scan-beam")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/scan-beam" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/scan-beam`,
    images: [{ url: "/api/og?path=/docs/components/scan-beam", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/scan-beam"],
  },
};

export default function ScanBeamPage() {
  return <ScanBeamPageContent />;
}
