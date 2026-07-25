import { caseStudies } from "@/content/projects";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { CaseStudySection } from "@/components/sections/case-study";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="text-sm font-medium tracking-wide text-accent-400">Experience</span>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Case studies, not project cards.
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-muted-foreground">
          Every project below is a real engagement — the problem it solved, the
          architecture behind it, and the tradeoffs made along the way.
        </p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((project) => (
          <RevealItem key={project.slug}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-8">
        {caseStudies.map((project) => (
          <CaseStudySection key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
