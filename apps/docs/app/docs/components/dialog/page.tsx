import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";
import DialogPageContent from "./DialogPageContent";

const seo = getPageMetadata("/docs/components/dialog")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/docs/components/dialog" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/components/dialog`,
    images: [{ url: "/api/og?path=/docs/components/dialog", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/api/og?path=/docs/components/dialog"],
  },
};

export default function DialogPage() {
  return <DialogPageContent />;
}
