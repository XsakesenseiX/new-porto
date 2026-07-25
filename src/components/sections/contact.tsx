"use client";

import { Download, Mail } from "lucide-react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@XsakesenseiX",
    href: siteConfig.links.github,
    icon: FaGithub,
  },
  {
    label: "Instagram",
    value: "@baaalle",
    href: siteConfig.links.instagram,
    icon: FaInstagram,
  },
  {
    label: "Discord",
    value: siteConfig.links.discord,
    href: undefined,
    icon: FaDiscord,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="text-sm font-medium tracking-wide text-accent-400">Contact</span>
        <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Let&rsquo;s build something that has to work.
        </h2>
        <p className="mt-6 max-w-xl text-pretty text-muted-foreground">
          Open to full-time roles, freelance engagements, and conversations about
          secure systems. Reach out through whichever channel is easiest.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button size="lg" asChild>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </Button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Button size="lg" variant="outline" asChild>
              <a href={siteConfig.cvUrl} download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </Magnetic>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const content = (
            <div className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-accent-500/40">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{channel.label}</p>
                <p className="font-medium text-foreground">{channel.value}</p>
              </div>
            </div>
          );

          return channel.href ? (
            <a key={channel.label} href={channel.href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <div key={channel.label}>{content}</div>
          );
        })}
      </Reveal>
    </section>
  );
}
