import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import StackPageContent from "./StackPageContent";

const seo = getPageMetadata("/docs/components/stack")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/stack" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/stack`,
    images: [{ url: "/api/og?path=/docs/components/stack", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/stack"],
  },
};

export default function StackPage() {
  return <StackPageContent />;
}
