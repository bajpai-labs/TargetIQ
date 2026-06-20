import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyDetail } from "@/components/case-study-detail";
import { SiteLayout } from "@/components/site-layout";
import { getCaseStudyBySlug } from "@/lib/case-studies-content";
import { PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) {
      return pageSocialHead({
        title: `Case Study Not Found | ${PRODUCT_NAME}`,
        description: "The requested case study could not be found.",
        canonical: `${SITE_ORIGIN}/case-studies`,
      });
    }
    return pageSocialHead({
      title: `${study.title} | ${PRODUCT_NAME} Case Study`,
      description: study.subtitle,
      canonical: `${SITE_ORIGIN}/case-studies/${study.slug}`,
      ogTitle: `${study.title} | ${PRODUCT_NAME}`,
      ogDescription: study.subtitle,
    });
  },
  component: CaseStudyDetailPage,
});

function CaseStudyDetailPage() {
  const { slug } = Route.useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    throw notFound();
  }

  return (
    <SiteLayout>
      <CaseStudyDetail study={study} />
    </SiteLayout>
  );
}
