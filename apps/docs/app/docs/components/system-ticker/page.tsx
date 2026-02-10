import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import SystemTickerPageContent from "./SystemTickerPageContent";

const seo = getPageMetadata("/docs/components/system-ticker")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/system-ticker" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/system-ticker`,
    images: [{ url: "/api/og?path=/docs/components/system-ticker", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/system-ticker"],
  },
};

export default function SystemTickerPage() {
  return <SystemTickerPageContent />;
}
