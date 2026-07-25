import { BookOpen, Gauge, Layers, Lock, RefreshCw, Zap } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { engineeringPrinciples } from "@/content/skills";

const icons = [Lock, BookOpen, Layers, Zap, Gauge, RefreshCw];

export function Principles() {
  return (
    <section id="principles" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="text-sm font-medium tracking-wide text-accent-400">Engineering Principles</span>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          How I think about building software.
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {engineeringPrinciples.map((principle, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealItem key={principle.title}>
              <div className="h-full bg-background p-8">
                <Icon className="h-5 w-5 text-accent-400" />
                <h3 className="mt-4 font-medium text-foreground">{principle.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">{principle.description}</p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
