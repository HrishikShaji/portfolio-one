"use client";

import { useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { Timeline } from "./components/Timeline";

export default function Home() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	return (
		<main className="    bg-neutral-900">
			<Hero />
			<Intro />
			<Features />
			<About />
			<Timeline />
			<Projects />
			<Skills />
			<Contact />
		</main>
	);
}
