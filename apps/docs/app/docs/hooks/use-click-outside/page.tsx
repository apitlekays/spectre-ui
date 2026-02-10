import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-click-outside")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-click-outside` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-click-outside`,
    images: [{ url: `/api/og?path=/docs/hooks/use-click-outside`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-click-outside`],
  },
};

export default function UseClickOutsidePage() {
  return (
    <div className="docs-prose">
      <h1>useClickOutside</h1>
      <p>Hook to detect clicks outside a referenced element.</p>
      <h2>Usage</h2>
      <pre><code>{`import { useRef } from "react";
import { useClickOutside } from "@spectre-ui/hooks";

function Dropdown() {
  const ref = useRef(null);
  const [open, setOpen] = useState(true);

  useClickOutside(ref, () => setOpen(false));

  return open ? <div ref={ref}>Dropdown content</div> : null;
}`}</code></pre>
    </div>
  );
}
