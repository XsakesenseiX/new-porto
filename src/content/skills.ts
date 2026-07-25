export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  { category: "Backend", items: ["PHP", "Laravel", "Node.js"] },
  { category: "Frontend", items: ["JavaScript", "TypeScript", "Next.js", "Vue.js", "Nuxt.js"] },
  { category: "Database", items: ["MySQL", "MariaDB"] },
  { category: "Cybersecurity", items: ["Network Security", "Secure Coding", "NIDS Research", "CTF"] },
  { category: "DevOps", items: ["CI/CD", "GitHub Actions", "Queue Systems", "Cron Scheduling"] },
  { category: "Cloud", items: ["Vercel", "Cloudflare"] },
  { category: "AI", items: ["Prompt Engineering"] },
  { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "PHP"] },
  { category: "Frameworks", items: ["Laravel", "Next.js", "Nuxt.js", "Astro"] },
  { category: "Tools", items: ["Visual Studio Code", "Linux", "Git"] },
];

export const engineeringPrinciples = [
  {
    title: "Security First",
    description:
      "Access control, input validation, and threat modeling are part of the initial design, not a hardening pass bolted on before launch.",
  },
  {
    title: "Readable Code",
    description:
      "Code is read far more than it's written. Naming, structure, and intent should make a system understandable to the next engineer without a walkthrough.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Systems are designed so growth in data, traffic, or team size doesn't force a rewrite — thin controllers, service boundaries, and caching strategies chosen deliberately.",
  },
  {
    title: "Automation",
    description:
      "CI gates, scheduled jobs, and deploy scripts replace manual steps wherever the manual step is a future source of human error.",
  },
  {
    title: "Performance",
    description:
      "Speed is treated as a feature — query discipline, caching, and asset optimization are considered at build time, not retrofitted after a slowdown is reported.",
  },
  {
    title: "Continuous Learning",
    description:
      "From CCNA certification to published NIDS research, staying current with both offense and defense in security is a continuous practice, not a credential to collect once.",
  },
] as const;
