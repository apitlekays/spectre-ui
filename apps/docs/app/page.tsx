import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import LandingPageContent from "./LandingPageContent";

const seo = getPageMetadata("/")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: SITE_CONFIG.url,
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og"],
  },
};

export default function LandingPage() {
  return <LandingPageContent />;
}
