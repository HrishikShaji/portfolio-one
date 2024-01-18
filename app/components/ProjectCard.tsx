"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const ProjectCard = () => {
	const projectCardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			projectCardRef.current,
			{ scaleX: 0 },
			{
				scaleX: 1,
				scrollTrigger: {
					trigger: projectCardRef.current,
					start: "top 90%",
					end: "top 40%",
					scrub: 1,
					toggleActions: "play reverse none none",
				},
			},
		);
	}, []);
	return (
		<div className="flex flex-col w-full h-full gap-4">
			<div className="flex justify-between ">
				<h1 className="text-3xl">TITLE</h1>
				<h1 className="text-3xl">DESCRIPTION</h1>
			</div>
			<div
				ref={projectCardRef}
				className="h-[100vh] w-full bg-neutral-500 rounded-md"
			/>
		</div>
	);
};
