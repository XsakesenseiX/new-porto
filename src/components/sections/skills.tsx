import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { skillCategories } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="text-sm font-medium tracking-wide text-accent-400">Skills</span>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          A working toolkit, organized by where it applies.
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group) => (
          <RevealItem key={group.category}>
            <div className="h-full rounded-2xl border border-border p-6">
              <h3 className="text-sm font-medium tracking-wide text-muted-foreground">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-sm text-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
