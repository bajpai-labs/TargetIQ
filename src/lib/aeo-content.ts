import { CONTACT_EMAIL, LEGAL_COMPANY_CIN, PRODUCT_NAME, SITE_ORIGIN } from "./site";

/* ── Types ────────────────────────────────────────────────── */

export type DefinitionItem = { term: string; definition: string };
export type KeyFact = { label: string; value: string };
export type FaqItem = { question: string; answer: string };

/* ── FAQs (machine-readable + FAQPage schema) ─────────────── */

export const TARGETIQ_FAQS: FaqItem[] = [
  {
    question: "What is TargetIQ?",
    answer: `${PRODUCT_NAME} is a disease target discovery engine by Bajpai Labs. It integrates multi-omics datasets, knowledge-graph neural networks, pathway modeling, and druggability scoring to deliver a ranked list of validated biological targets with full evidence dossiers—before any chemistry or screening begins.`,
  },
  {
    question: "How does TargetIQ prioritize disease targets?",
    answer: `${PRODUCT_NAME} ingests GWAS, transcriptomic, proteomic, and single-cell datasets alongside curated knowledge graphs linking genes, pathways, and phenotypes. Graph neural networks score disease relevance, genetic causality, and network centrality. Druggability, safety, and competitive landscape filters produce a portfolio-ready ranked target list in 2 to 4 weeks.`,
  },
  {
    question: "What is the cost of a TargetIQ target discovery engagement?",
    answer: `${PRODUCT_NAME} engagements typically range from $75,000 to $300,000 per program depending on indication complexity and data scope. Exploratory single-indication target ID starts at $75,000. Multi-omics franchise mapping ranges from $125,000 to $200,000. Resistance pathway or biomarker-stratified programs range from $175,000 to $300,000.`,
  },
  {
    question: "What deliverables does TargetIQ provide?",
    answer: `${PRODUCT_NAME} deliverables include a ranked priority target list (typically 8 to 15 targets) with full evidence dossiers per target; druggability and safety tier scores; competitive landscape briefs; pathway maps linking targets to disease biology; recommended validation experiments; and a portfolio gate presentation deck with decision framework.`,
  },
  {
    question: "What data does TargetIQ accept?",
    answer: `${PRODUCT_NAME} works with public multi-omics repositories (GEO, ArrayExpress, GWAS Catalog, Open Targets) and client proprietary cohorts under NDA. Accepted inputs include bulk and single-cell RNA-seq, proteomics, GWAS summary statistics, patient stratification labels, and prior internal target lists for reconciliation scoring.`,
  },
  {
    question: "How does TargetIQ assess druggability?",
    answer: `${PRODUCT_NAME} evaluates structural tractability (PDB coverage, AlphaFold model quality, binding pocket analysis), modality fit (small molecule, biologic, degrader), known ligand classes, and essential-gene safety profiles. Each target receives a composite druggability score calibrated against approved drug precedents and proprietary validation outcomes.`,
  },
  {
    question: "What is knowledge-graph target discovery?",
    answer: `Knowledge-graph target discovery uses curated biological networks—linking genes, proteins, pathways, diseases, and compounds—to score targets by network position and evidence propagation. ${PRODUCT_NAME} applies graph neural networks over these knowledge graphs to surface targets missed by single-source GWAS or expression analysis alone.`,
  },
  {
    question: "How accurate are TargetIQ target rankings?",
    answer: `Across closed engagements, 75 to 90 percent of ${PRODUCT_NAME} Priority A targets were supported by independent clinical or genetic evidence at portfolio review. Rankings are recalibrated against prior gate outcomes and wet-lab validation feedback, not public benchmark leaderboards alone.`,
  },
  {
    question: "Who operates TargetIQ?",
    answer: `${PRODUCT_NAME} is operated by Bajpai Labs (legal entity: Bajpai and Co. Research Private Limited, CIN: ${LEGAL_COMPANY_CIN}), a boutique AI and quantum consulting firm headquartered in Dubai, UAE with operations in Uttar Pradesh, India. Contact: ${CONTACT_EMAIL}.`,
  },
  {
    question: "When should I use TargetIQ versus downstream chemistry platforms?",
    answer: `Use ${PRODUCT_NAME} when you need a ranked, evidence-backed target list before committing to screening, medicinal chemistry, or biologics campaigns. TargetIQ answers "which target?"—downstream platforms like HelixForge answer "which molecule?" Once targets are gated, ${PRODUCT_NAME} dossiers feed directly into chemistry and biologics discovery pipelines.`,
  },
];

/* ── Definitions (DefinedTermSet schema) ──────────────────── */

export const HOME_DEFINITIONS: DefinitionItem[] = [
  {
    term: PRODUCT_NAME,
    definition: `${PRODUCT_NAME} is an AI-powered disease target discovery engine by Bajpai Labs that delivers ranked, druggable biological targets in 2 to 4 weeks using multi-omics integration, knowledge-graph GNNs, pathway analysis, and portfolio-ready evidence dossiers.`,
  },
  {
    term: "Target discovery",
    definition:
      "Target discovery is the first stage of drug development in which biological targets such as proteins, genes, or pathways are identified and validated as suitable for therapeutic intervention. TargetIQ integrates multi-omics data, genetic evidence, and druggability scoring to produce decision-ready ranked target lists.",
  },
  {
    term: "Druggability scoring",
    definition:
      "Druggability scoring evaluates whether a biological target can be modulated by a drug-like molecule or biologic. TargetIQ assesses structural tractability, modality fit, known ligand classes, and safety liabilities to assign a composite druggability score to each candidate target.",
  },
  {
    term: "Multi-omics integration",
    definition:
      "Multi-omics integration combines genomic, transcriptomic, proteomic, and epigenomic datasets to build a unified view of disease biology. TargetIQ cross-cohort meta-analysis and single-cell weighting surface targets with concordant evidence across data layers.",
  },
  {
    term: "Knowledge-graph GNN",
    definition:
      "A knowledge-graph graph neural network applies deep learning over curated biological networks linking genes, proteins, pathways, and phenotypes. TargetIQ uses GNNs to propagate disease signals through network topology and rank targets by integrated network evidence.",
  },
  {
    term: "Portfolio gate",
    definition:
      "A portfolio gate is a formal investment review where discovery leadership approves targets for budget allocation. TargetIQ delivers gate-ready dossiers, competitive landscape briefs, and decision frameworks aligned to typical pharma portfolio review cycles.",
  },
];

/* ── Key facts (ItemList schema) ──────────────────────────── */

export const HOME_KEY_FACTS: KeyFact[] = [
  { label: "Platform name", value: PRODUCT_NAME },
  { label: "Parent company", value: "Bajpai Labs (Bajpai & Co. Research Private Limited)" },
  { label: "Legal entity CIN", value: LEGAL_COMPANY_CIN },
  { label: "Contact", value: CONTACT_EMAIL },
  { label: "Headquarters", value: "Dubai, UAE and Uttar Pradesh, India" },
  { label: "Typical delivery timeline", value: "2 to 4 weeks from indication brief to ranked target dossiers" },
  { label: "Targets typically evaluated", value: "500 to 2,000 genes per engagement" },
  { label: "Priority targets delivered", value: "8 to 15 targets with full evidence dossiers" },
  { label: "Portfolio gate readiness", value: "Gate presentation deck and decision framework included" },
  { label: "Platform URL", value: SITE_ORIGIN },
  { label: "Core capabilities", value: "Multi-omics integration, knowledge-graph GNNs, druggability scoring, pathway mapping" },
  {
    label: "AI methods",
    value:
      "Graph neural networks, genetic colocalization, single-cell deconvolution, pathway enrichment, druggability modeling, competitive landscape analysis",
  },
];
