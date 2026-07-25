import { Award, Building2, FileText, Presentation, Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { research, researchTimeline } from "@/content/research";

const citation = `M. Iqbal, "Prevention Label Enrichment in a Network Intrusion Detection System Benchmark Dataset," 2025 2nd International Conference on Information System and Information Technology (ICISIT), 2025, doi: ${research.doi}.`;

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="text-sm font-medium tracking-wide text-accent-400">Research</span>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Published research in network security.
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-muted-foreground">
          Peer-reviewed work on making intrusion-detection datasets more useful for
          real defensive decisions, not just classification accuracy.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <div className="glass rounded-2xl p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-balance text-xl font-medium text-foreground md:text-2xl">
                {research.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {research.authorRole} · {research.presentationType}
              </p>
            </div>
          </div>

          <p className="mt-6 text-pretty text-muted-foreground">{research.abstract}</p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-4">
              <Building2 className="h-4 w-4 text-accent-400" />
              <p className="mt-2 text-sm font-medium text-foreground">Conference</p>
              <p className="mt-1 text-sm text-muted-foreground">{research.conference}</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <Award className="h-4 w-4 text-accent-400" />
              <p className="mt-2 text-sm font-medium text-foreground">Publication</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {research.publication} · DOI {research.doi}
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <Presentation className="h-4 w-4 text-accent-400" />
              <p className="mt-2 text-sm font-medium text-foreground">Presentation</p>
              <p className="mt-1 text-sm text-muted-foreground">{research.presentationType}</p>
            </div>
          </div>

          <a
            href={research.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
          >
            View on IEEE Xplore
            <span aria-hidden>→</span>
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-8">
        <div className="glass rounded-2xl p-8">
          <div className="flex items-center gap-3">
            <Quote className="h-4 w-4 text-accent-400" />
            <p className="text-sm font-medium text-foreground">Citation</p>
          </div>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap wrap-break-word rounded-lg bg-muted/40 p-4 font-mono text-xs text-muted-foreground">
            {citation}
          </pre>
        </div>
      </Reveal>

      <div className="mt-16">
        <span className="text-sm font-medium tracking-wide text-accent-400">Research Process</span>
        <RevealGroup className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchTimeline.map((item, i) => (
            <RevealItem key={item.step}>
              <div className="h-full rounded-xl border border-border p-5">
                <span className="font-mono text-xs text-accent-400">0{i + 1}</span>
                <p className="mt-2 font-medium text-foreground">{item.step}</p>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">{item.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
