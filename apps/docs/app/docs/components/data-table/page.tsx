import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import DataTablePageContent from "./DataTablePageContent";

const seo = getPageMetadata("/docs/components/data-table")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/data-table" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/data-table`,
    images: [{ url: "/api/og?path=/docs/components/data-table", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/data-table"],
  },
};

export default function DataTablePage() {
  return <DataTablePageContent />;
}
