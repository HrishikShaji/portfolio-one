"use client";

import { AboutMarquee } from "./components/AboutMarquee";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";

export default function Home() {
	return (
		<main className="w-full h-full flex flex-col items-center justify-center bg-neutral-900">
			<Hero />
			<Intro />
			<AboutMarquee />
		</main>
	);
}
