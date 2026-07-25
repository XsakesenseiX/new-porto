import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { Principles } from "@/components/sections/principles";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Skills />
        <Principles />
        <Timeline />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
