import { SITE_CONFIG } from "@/lib/seo-data";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_CONFIG.url}/docs/components/{search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/icon.svg`,
        sameAs: [SITE_CONFIG.githubUrl],
      }}
    />
  );
}

export function SoftwareApplicationSchema() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: SITE_CONFIG.name,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        author: {
          "@type": "Person",
          name: SITE_CONFIG.author,
          url: SITE_CONFIG.authorUrl,
        },
        license: "https://opensource.org/licenses/MIT",
        programmingLanguage: ["TypeScript", "React"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_CONFIG.url}${item.href}`,
        })),
      }}
    />
  );
}

export function TechArticleSchema({
  title,
  description,
  url,
  datePublished,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: title,
        description,
        url: `${SITE_CONFIG.url}${url}`,
        author: {
          "@type": "Person",
          name: SITE_CONFIG.author,
          url: SITE_CONFIG.authorUrl,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
        datePublished: datePublished || "2026-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        proficiencyLevel: "Beginner",
      }}
    />
  );
}
