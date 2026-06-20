import {
  BRAND_LOGO_NAV_PATH,
  BRAND_LOGO_NAV_WEBP_PATH,
  BRAND_LOGO_PATH,
  BRAND_LOGO_WEBP_PATH,
  PRODUCT_NAME,
} from "@/lib/site";

type Props = {
  alt?: string;
  className?: string;
  size?: "nav" | "full";
  priority?: boolean;
};

export function BrandLogo({
  alt = PRODUCT_NAME,
  className,
  size = "nav",
  priority = false,
}: Props) {
  const imgProps = {
    alt,
    className,
    decoding: "async" as const,
    ...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const }),
  };

  if (size === "nav") {
    return (
      <picture>
        <source srcSet={BRAND_LOGO_NAV_WEBP_PATH} type="image/webp" />
        <img src={BRAND_LOGO_NAV_PATH} width={36} height={36} {...imgProps} />
      </picture>
    );
  }

  return (
    <picture>
      <source srcSet={BRAND_LOGO_WEBP_PATH} type="image/webp" />
      <img src={BRAND_LOGO_PATH} width={515} height={515} {...imgProps} />
    </picture>
  );
}
