import {
  BAJPAI_LABS_URL,
  CONTACT_EMAIL,
  LEGAL_COMPANY_CIN,
  LEGAL_COMPANY_NAME,
  OG_IMAGE_ALT,
  OG_IMAGE_URL,
  PRODUCT_NAME,
  SITE_META_DESCRIPTION,
  SITE_META_TITLE,
  SITE_ORIGIN,
  TWITTER_HANDLE,
} from "./site";

/* ── Stable @id anchors ───────────────────────────────────── */

export const SCHEMA_IDS = {
  organization: `${SITE_ORIGIN}/#organization`,
  website: `${SITE_ORIGIN}/#website`,
  homepage: `${SITE_ORIGIN}/#webpage`,
  parentOrg: `${BAJPAI_LABS_URL}/#organization`,
} as const;

/* ── Shared nodes ─────────────────────────────────────────── */

export function organizationNode() {
  return {
    "@type": ["Organization", "Corporation"],
    "@id": SCHEMA_IDS.organization,
    name: PRODUCT_NAME,
    alternateName: `${PRODUCT_NAME} by Bajpai Labs`,
    legalName: LEGAL_COMPANY_NAME,
    url: SITE_ORIGIN,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_ORIGIN}/logo.png`,
      width: 256,
      height: 256,
    },
    image: { "@type": "ImageObject", url: OG_IMAGE_URL, caption: OG_IMAGE_ALT },
    description: SITE_META_DESCRIPTION,
    email: CONTACT_EMAIL,
    sameAs: [BAJPAI_LABS_URL, `https://twitter.com/${TWITTER_HANDLE.replace("@", "")}`],
    parentOrganization: { "@id": SCHEMA_IDS.parentOrg },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "CIN",
        value: LEGAL_COMPANY_CIN,
      },
    ],
    knowsAbout: [
      "Computational drug discovery",
      "Virtual high-throughput screening",
      "Graph neural networks for molecular design",
      "Molecular docking and dynamics simulation",
      "ADME and toxicity prediction",
      "Target discovery and disease mapping",
      "Closed-loop active learning for drug discovery",
      "Antibody engineering",
      "Gene therapy sequence design",
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    name: PRODUCT_NAME,
    url: SITE_ORIGIN,
    publisher: { "@id": SCHEMA_IDS.organization },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_ORIGIN}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Global entity graph — injected on every page. */
export function globalBrandEntityJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode()],
  };
}

/* ── Page-level node builders ─────────────────────────────── */

export function webPageNode({
  id,
  name,
  description,
  url,
  breadcrumb,
}: {
  id: string;
  name: string;
  description: string;
  url: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}) {
  return {
    "@type": "WebPage",
    "@id": id,
    name,
    description,
    url,
    isPartOf: { "@id": SCHEMA_IDS.website },
    publisher: { "@id": SCHEMA_IDS.organization },
    inLanguage: "en-US",
    ...(breadcrumb && breadcrumb.length > 0
      ? {
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: breadcrumb.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              item: item.url,
            })),
          },
        }
      : {}),
  };
}

export function faqPageNode(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function definedTermSetNode(
  terms: Array<{ term: string; definition: string }>,
) {
  return {
    "@type": "DefinedTermSet",
    name: `${PRODUCT_NAME} Glossary`,
    hasDefinedTerm: terms.map(({ term, definition }) => ({
      "@type": "DefinedTerm",
      name: term,
      description: definition,
      inDefinedTermSet: `${SITE_ORIGIN}/#glossary`,
    })),
  };
}

export function keyFactsListNode(facts: Array<{ label: string; value: string }>) {
  return {
    "@type": "ItemList",
    name: `${PRODUCT_NAME} Key Facts`,
    itemListElement: facts.map(({ label, value }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "PropertyValue", name: label, value },
    })),
  };
}

export function serviceListNode() {
  return {
    "@type": "ItemList",
    name: `${PRODUCT_NAME} Discovery Services`,
    description: "Four AI-powered drug discovery pipelines from target identification through ranked candidate delivery.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Target Discovery and Disease Mapping",
          provider: { "@id": SCHEMA_IDS.organization },
          description:
            "Multi-omics dataset analysis, disease pathway modeling, protein target prioritization, and druggability scoring delivering a ranked list of validated biological targets.",
          offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 100000, priceCurrency: "USD" } },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Small Molecule Drug Discovery",
          provider: { "@id": SCHEMA_IDS.organization },
          description:
            "Graph neural network virtual screening and molecular docking to surface top 50 to 100 inhibitors against a disease target.",
          offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 150000, priceCurrency: "USD" } },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Gene Therapy and Sequence Design",
          provider: { "@id": SCHEMA_IDS.organization },
          description:
            "Codon optimization, off-target prediction, and manufacturability scoring for DNA and RNA therapeutic payloads.",
          offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 200000, priceCurrency: "USD" } },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Antibody and Protein Engineering",
          provider: { "@id": SCHEMA_IDS.organization },
          description:
            "Million-variant antibody libraries ranked by binding affinity, thermostability, and developability metrics.",
          offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 250000, priceCurrency: "USD" } },
        },
      },
    ],
  };
}

/* ── Full-page graph builders ─────────────────────────────── */

export function homeJsonLdGraph({
  faqs,
  definitions,
  keyFacts,
}: {
  faqs: Array<{ question: string; answer: string }>;
  definitions: Array<{ term: string; definition: string }>;
  keyFacts: Array<{ label: string; value: string }>;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: SCHEMA_IDS.homepage,
        name: SITE_META_TITLE,
        description: SITE_META_DESCRIPTION,
        url: `${SITE_ORIGIN}/`,
      }),
      faqPageNode(faqs),
      definedTermSetNode(definitions),
      keyFactsListNode(keyFacts),
      serviceListNode(),
    ],
  };
}

export function pageJsonLdGraph({
  id,
  name,
  description,
  url,
  breadcrumb,
  faqs,
}: {
  id: string;
  name: string;
  description: string;
  url: string;
  breadcrumb?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}): Record<string, unknown> {
  const nodes: unknown[] = [webPageNode({ id, name, description, url, breadcrumb })];
  if (faqs && faqs.length > 0) nodes.push(faqPageNode(faqs));
  return { "@context": "https://schema.org", "@graph": nodes };
}

/* ── Hreflang links ───────────────────────────────────────── */

export function hreflangAlternateLinks(canonical: string) {
  return [
    { rel: "alternate" as const, hrefLang: "en", href: canonical },
    { rel: "alternate" as const, hrefLang: "x-default", href: canonical },
  ];
}

/* ── pageSocialHead helper (mirrors Bajpai Labs seo-meta.ts) ── */

export type PageSocialMetaInput = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  keywords?: string;
  robots?: string;
};

export function pageSocialHead(input: PageSocialMetaInput) {
  const robots =
    input.robots ??
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const meta: Array<Record<string, string>> = [
    { title: input.title },
    { name: "description", content: input.description },
    { name: "robots", content: robots },
    ...(input.keywords ? [{ name: "keywords", content: input.keywords }] : []),
    { property: "og:type", content: input.ogType ?? "website" },
    { property: "og:url", content: input.canonical },
    { property: "og:image", content: OG_IMAGE_URL },
    { property: "og:image:secure_url", content: OG_IMAGE_URL },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: OG_IMAGE_ALT },
    { property: "og:title", content: input.ogTitle ?? input.title },
    { property: "og:description", content: input.ogDescription ?? input.description },
    { property: "og:site_name", content: PRODUCT_NAME },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:url", content: input.canonical },
    { name: "twitter:title", content: input.ogTitle ?? input.title },
    { name: "twitter:description", content: input.ogDescription ?? input.description },
    { name: "twitter:image", content: OG_IMAGE_URL },
    { name: "twitter:image:alt", content: OG_IMAGE_ALT },
  ];

  const links = [
    { rel: "canonical" as const, href: input.canonical },
    { rel: "image_src" as const, href: OG_IMAGE_URL },
    ...hreflangAlternateLinks(input.canonical),
  ];

  return { meta, links };
}
