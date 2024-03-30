"use client";

import { useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import gsap from "gsap";
import { Timeline } from "./components/Timeline";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Testimonials } from "./components/Testimonials";
import { Navbar } from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="    bg-neutral-900">
      <Hero />
      <Intro />
      <About />
      <Features />
      <Timeline />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
