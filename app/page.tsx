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

export default function Home() {
	return (
		<main className="w-full h-full flex flex-col  items-center justify-center bg-neutral-900">
			<Cards />
			<Parallax />
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
