"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="bg-noise bg-grid relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[90vw] max-w-[900px] -translate-x-1/2 rounded-full opacity-[0.14] blur-[120px] sm:h-[560px]"
        style={{ background: "var(--accent-500)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border shadow-(--shadow-elevation-low)">
            <Image
              src="/profile.jpeg"
              alt="Muhammad Iqbal"
              fill
              sizes="56px"
              priority
              className="object-cover grayscale contrast-125 brightness-90"
            />
            <div
              aria-hidden
              className="absolute inset-0 mix-blend-overlay"
              style={{ background: "var(--accent-500)" }}
            />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
            </span>
            {siteConfig.status}
            <span className="text-border">•</span>
            <MapPin className="h-3 w-3" />
            {siteConfig.location}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          I build secure and{" "}
          <span className="bg-gradient-to-br from-accent-300 to-accent-500 bg-clip-text text-transparent">
            scalable software.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
        >
          Software Engineer and Cybersecurity Researcher. I design and ship
          production-grade full-stack systems — from Laravel platforms with
          layered RBAC to published intrusion-detection research.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Button size="lg" asChild className="group">
              <a href="#experience">
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-muted-foreground"
        >
          {siteConfig.headline.map((role) => (
            <span key={role} className="tracking-wide">
              {role}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
