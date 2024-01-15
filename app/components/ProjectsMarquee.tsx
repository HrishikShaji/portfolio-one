"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const ProjectsMarquee = () => {
	const slider = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: slider.current,
				scrub: 5,
				start: "top bottom",
				end: "top top",
			},
			x: "30%",
		});
	}, []);
	return (
		<div className="h-[300px] relative w-full overflow-hidden">
			<div
				ref={slider}
				className="w-full absolute -left-[25%] h-full text-white p-5 flex gap-2 "
			>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
				<h1 className="text-7xl font-semibold text-red-500 inline-block">
					MY PROJECTS
				</h1>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
				<h1 className="text-7xl font-semibold">MY PROJECTS</h1>
			</div>
		</div>
	);
};
