import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import type { CaseStudy } from "@/types/project";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h4 className="text-sm font-medium tracking-wide text-accent-400">{title}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function CaseStudySection({ project }: { project: CaseStudy }) {
  return (
    <article id={`case-${project.slug}`} className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">{project.role} · {project.period}</p>
              <h3 className="mt-1 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {project.name}
              </h3>
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Visit site
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>

          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>

          {project.highlights.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {project.highlights.map((h) => (
                <div key={h.label}>
                  <p className="text-2xl font-medium text-foreground">{h.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
                </div>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <Block title="Problem">
            <p className="text-pretty text-foreground/90">{project.problem}</p>
          </Block>

          <Block title="Challenge">
            <ul className="space-y-2.5">
              {project.challenge.map((item, i) => (
                <li key={i} className="flex gap-3 text-pretty text-foreground/90">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Solution">
            <p className="text-pretty text-foreground/90">{project.solution}</p>
          </Block>

          <Block title="Architecture">
            <ul className="space-y-2.5">
              {project.architecture.map((item, i) => (
                <li key={i} className="flex gap-3 text-pretty text-foreground/90">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          {project.engineeringDecisions.length > 0 && (
            <Block title="Engineering Decisions">
              <div className="space-y-6">
                {project.engineeringDecisions.map((d, i) => (
                  <div key={i} className="glass rounded-xl p-5">
                    <p className="font-medium text-foreground">{d.decision}</p>
                    <p className="mt-2 text-sm text-pretty text-muted-foreground">{d.rationale}</p>
                  </div>
                ))}
              </div>
            </Block>
          )}

          <Block title="Outcome">
            <ul className="space-y-2.5">
              {project.outcome.map((item, i) => (
                <li key={i} className="flex gap-3 text-pretty text-foreground/90">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Lessons Learned">
            <ul className="space-y-2.5">
              {project.lessonsLearned.map((item, i) => (
                <li key={i} className="flex gap-3 text-pretty text-foreground/90">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        </Reveal>
      </div>
    </article>
  );
}
