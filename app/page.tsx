"use client";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Parallax } from "./components/Parallax";
import { ProjectCard } from "./components/ProjectCard";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
	return (
		<main className="w-full h-full flex flex-col  items-center justify-center bg-neutral-900">
			<Parallax />
			<ProjectCard />
			<Hero />
			<Intro />
			<About />
			<Projects />
			<Features />
			<Skills />
			<Contact />
		</main>
	);
}
