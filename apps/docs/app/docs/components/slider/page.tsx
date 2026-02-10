import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import SliderPageContent from "./SliderPageContent";

const seo = getPageMetadata("/docs/components/slider")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/slider" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/slider`,
    images: [{ url: "/api/og?path=/docs/components/slider", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/slider"],
  },
};

export default function SliderPage() {
  return <SliderPageContent />;
}
