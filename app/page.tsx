"use client";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
	return (
		<main className="    bg-neutral-900">
			<Hero />
			<Intro />
			<Features />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</main>
	);
}
