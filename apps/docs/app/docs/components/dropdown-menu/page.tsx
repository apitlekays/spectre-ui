import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import DropdownMenuPageContent from "./DropdownMenuPageContent";

const seo = getPageMetadata("/docs/components/dropdown-menu")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/dropdown-menu" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/dropdown-menu`,
    images: [{ url: "/api/og?path=/docs/components/dropdown-menu", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/dropdown-menu"],
  },
};

export default function DropdownMenuPage() {
  return <DropdownMenuPageContent />;
}
