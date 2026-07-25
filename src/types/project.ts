export type ProjectStatus = "live" | "in-progress" | "archived";

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface EngineeringDecision {
  decision: string;
  rationale: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  role: string;
  period: string;
  status: ProjectStatus;
  url?: string;
  summary: string;
  cover?: string;
  technologies: string[];
  highlights: ProjectHighlight[];
  problem: string;
  challenge: string[];
  solution: string;
  architecture: string[];
  engineeringDecisions: EngineeringDecision[];
  outcome: string[];
  lessonsLearned: string[];
}
