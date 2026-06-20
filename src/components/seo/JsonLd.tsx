type JsonLdProps = {
  data: Record<string, unknown>;
  id?: string;
};

/** Emits a JSON-LD script tag for rich results and AI/GEO crawlers. */
export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
