import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import ButtonPageContent from "./ButtonPageContent";

const seo = getPageMetadata("/docs/components/button")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/button" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/button`,
    images: [{ url: "/api/og?path=/docs/components/button", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/button"],
  },
};

export default function ButtonPage() {
  return <ButtonPageContent />;
}
