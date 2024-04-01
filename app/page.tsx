import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Testimonials } from "./components/Testimonials";
import data from "@/public/data.json";

export default function Home() {
  return (
    <main className="bg-neutral-900">
      <Hero />
      <Intro />
      <About />
      <Features data={data.features.data} />
      <Timeline
        educationData={data.education.data}
        experienceData={data.experience.data}
      />
      <Skills data={data.skills.data} />
      <Projects data={data.projects.data} />
      <Testimonials data={data.testimonials} />
      <Contact />
    </main>
  );
}
