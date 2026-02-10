import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import PopoverPageContent from "./PopoverPageContent";

const seo = getPageMetadata("/docs/components/popover")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/popover" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/popover`,
    images: [{ url: "/api/og?path=/docs/components/popover", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/popover"],
  },
};

export default function PopoverPage() {
  return <PopoverPageContent />;
}
