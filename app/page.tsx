"use client";

import { About } from "./components/About";
import { AboutMarquee } from "./components/AboutMarquee";
import { Contact } from "./components/Contact";
import { ContactMarquee } from "./components/ContactMarquee";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { ProjectsMarquee } from "./components/ProjectsMarquee";
import { Skills } from "./components/Skills";
import { SkillsMarquee } from "./components/SkillsMarquee";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center bg-neutral-900">
      <Hero />
      <Intro />
      <AboutMarquee />
      <About />
      <ProjectsMarquee />
      <Projects />
      <Features />
      <SkillsMarquee />
      <Skills />
      <ContactMarquee />
      <Contact />
    </main>
  );
}
