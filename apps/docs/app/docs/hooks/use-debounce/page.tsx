import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/hooks/use-debounce")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/hooks/use-debounce` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/hooks/use-debounce`,
    images: [{ url: `/api/og?path=/docs/hooks/use-debounce`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/hooks/use-debounce`],
  },
};

export default function UseDebouncePage() {
  return (
    <div className="docs-prose">
      <h1>useDebounce</h1>
      <p>Hook that debounces a value by a specified delay.</p>
      <h2>Usage</h2>
      <pre><code>{`import { useDebounce } from "@spectre-ui/hooks";

function SearchInput() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    // Only fires after 300ms of no typing
    search(debouncedQuery);
  }, [debouncedQuery]);
}`}</code></pre>
    </div>
  );
}
