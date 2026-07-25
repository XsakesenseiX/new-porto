import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/types/project";

export function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <a
      href={`#case-${project.slug}`}
      className="glass group flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevation-medium)]"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-400" />
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{project.role} · {project.period}</p>
        <p className="mt-4 text-sm text-pretty text-muted-foreground">{project.summary}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech} variant="secondary" className="font-normal">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 4 && (
          <Badge variant="secondary" className="font-normal">
            +{project.technologies.length - 4}
          </Badge>
        )}
      </div>
    </a>
  );
}
