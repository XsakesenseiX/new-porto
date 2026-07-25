"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { timeline } from "@/content/timeline";

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-4xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="text-sm font-medium tracking-wide text-accent-400">Timeline</span>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Four years, from coursework to production.
        </h2>
      </Reveal>

      <div className="relative mt-16">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500 via-border to-transparent"
        />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-500 bg-background" />
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-mono text-sm text-accent-400">{item.year}</span>
                <h3 className="font-medium text-foreground">{item.title}</h3>
              </div>
              <p className="mt-1.5 max-w-xl text-sm text-pretty text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
