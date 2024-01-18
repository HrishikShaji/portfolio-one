"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const ProjectCard = () => {
	const projectCardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: projectCardRef.current,
				start: "top 90%",
				end: "top 40%",
				scrub: 1,
			},
		});

		tl.from(projectCardRef.current, { scale: 0 })
			.to(projectCardRef.current, {
				scale: 1,
				transformOrigin: "right bottom",
			})
			.to(projectCardRef.current, { scale: 0, transformOrigin: "left top" });
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
