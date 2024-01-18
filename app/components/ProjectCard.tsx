"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface ProjectCardProps {
	index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ index }) => {
	const projectCardRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: projectCardRef.current,
				start: "top bottom",
				end: "top top",
				scrub: true,
				markers: true,
				onToggle: (self) => {
					console.log(`index is${index}`, self.isActive);
				},
			},
		});

		tl.from(projectCardRef.current, {
			scale: 0.25,
			transformOrigin: "right top",
		})
			.to(projectCardRef.current, {
				scale: 1,
			})
			.to(projectCardRef.current, { scale: 0, transformOrigin: "left top" });
	}, []);
	return (
		<div
			ref={containerRef}
			className="flex flex-col w-full h-[100vh] gap-4"
			style={{
				position: "sticky",
				top: index === 0 ? "0px" : `${100 * index}px`,
			}}
		>
			<div className="flex border-b-2 text-white items-center px-4 h-[100px] border-white justify-between ">
				<h1 className="text-3xl">TITLE</h1>
				<h1 className="text-3xl">DESCRIPTION</h1>
			</div>
			<div
				ref={projectCardRef}
				className="h-full w-full bg-neutral-500 rounded-md"
			/>
		</div>
	);
};
