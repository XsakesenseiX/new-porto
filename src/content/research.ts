export const research = {
  title: "Prevention Label Enrichment in a Network Intrusion Detection System Benchmark Dataset",
  conference: "The 2nd International Conference on Information System and Information Technology (ICISIT 2025)",
  authorRole: "First Author",
  presentationType: "Online Presentation",
  doi: "10.1109/ICISIT66233.2025.11402953",
  doiUrl: "https://doi.org/10.1109/ICISIT66233.2025.11402953",
  publication: "IEEE Xplore",
  abstract:
    "Network Intrusion Detection System (NIDS) benchmark datasets are widely used to train and evaluate detection models, but most only label traffic as malicious or benign without indicating what a defender should do about it. This work proposes a prevention-label enrichment approach that augments an existing NIDS benchmark dataset with actionable prevention categories, enabling models trained on the enriched dataset to support response decisions rather than detection alone. The result is a benchmark resource intended to move NIDS research closer to operational, defense-oriented use.",
} as const;

export const researchTimeline = [
  { step: "Problem Identification", detail: "Identified that standard NIDS benchmark datasets label attacks but omit actionable prevention guidance for defenders." },
  { step: "Dataset Analysis", detail: "Audited an existing benchmark dataset's label taxonomy to determine where prevention categories could be enriched without breaking established evaluation conventions." },
  { step: "Label Enrichment", detail: "Designed and applied a prevention-labeling scheme on top of the existing malicious/benign classification." },
  { step: "Validation", detail: "Evaluated the enriched dataset to confirm the added labels remained consistent and usable for downstream model training." },
  { step: "Submission & Review", detail: "Submitted the paper to ICISIT 2025 as first author and completed the peer review and revision cycle." },
  { step: "Publication", detail: "Presented online at ICISIT 2025; published in IEEE Xplore under DOI 10.1109/ICISIT66233.2025.11402953." },
] as const;
