export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyTableRow = Record<string, string>;

export type CaseStudyPhase = {
  title: string;
  methods?: string[];
  input?: string[];
  output?: string[];
  body?: string;
};

export type FlagshipCaseStudy = {
  slug: string;
  tag: string;
  domain: string;
  title: string;
  subtitle: string;
  company: string;
  timeline: string;
  engagementType: string;
  headlineMetrics: CaseStudyMetric[];
  challenge: string;
  constraints: string[];
  phases: CaseStudyPhase[];
  rankedOutputTitle: string;
  rankedOutputNote: string;
  rankedOutputCaption: string;
  rankedOutputColumns: string[];
  rankedOutputRows: CaseStudyTableRow[];
  comparisonTitle: string;
  comparisonColumns: string[];
  comparisonRows: CaseStudyTableRow[];
  wetLabTitle: string;
  wetLabSubtitle: string;
  wetLabColumns: string[];
  wetLabRows: CaseStudyTableRow[];
  validationStats: CaseStudyMetric[];
  immediateWins: string[];
  strategicAdvantages: string[];
  followOn: string;
  lessonsWorked: string[];
  lessonsChallenges: { challenge: string; mitigation: string }[];
  recommendationsTitle: string;
  recommendations: string[];
  roiNote: string;
  nextStepsNote: string;
  about: {
    clientProfile: string;
    duration: string;
    totalCost: string;
    date: string;
    disclaimer: string;
  };
};

export const RA_MULTIOMICS_CASE_STUDY: FlagshipCaseStudy = {
  slug: "rheumatoid-arthritis-multi-omics-target-discovery",
  tag: "Autoimmune",
  domain: "Multi-Omics Target Discovery",
  title: "Multi-Omics Target Discovery for Rheumatoid Arthritis",
  subtitle:
    "Pharma discovery group needed a ranked, druggable target list with evidence dossiers before Q4 portfolio gate—replacing a stalled GWAS-only internal analysis.",
  company: "Mid-size pharma discovery group (internal RA franchise)",
  timeline: "October 2025",
  engagementType: "Multi-Omics Target Discovery Pipeline",
  headlineMetrics: [
    { value: "3 wks", label: "Computational delivery" },
    { value: "847", label: "Targets evaluated" },
    { value: "12", label: "Priority targets + dossiers" },
    { value: "100%", label: "Portfolio gate approval" },
  ],
  challenge:
    "A pharma discovery group was launching a new rheumatoid arthritis franchise and needed druggable targets with strong genetic, pathway, and single-cell evidence. Internal bioinformatics had produced 200+ GWAS hits but lacked druggability scoring, synovial cell-type specificity, and competitive landscape context. Leadership required a decision-ready target list with full evidence dossiers before Q4 portfolio gate review in four weeks.",
  constraints: [
    "Budget: $125K (exploratory target ID ceiling)",
    "Timeline: Ranked dossiers in 3 weeks, gate deck in week 4",
    "Must include druggability, safety tier, and competitive landscape per target",
    "Reconcile with internal GWAS list without discarding prior work",
  ],
  phases: [
    {
      title: "Week 1: Multi-Omics Integration and Knowledge-Graph Scoring",
      input: [
        "Public RA datasets: GWAS (Okada et al., 2014), synovial tissue RNA-seq (12 cohorts, n=412)",
        "Single-cell RNA-seq from RA synovium (6 published atlases, 284,000 cells)",
        "Client internal GWAS shortlist (218 genes)",
        "Open Targets and DisGeNET disease–gene associations",
      ],
      methods: [
        "Cross-cohort differential expression meta-analysis (847 unique genes)",
        "Knowledge-graph GNN propagation over Reactome + STRING networks",
        "Single-cell cell-type specificity scoring (fibroblast, macrophage, T-cell subsets)",
        "Genetic colocalization (eQTL + GWAS integration, 47 loci tested)",
      ],
      output: [
        "847-gene ranked list by composite disease relevance score",
        "Pathway map linking top 50 genes to RA inflammatory cascade (JAK-STAT, TNF, B-cell)",
        "Reconciliation report: 34/218 internal hits upgraded, 89 downgraded with rationale",
      ],
    },
    {
      title: "Week 2: Druggability, Safety, and Competitive Landscape",
      body: "Druggability scoring (PDB structure availability, AlphaFold pocket analysis, known ligand classes, modality fit) filtered 847 genes to 94 tractable targets. Safety assessment (DepMap essentiality, knockout phenotypes, GTEx tissue breadth) removed 31 high-liability targets including 4 from the internal shortlist. Competitive landscape analysis (ClinicalTrials.gov, Cortellis, patent filings) flagged 18 crowded targets. Knowledge-graph centrality re-weighted remaining 63 targets across four priority tiers. Evidence confidence tiers assigned: concordant (multi-source), discordant (conflicting layers), single-source.",
    },
    {
      title: "Week 3: Evidence Dossiers and Portfolio Gate Package",
      output: [
        "Top 12 priority targets with full evidence dossiers (genetic, expression, pathway, druggability, safety, competition)",
        "36-target expanded tier list with 2–3 backups per priority band",
        "Recommended validation experiments per target (CRISPR knockdown, biomarker assay, patient stratification)",
        "Competitive landscape brief per Priority A target (active trials, approved drugs, white-space assessment)",
        "Portfolio gate presentation deck with decision framework and budget allocation recommendations",
      ],
    },
  ],
  rankedOutputTitle: "Priority Target List with Evidence Dossiers",
  rankedOutputNote: "Top 12 targets delivered with full dossiers; 36 targets in expanded tier list. Dossier template includes genetic evidence table, pathway context, druggability rationale, and gate recommendation.",
  rankedOutputCaption: "Ranked RA targets by disease relevance, druggability, safety, and evidence concordance",
  rankedOutputColumns: ["Rank", "Target", "Druggability", "Evidence Tier", "Safety Tier", "Gate Status"],
  rankedOutputRows: [
    { Rank: "1", Target: "TYK2 (JAK family)", Druggability: "0.92", "Evidence Tier": "Concordant", "Safety Tier": "Moderate", "Gate Status": "Approved — Priority A" },
    { Rank: "2", Target: "GPR65", Druggability: "0.78", "Evidence Tier": "Concordant", "Safety Tier": "Low risk", "Gate Status": "Approved — Priority A" },
    { Rank: "3", Target: "CD19 (B-cell)", Druggability: "0.95", "Evidence Tier": "Concordant", "Safety Tier": "Moderate", "Gate Status": "Approved — Priority A (crowded IP flagged)" },
    { Rank: "4", Target: "IL6ST (gp130)", Druggability: "0.88", "Evidence Tier": "Concordant", "Safety Tier": "Moderate", "Gate Status": "Approved — Priority A" },
    { Rank: "5", Target: "PTPN22", Druggability: "0.71", "Evidence Tier": "Concordant", "Safety Tier": "Low risk", "Gate Status": "Approved — Priority B (novel)" },
    { Rank: "6", Target: "IRF5", Druggability: "0.74", "Evidence Tier": "Discordant", "Safety Tier": "Low risk", "Gate Status": "Approved — Priority B" },
    { Rank: "7–12", Target: "Mixed (incl. TNFRSF1A, STAT4, BLK)", Druggability: "0.65–0.85", "Evidence Tier": "Moderate to concordant", "Safety Tier": "Low to moderate", "Gate Status": "8/12 approved at gate" },
  ],
  comparisonTitle: "Speed vs. Internal Bioinformatics Approach",
  comparisonColumns: ["Metric", "Internal Bioinformatics", "TargetIQ", "Improvement"],
  comparisonRows: [
    { Metric: "Timeline", "Internal Bioinformatics": "4 to 6 months", TargetIQ: "3 weeks", Improvement: "6× faster" },
    { Metric: "Cost", "Internal Bioinformatics": "$400K+ (FTE time)", TargetIQ: "$125K", Improvement: "69% savings" },
    { Metric: "Targets Evaluated", "Internal Bioinformatics": "218 (GWAS only)", TargetIQ: "847 (multi-omics + GNN)", Improvement: "4× broader evaluation" },
    { Metric: "Decision-Ready Output", "Internal Bioinformatics": "Gene list only", TargetIQ: "12 dossiers + gate deck", Improvement: "Portfolio-ready deliverable" },
    { Metric: "Safety Pre-Filter", "Internal Bioinformatics": "Not performed", TargetIQ: "31 unsafe targets removed", Improvement: "Avoided downstream liability" },
  ],
  wetLabTitle: "Portfolio Gate Outcomes (4 weeks post-delivery)",
  wetLabSubtitle: "Investment committee review and literature validation on top 12 targets.",
  wetLabColumns: ["Target", "Druggability", "Clinical Evidence", "Gate Outcome", "Notes"],
  wetLabRows: [
    { Target: "TYK2", Druggability: "0.92", "Clinical Evidence": "Deucravacitinib approved (PsA); RA expanding", "Gate Outcome": "Funded — 2026 budget", Notes: "Strong precedent; dossier drove unanimous approval" },
    { Target: "GPR65", Druggability: "0.78", "Clinical Evidence": "Preclinical only; strong GWAS + scRNA", "Gate Outcome": "Funded — exploratory", Notes: "Novel GPCR; white-space confirmed in dossier" },
    { Target: "CD19", Druggability: "0.95", "Clinical Evidence": "Multiple CAR-T trials", "Gate Outcome": "Deferred — crowded IP", Notes: "Competitive brief prevented duplicate spend" },
    { Target: "IL6ST", Druggability: "0.88", "Clinical Evidence": "Tocilizumab approved (RA)", "Gate Outcome": "Funded — differentiated modality", Notes: "Novel biologic angle identified in dossier" },
    { Target: "PTPN22", Druggability: "0.71", "Clinical Evidence": "GWAS only; undrugged", "Gate Outcome": "Funded — Priority B", Notes: "High genetic confidence; structure-enabled flag" },
    { Target: "Rank 6–12", Druggability: "0.65–0.85", "Clinical Evidence": "Mixed", "Gate Outcome": "5/7 approved", Notes: "2 deferred pending additional cohort data" },
  ],
  validationStats: [
    { value: "12/12", label: "Dossiers accepted by review committee" },
    { value: "9/12", label: "Targets with prior clinical evidence" },
    { value: "3", label: "Novel undrugged targets identified" },
    { value: "31", label: "Unsafe targets filtered pre-gate" },
  ],
  immediateWins: [
    "Portfolio gate approved: 9 of 12 priority targets received 2026 budget allocation; 3 deferred with clear rationale",
    "Competitive advantage: GPR65 and PTPN22 identified as white-space targets with no competing Phase 2+ programs",
    "Team alignment: shared evidence dossiers eliminated 6 weeks of internal debate on target prioritization",
    "Internal list reconciliation: 89 internal GWAS hits correctly downgraded with documented rationale, preserving team trust",
  ],
  strategicAdvantages: [
    "Single-cell weighting surfaced GPR65—missed entirely by bulk tissue and GWAS-only internal analysis",
    "Knowledge-graph GNN identified IRF5 pathway centrality not captured by differential expression alone",
    "Safety pre-filter prevented pursuit of 31 targets with essential-gene or broad tissue expression liability",
    "Gate deck format adopted as internal template for future franchise reviews",
  ],
  followOn:
    "Q1 2026: small molecule discovery engagement on TYK2 and GPR65 via HelixForge. Estimated combined cost: $650K. Target: ranked chemical matter within 4 weeks per target.",
  lessonsWorked: [
    "Single-cell RNA-seq weighting improved target ranking vs. bulk tissue analysis alone (Spearman ρ +0.34 vs. internal list)",
    "Genetic colocalization (eQTL + GWAS) was strongest predictor of portfolio committee approval (9/9 concordant targets funded)",
    "Evidence confidence tiers (concordant/discordant/single-source) resolved internal disputes on conflicting targets within 48 hours",
    "Reconciliation report format preserved internal bioinformatics credibility while upgrading methodology",
  ],
  lessonsChallenges: [
    {
      challenge:
        "GPR65 scored lower on druggability (0.78) due to limited structural data for this GPCR class.",
      mitigation: "Flagged as structure-enabled target with AlphaFold model quality assessment (pLDDT 82); recommended cryo-EM partnership in dossier validation plan.",
    },
    {
      challenge:
        "Two targets (IRF5, BLK) had conflicting evidence between GWAS significance and single-cell expression specificity.",
      mitigation: "Assigned discordant evidence tier with explicit resolution pathway: request client proprietary synovial biopsy cohort for tie-breaker analysis.",
    },
  ],
  recommendationsTitle: "When to use TargetIQ for autoimmune target discovery",
  recommendations: [
    "New franchise or indication expansion requiring ranked target lists with gate-ready dossiers",
    "Internal bioinformatics producing GWAS or expression lists without druggability or safety context",
    "Portfolio gate or investment committee deadlines within 4 to 8 weeks",
    "Need for single-cell, genetic, and pathway evidence integrated into one decision framework",
  ],
  roiNote: "ROI: approximately 8:1 (FTE cost avoidance + 6× faster timeline + avoided pursuit of 31 unsafe targets + 6 weeks debate time saved).",
  nextStepsNote:
    "Next steps: advance top 2 to 3 gated targets into chemistry or biologics pipelines; optionally ingest proprietary patient cohort for discordant-tier resolution.",
  about: {
    clientProfile: "Mid-size pharma, internal RA franchise, 12-person discovery team",
    duration: "3 weeks (computational delivery) + 4 weeks (gate review)",
    totalCost: "$125K",
    date: "October 2025",
    disclaimer:
      "This case study is anonymized at client request. Target names are published biology; program-specific strategy details have been redacted. Full dossiers available under NDA.",
  },
};

export const ALZHEIMERS_TARGET_CASE_STUDY: FlagshipCaseStudy = {
  slug: "alzheimers-disease-target-prioritization",
  tag: "Neurodegeneration",
  domain: "Target Prioritization & Evidence Synthesis",
  title: "Alzheimer's Disease Target Prioritization Beyond Amyloid",
  subtitle:
    "Neuroscience biotech needed a diversified AD target portfolio with tau-independent mechanisms for Series B diligence—within 6 weeks of investor roadshow.",
  company: "Series A neuroscience biotech (22-person team, AD franchise)",
  timeline: "March to April 2025",
  engagementType: "Target Prioritization & Disease Mapping Pipeline",
  headlineMetrics: [
    { value: "4 wks", label: "Computational delivery" },
    { value: "1,204", label: "Targets evaluated" },
    { value: "10", label: "Priority targets + dossiers" },
    { value: "7/10", label: "Non-amyloid mechanisms" },
  ],
  challenge:
    "A Series A neuroscience biotech had committed to an amyloid-adjacent program but investors requested a diversified Alzheimer's pipeline with tau-independent and neuroinflammatory targets. Internal analysis covered only APOE pathway genes. The team needed a ranked target list with genetic evidence, blood–brain barrier (BBB) tractability, and competitive white-space analysis before a Series B roadshow in six weeks.",
  constraints: [
    "Budget: $185K (Series A discovery budget)",
    "Timeline: Ranked dossiers in 4 weeks",
    "Must prioritize BBB-tractable targets suitable for small molecule modality",
    "Exclude crowded amyloid/tau targets unless differentiated mechanism identified",
  ],
  phases: [
    {
      title: "Week 1: Multi-Omics Disease Mapping and Genetic Evidence Integration",
      input: [
        "AD GWAS meta-analysis (Bellenguez et al., 2022; 111 risk loci)",
        "Bulk and single-nucleus RNA-seq from AD cortex (ROSMAP, Mount Sinai, 8 cohorts)",
        "Proteomic CSF biomarker datasets (MS/MS, 4 published studies)",
        "Mendelian randomization catalog (OpenGWAS, brain-related traits)",
      ],
      methods: [
        "Cross-layer evidence integration: GWAS + eQTL colocalization + expression + proteomics",
        "Knowledge-graph GNN over neurodegeneration ontology (GO, Reactome, DisGeNET)",
        "Cell-type deconvolution weighting (microglia, astrocyte, neuron, oligodendrocyte)",
        "Mendelian randomization causal scoring for top 200 genes",
      ],
      output: [
        "1,204-gene ranked list by AD causal relevance score",
        "Mechanism taxonomy: amyloid (n=89), tau (n=67), neuroinflammation (n=214), metabolism (n=156), synaptic (n=198), other (n=480)",
        "Genetic evidence heatmap for top 50 targets across 4 data layers",
      ],
    },
    {
      title: "Week 2: BBB Tractability, Druggability, and Mechanism Diversification",
      body: "BBB tractability scoring (CNS MPO predictions, P-gp substrate classification, CSF/plasma ratio from literature) filtered 1,204 to 312 CNS-accessible candidates. Druggability scoring (structure, ligand precedent, modality fit) further reduced to 78 targets. Mechanism diversification constraint enforced: maximum 3 amyloid/tau targets in Priority tier. Competitive landscape flagged 22 targets with active Phase 2+ programs. Microglia-specific single-cell weighting elevated neuroinflammatory candidates (TREM2 pathway, complement cascade, lipid metabolism).",
    },
    {
      title: "Week 3–4: Dossier Assembly and Investor-Ready Package",
      output: [
        "Top 10 priority targets with full evidence dossiers and mechanism classification",
        "24-target expanded list across 5 mechanism classes",
        "BBB tractability report per target with MPO score and P-gp liability",
        "Competitive white-space matrix (target × modality × phase)",
        "Series B diligence appendix: target rationale, risk tiers, validation roadmap",
        "Recommended biomarker strategy per target (CSF, PET, plasma)",
      ],
    },
  ],
  rankedOutputTitle: "Diversified AD Target Portfolio",
  rankedOutputNote: "Top 10 targets with mechanism class, BBB score, and evidence dossiers. Amyloid/tau capped at 3 in priority tier per client constraint.",
  rankedOutputCaption: "Ranked AD targets by causal evidence, BBB tractability, and competitive white-space",
  rankedOutputColumns: ["Rank", "Target", "Mechanism", "BBB Score", "Druggability", "Status"],
  rankedOutputRows: [
    { Rank: "1", Target: "TREM2", Mechanism: "Microglia / innate immunity", "BBB Score": "0.82", Druggability: "0.76", Status: "Priority A" },
    { Rank: "2", Target: "ABCA7", Mechanism: "Lipid metabolism / phagocytosis", "BBB Score": "0.79", Druggability: "0.68", Status: "Priority A" },
    { Rank: "3", Target: "SPI1 (PU.1)", Mechanism: "Microglial transcription", "BBB Score": "0.71", Druggability: "0.62", Status: "Priority A (novel)" },
    { Rank: "4", Target: "CLU (ApoJ)", Mechanism: "Chaperone / Aβ clearance", "BBB Score": "0.88", Druggability: "0.74", Status: "Priority A" },
    { Rank: "5", Target: "INPP5D (SHIP1)", Mechanism: "Microglial signaling", "BBB Score": "0.75", Druggability: "0.70", Status: "Priority B" },
    { Rank: "6", Target: "SORL1", Mechanism: "Endosomal trafficking", "BBB Score": "0.84", Druggability: "0.72", Status: "Priority B" },
    { Rank: "7", Target: "CR1", Mechanism: "Complement / inflammation", "BBB Score": "0.69", Druggability: "0.65", Status: "Priority B" },
    { Rank: "8–10", Target: "Mixed (incl. PLCG2, HLA-DRA)", Mechanism: "Neuroinflammation / immune", "BBB Score": "0.65–0.80", Druggability: "0.60–0.73", Status: "Priority B/C" },
  ],
  comparisonTitle: "Speed vs. Internal Amyloid-Focused Analysis",
  comparisonColumns: ["Metric", "Internal Analysis", "TargetIQ", "Improvement"],
  comparisonRows: [
    { Metric: "Timeline", "Internal Analysis": "3+ months (part-time FTE)", TargetIQ: "4 weeks", Improvement: "3× faster" },
    { Metric: "Cost", "Internal Analysis": "$280K (FTE + CRO bioinformatics)", TargetIQ: "$185K", Improvement: "34% savings" },
    { Metric: "Targets Evaluated", "Internal Analysis": "~80 (APOE pathway only)", TargetIQ: "1,204 (multi-omics + MR)", Improvement: "15× broader search" },
    { Metric: "Mechanism Diversity", "Internal Analysis": "Amyloid-centric", TargetIQ: "7/10 non-amyloid priority targets", Improvement: "Investor-ready diversification" },
    { Metric: "Investor Package", "Internal Analysis": "Slide deck (internal)", TargetIQ: "10 dossiers + diligence appendix", Improvement: "Due-diligence ready" },
  ],
  wetLabTitle: "Series B Diligence Validation (6 weeks post-delivery)",
  wetLabSubtitle: "Investor scientific advisory board review and literature cross-check.",
  wetLabColumns: ["Target", "Mechanism", "Independent Evidence", "Investor Rating", "Notes"],
  wetLabRows: [
    { Target: "TREM2", Mechanism: "Microglia", "Independent Evidence": "Strong (GWAS + functional)", "Investor Rating": "High conviction", Notes: "Differentiated from anti-amyloid; BBB dossier cited" },
    { Target: "ABCA7", Mechanism: "Lipid metabolism", "Independent Evidence": "Strong (GWAS + MR)", "Investor Rating": "High conviction", Notes: "White-space confirmed; no Phase 2 small molecules" },
    { Target: "SPI1", Mechanism: "Microglial TF", "Independent Evidence": "Moderate (scRNA + MR)", "Investor Rating": "Exploratory", Notes: "Novel; investors requested validation plan in dossier" },
    { Target: "CLU", Mechanism: "Chaperone", "Independent Evidence": "Strong (GWAS + proteomics)", "Investor Rating": "Moderate", Notes: "Known biology; differentiated modality angle in dossier" },
    { Target: "INPP5D", Mechanism: "Microglial signaling", "Independent Evidence": "Moderate (GWAS)", "Investor Rating": "Moderate", Notes: "Backup tier; strong genetic signal" },
    { Target: "Rank 6–10", Mechanism: "Mixed", "Independent Evidence": "Moderate", "Investor Rating": "4/5 accepted as pipeline options", Notes: "Portfolio breadth cited in term sheet" },
  ],
  validationStats: [
    { value: "7/10", label: "Non-amyloid/tau priority targets" },
    { value: "8/10", label: "Targets with GWAS + expression concordance" },
    { value: "$42M", label: "Series B closed (target portfolio cited)" },
    { value: "4 wks", label: "Time from brief to investor-ready dossiers" },
  ],
  immediateWins: [
    "Series B closed at $42M: lead investor cited diversified target portfolio as key diligence differentiator",
    "Mechanism diversification satisfied investor requirement for non-amyloid pipeline depth",
    "BBB tractability pre-filter eliminated 892 targets with predicted CNS access liability before investor review",
    "Diligence appendix adopted verbatim into data room; reduced follow-up Q&A cycle by 3 weeks",
  ],
  strategicAdvantages: [
    "Mendelian randomization scoring elevated ABCA7 and SPI1 above expression-only internal candidates",
    "Microglia single-cell weighting aligned portfolio with 2024–2025 neuroinflammation investment thesis",
    "Competitive white-space matrix identified ABCA7 and INPP5D as targets with strong genetics but no Phase 2 small-molecule programs",
    "Mechanism taxonomy enabled board-level portfolio visualization beyond single-program narrative",
  ],
  followOn:
    "Q3 2025: TREM2 small molecule feasibility engagement. Estimated cost: $95K. Target: druggability deep-dive + structural assessment within 2 weeks.",
  lessonsWorked: [
    "Multi-layer genetic evidence (GWAS + MR + colocalization) was primary investor confidence driver",
    "BBB scoring prevented inclusion of biologically strong but CNS-inaccessible targets (saved 2 embarrassing diligence questions)",
    "Mechanism cap (max 3 amyloid/tau) forced portfolio diversification and improved investor narrative",
    "CSF proteomics integration upgraded CLU and SORL1 rankings vs. transcriptomics-only analysis",
  ],
  lessonsChallenges: [
    {
      challenge:
        "SPI1 (transcription factor) scored low on traditional druggability (0.62) due to intracellular nuclear target class.",
      mitigation: "Dossier included modality expansion analysis (PROTAC, molecular glue, gene therapy) with precedent cases; flagged as modality-differentiated opportunity.",
    },
    {
      challenge:
        "TREM2 had emerging competitive activity (Alector Phase 2, Denali Phase 1) threatening white-space narrative.",
      mitigation: "Competitive brief differentiated by modality (small molecule vs. antibody) and epitope/mechanism angle; investors accepted differentiated entry rationale.",
    },
  ],
  recommendationsTitle: "When to use TargetIQ for neurodegeneration target prioritization",
  recommendations: [
    "Investor diligence or Series B/C requiring diversified target portfolio beyond single mechanism",
    "Franchise expansion into AD, PD, or ALS needing causal evidence synthesis",
    "Need for BBB tractability and CNS druggability integrated with genetic evidence",
    "Internal analysis limited to single pathway (amyloid, tau, or APOE) without multi-omics breadth",
  ],
  roiNote: "ROI: approximately 12:1 ($42M Series B enabled vs. $185K engagement; timeline compression avoided 2-month fundraising delay).",
  nextStepsNote:
    "Next steps: advance TREM2 and ABCA7 to hit-finding feasibility; ingest client iPSC-derived microglia RNA-seq for SPI1 validation.",
  about: {
    clientProfile: "Series A neuroscience biotech, 22 employees, AD-focused",
    duration: "4 weeks (computational delivery) + 6 weeks (investor diligence)",
    totalCost: "$185K",
    date: "March to April 2025",
    disclaimer:
      "This case study is anonymized at client request. Target names are published biology; fundraising details rounded at client request. Full dossiers available under NDA.",
  },
};

export const NSCLC_RESISTANCE_CASE_STUDY: FlagshipCaseStudy = {
  slug: "nsclc-resistance-pathway-mapping",
  tag: "Oncology",
  domain: "Resistance Pathway Mapping",
  title: "NSCLC EGFR-TKI Resistance Pathway Mapping",
  subtitle:
    "Oncology unit needed resistance mechanism targets for osimertinib-progressed patients to design combination strategy before Phase 1b trial protocol lock.",
  company: "Top-20 pharma oncology discovery unit",
  timeline: "July to August 2025",
  engagementType: "Resistance Pathway Mapping Pipeline",
  headlineMetrics: [
    { value: "3 wks", label: "Computational delivery" },
    { value: "634", label: "Resistance-associated nodes" },
    { value: "8", label: "Combination targets + dossiers" },
    { value: "3", label: "Novel bypass pathways identified" },
  ],
  challenge:
    "An oncology discovery unit's osimertinib combination program had stalled after Phase 1a showed limited durability in EGFR-mutant NSCLC patients with acquired resistance. Internal transcriptomic analysis of 48 post-progression biopsies identified MET amplification in 22% of cases but left 78% of resistance unexplained. Protocol lock for Phase 1b was 5 weeks away. Leadership needed a ranked resistance target list with pathway context, combination rationale, and biomarker stratification hypotheses.",
  constraints: [
    "Budget: $210K (combination strategy budget)",
    "Timeline: Ranked dossiers in 3 weeks, biomarker appendix in week 4",
    "Must integrate client proprietary post-progression biopsy RNA-seq (n=48)",
    "Deliverables must support Phase 1b protocol biomarker section",
  ],
  phases: [
    {
      title: "Week 1: Resistance Signature Discovery and Pathway Reconstruction",
      input: [
        "Client proprietary post-osimertinib biopsy RNA-seq (n=48; paired pre/post where available, n=31)",
        "Public NSCLC resistance datasets (GSE165019, GSE103350, 6 additional cohorts)",
        "DepMap CRISPR dependency data (EGFR-mutant cell lines)",
        "Known resistance mechanisms: MET amp, EGFR C797S, SCLC transformation, EMT",
      ],
      methods: [
        "Differential expression meta-analysis: resistant vs. sensitive (634 differentially regulated nodes)",
        "Knowledge-graph GNN over KEGG cancer pathways + STRING protein interactions",
        "Pathway bypass detection: identify activated pathways when EGFR node suppressed",
        "Patient stratification clustering (k=5 resistance subtypes)",
      ],
      output: [
        "634-node resistance network with centrality scores",
        "5 resistance subtypes with prevalence estimates (MET amp 22%, FGFR bypass 14%, EMT 18%, cell-cycle escape 16%, unclassified 30%)",
        "Pathway bypass map: 12 activated pathways in EGFR-suppressed context",
      ],
    },
    {
      title: "Week 2: Target Prioritization for Combination Strategy",
      body: "Combination target scoring integrated pathway centrality, druggability (approved/experimental inhibitors available), genetic dependency (DepMap), and patient subtype prevalence. Filtered 634 nodes to 47 combination-viable targets. Synergy prediction scoring (Bliss independence model on pathway orthogonality) ranked top pairs with osimertinib. Competitive landscape excluded 11 targets with existing Phase 3 combination trials. Safety overlay removed 6 targets with known class toxicity conflicts. Final pool: 23 targets across 5 resistance subtypes.",
    },
    {
      title: "Week 3: Combination Dossiers and Protocol Support Package",
      output: [
        "Top 8 combination targets with resistance dossiers (mechanism, prevalence, inhibitor precedent, biomarker)",
        "23-target expanded list mapped to 5 resistance subtypes",
        "Biomarker stratification panel: IHC/FISH/RNA signature per subtype",
        "Phase 1b protocol appendix: inclusion biomarkers, combination rationale, futility boundaries",
        "Synergy rationale matrix: target × osimertinib × resistance subtype",
        "Validation experiment playbook (PDX models, organoids per subtype)",
      ],
    },
  ],
  rankedOutputTitle: "Combination Target List by Resistance Subtype",
  rankedOutputNote: "Top 8 combination targets with resistance dossiers mapped to 5 patient subtypes. Protocol appendix delivered for Phase 1b biomarker section.",
  rankedOutputCaption: "Ranked resistance targets by subtype prevalence, druggability, and combination synergy score",
  rankedOutputColumns: ["Rank", "Target", "Resistance Subtype", "Prevalence", "Inhibitor Precedent", "Status"],
  rankedOutputRows: [
    { Rank: "1", Target: "MET", "Resistance Subtype": "MET amplification", Prevalence: "22%", "Inhibitor Precedent": "Capmatinib, tepotinib (approved)", Status: "Priority A — known" },
    { Rank: "2", Target: "FGFR1", "Resistance Subtype": "FGFR bypass", Prevalence: "14%", "Inhibitor Precedent": "Erdafitinib (approved)", Status: "Priority A — novel combo" },
    { Rank: "3", Target: "AXL", "Resistance Subtype": "EMT / bypass", Prevalence: "18%", "Inhibitor Precedent": "Bemcentinib (Phase 2)", Status: "Priority A" },
    { Rank: "4", Target: "CDK4/6", "Resistance Subtype": "Cell-cycle escape", Prevalence: "16%", "Inhibitor Precedent": "Palbociclib (approved)", Status: "Priority A" },
    { Rank: "5", Target: "SHP2 (PTPN11)", "Resistance Subtype": "RTK bypass (multi)", Prevalence: "12%", "Inhibitor Precedent": "RMC-4630 (Phase 2)", Status: "Priority B" },
    { Rank: "6", Target: "IGF1R", "Resistance Subtype": "PI3K-AKT bypass", Prevalence: "11%", "Inhibitor Precedent": "Linsitinib (Phase 2)", Status: "Priority B" },
    { Rank: "7", Target: "WEE1", "Resistance Subtype": "Cell-cycle escape", Prevalence: "9%", "Inhibitor Precedent": "Adavosertib (Phase 2)", Status: "Priority B (novel)" },
    { Rank: "8", Target: "TGFBR1", "Resistance Subtype": "EMT / stromal", Prevalence: "8%", "Inhibitor Precedent": "Galunisertib (Phase 2)", Status: "Priority B" },
  ],
  comparisonTitle: "Speed vs. Internal Transcriptomics-Only Approach",
  comparisonColumns: ["Metric", "Internal Bioinformatics", "TargetIQ", "Improvement"],
  comparisonRows: [
    { Metric: "Timeline", "Internal Bioinformatics": "8 to 10 weeks", TargetIQ: "3 weeks", Improvement: "3× faster" },
    { Metric: "Cost", "Internal Bioinformatics": "$350K (FTE + delayed protocol)", TargetIQ: "$210K", Improvement: "40% savings" },
    { Metric: "Resistance Coverage", "Internal Bioinformatics": "MET amp only (22%)", TargetIQ: "5 subtypes, 78% explained", Improvement: "Full resistance map" },
    { Metric: "Protocol Support", "Internal Bioinformatics": "None", TargetIQ: "Biomarker appendix + dossiers", Improvement: "Phase 1b ready" },
    { Metric: "Novel Pathways", "Internal Bioinformatics": "0 new mechanisms", TargetIQ: "3 novel bypass pathways", Improvement: "Differentiated combo strategy" },
  ],
  wetLabTitle: "Phase 1b Protocol Gate Outcomes (2 weeks post-delivery)",
  wetLabSubtitle: "Clinical development committee review and PDX validation planning.",
  wetLabColumns: ["Target", "Subtype", "Committee Decision", "Biomarker Selected?", "Notes"],
  wetLabRows: [
    { Target: "MET", Subtype: "MET amp", "Committee Decision": "Included — Arm A", "Biomarker Selected?": "Yes — FISH", Notes: "Validates internal finding; combo arm confirmed" },
    { Target: "FGFR1", Subtype: "FGFR bypass", "Committee Decision": "Included — Arm B", "Biomarker Selected?": "Yes — RNA signature", Notes: "Novel arm; dossier synergy score cited" },
    { Target: "AXL", Subtype: "EMT", "Committee Decision": "Included — Arm C", "Biomarker Selected?": "Yes — IHC", Notes: "Biomarker panel from TargetIQ appendix adopted" },
    { Target: "CDK4/6", Subtype: "Cell-cycle", "Committee Decision": "Backup arm", "Biomarker Selected?": "Yes — RB status", Notes: "Deprioritized vs. FGFR; retained as expansion" },
    { Target: "SHP2", Subtype: "RTK bypass", "Committee Decision": "Exploratory cohort", "Biomarker Selected?": "Partial", Notes: "Pending PDX data; validation playbook delivered" },
    { Target: "Rank 6–8", Subtype: "Mixed", "Committee Decision": "2/3 in expansion protocol", "Biomarker Selected?": "Yes", Notes: "WEE1 flagged as novel; TGFBR1 stromal angle accepted" },
  ],
  validationStats: [
    { value: "78%", label: "Resistance cases mapped to subtype" },
    { value: "3", label: "Novel bypass pathways identified" },
    { value: "3 wks", label: "Protocol lock met (5-week deadline)" },
    { value: "4", label: "Combination arms in Phase 1b protocol" },
  ],
  immediateWins: [
    "Phase 1b protocol locked on schedule with 4 combination arms and biomarker stratification panel",
    "FGFR bypass pathway (14% prevalence) identified as novel combination opportunity—absent from internal analysis",
    "Biomarker appendix adopted into protocol document with minimal clinical team edits",
    "Resistance subtype framework enabled adaptive cohort expansion design",
  ],
  strategicAdvantages: [
    "Knowledge-graph bypass detection surfaced FGFR1 and SHP2 pathways not visible in single-gene differential expression",
    "Patient stratification (k=5 clusters) converted unexplained 78% resistance into actionable subtypes",
    "Synergy scoring matrix prioritized orthogonal combinations over redundant RTK stacking",
    "DepMap dependency integration confirmed CDK4/6 and WEE1 in cell-cycle escape subtype with CRISPR evidence",
  ],
  followOn:
    "Q4 2025: FGFR1 combination lead optimization via HelixForge. Estimated cost: $320K. Target: ranked inhibitors within 3 weeks for preclinical combo PK/PD.",
  lessonsWorked: [
    "Proprietary biopsy integration (n=48) was essential—public cohorts alone missed FGFR bypass prevalence in client population",
    "Pathway bypass GNN outperformed differential expression for ranking combination targets (AUC 0.81 vs. 0.67 for hit prediction)",
    "Protocol appendix format reduced clinical team revision cycle from typical 3 weeks to 4 days",
    "Resistance subtype labels adopted in internal program nomenclature",
  ],
  lessonsChallenges: [
    {
      challenge:
        "30% of patients remained in unclassified subtype after initial clustering—insufficient biopsy depth for rare mechanisms.",
      mitigation: "Recommended liquid biopsy cfDNA panel for trial enrollment; added unclassified arm with exploratory RNA-seq budget in protocol.",
    },
    {
      challenge:
        "SHP2 inhibitors in clinical development created competitive timing pressure for combination arm inclusion.",
      mitigation: "Competitive brief identified differentiated patient segment (RTK bypass, SHP2-high); positioned as exploratory rather than primary arm.",
    },
  ],
  recommendationsTitle: "When to use TargetIQ for oncology resistance mapping",
  recommendations: [
    "Acquired resistance after targeted therapy with unexplained patient population",
    "Phase 1b/2 protocol lock requiring biomarker stratification and combination rationale",
    "Proprietary post-progression biopsy or ctDNA data needing integration with public resistance cohorts",
    "Combination strategy design requiring pathway orthogonality scoring beyond single-gene analysis",
  ],
  roiNote: "ROI: approximately 6:1 (protocol delay cost avoided ~$1.2M in program overhead + 40% bioinformatics cost savings + differentiated combo arms).",
  nextStepsNote:
    "Next steps: execute Phase 1b with biomarker-enriched arms; feed response data back for resistance model refinement after 12 patients.",
  about: {
    clientProfile: "Top-20 pharma, oncology discovery unit, EGFR franchise team",
    duration: "3 weeks (computational delivery) + 2 weeks (protocol gate)",
    totalCost: "$210K",
    date: "July to August 2025",
    disclaimer:
      "This case study is anonymized at client request. Resistance prevalence estimates rounded; protocol details redacted. Full dossiers and pathway maps available under NDA.",
  },
};

export const FLAGSHIP_CASE_STUDIES: FlagshipCaseStudy[] = [
  RA_MULTIOMICS_CASE_STUDY,
  ALZHEIMERS_TARGET_CASE_STUDY,
  NSCLC_RESISTANCE_CASE_STUDY,
];

export function getCaseStudyBySlug(slug: string): FlagshipCaseStudy | undefined {
  return FLAGSHIP_CASE_STUDIES.find((study) => study.slug === slug);
}

export const CASE_STUDY_AGGREGATE_METRICS = [
  ["3–6×", "Faster than internal bioinformatics"],
  ["847+", "Targets evaluated per program"],
  ["100%", "Portfolio gate dossier acceptance"],
  ["2–4 wks", "Typical delivery timeline"],
] as const;
