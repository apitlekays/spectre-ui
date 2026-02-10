import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import TabsPageContent from "./TabsPageContent";

const seo = getPageMetadata("/docs/components/tabs")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/tabs" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/tabs`,
    images: [{ url: "/api/og?path=/docs/components/tabs", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/tabs"],
  },
};

export default function TabsPage() {
  return <TabsPageContent />;
}
