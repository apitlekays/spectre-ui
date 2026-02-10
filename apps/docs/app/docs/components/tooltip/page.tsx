import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import TooltipPageContent from "./TooltipPageContent";

const seo = getPageMetadata("/docs/components/tooltip")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/tooltip" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/tooltip`,
    images: [{ url: "/api/og?path=/docs/components/tooltip", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/tooltip"],
  },
};

export default function TooltipPage() {
  return <TooltipPageContent />;
}
