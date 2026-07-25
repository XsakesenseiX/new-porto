import { Cpu, GitBranch, Lock, Rows3, ShieldCheck, Workflow } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const values = [
  {
    icon: Lock,
    title: "Security First",
    description: "Access control and input validation are part of the design, not a pre-launch checklist.",
  },
  {
    icon: Rows3,
    title: "Clean Architecture",
    description: "Thin controllers, service boundaries, and clear domains that stay legible as scope grows.",
  },
  {
    icon: GitBranch,
    title: "Clean Code",
    description: "Code is read more than it's written — naming and structure carry the intent.",
  },
  {
    icon: Workflow,
    title: "Scalability",
    description: "Systems designed so growth in data, traffic, or team size doesn't force a rewrite.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "CI gates, scheduled jobs, and applied prompt engineering replace manual, error-prone steps.",
  },
  {
    icon: ShieldCheck,
    title: "Problem Solving",
    description: "Root-cause debugging over quick patches — from cache-serialization bugs to template parsing collisions.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="text-sm font-medium tracking-wide text-accent-400">About</span>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          A Computer Engineering background focused on security, applied to production software.
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-muted-foreground">
          I&rsquo;m a Computer Engineering student at Universitas Amikom Yogyakarta with a study
          focus on cybersecurity, and a working track record shipping full-stack systems for
          real businesses — from a furniture exporter&rsquo;s B2B catalog to a gym&rsquo;s role-based
          admin panel. My research on intrusion-detection labeling and my client work share the
          same posture: understand the system&rsquo;s actual constraints before writing code, and
          treat security as a design input, not an afterthought.
        </p>
      </Reveal>

      <RevealGroup className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <RevealItem key={value.title}>
            <div className="glass group h-full rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-elevation-medium)]">
              <value.icon className="h-5 w-5 text-accent-400" />
              <h3 className="mt-4 font-medium text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
