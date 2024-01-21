"use client";

import { Cardo } from "next/font/google";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Parallax } from "./components/Parallax";
import { ProjectCard } from "./components/ProjectCard";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Cards } from "./components/Cards";
import { Sample } from "./components/Sample";
import { Spacer } from "./components/Spacer";

export default function Home() {
	return (
		<main className="    bg-neutral-900">
			<Hero />
			<Features />
			<Intro />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</main>
	);
}
