export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  { year: "2022", title: "Computer Engineering", description: "Began Bachelor's in Computer Engineering at Universitas Amikom Yogyakarta, focused on Cybersecurity." },
  { year: "2024", title: "Cisco CCNA", description: "Completed CCNA 1–3, building a formal networking foundation underneath later security and infrastructure work." },
  { year: "2025", title: "University Programmer", description: "Built a WhatsApp chatbot from scratch for the Computer Engineering study program using whatsapp-web.js and Baileys." },
  { year: "2025", title: "Bodyfit Tengah Sawah", description: "Led full-stack development of a gym management system with custom auth and multi-level RBAC on Laravel." },
  { year: "2025", title: "Pawcket", description: "Built and deployed an SSR, SEO-optimized company profile site with Nuxt.js on Vercel." },
  { year: "2025", title: "IEEE Publication", description: "Published first-author research on prevention label enrichment for NIDS benchmark datasets at ICISIT 2025." },
  { year: "2026", title: "MazaDeco", description: "Full-stack development of a Laravel + Filament B2B furniture catalog with a phased, CI-gated delivery roadmap." },
  { year: "2026", title: "Penta Pelita Semesta", description: "Built a static Astro export site for an international natural-commodities exporter." },
];
