import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import CheckboxPageContent from "./CheckboxPageContent";

const seo = getPageMetadata("/docs/components/checkbox")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/checkbox" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/checkbox`,
    images: [{ url: "/api/og?path=/docs/components/checkbox", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/checkbox"],
  },
};

export default function CheckboxPage() {
  return <CheckboxPageContent />;
}
