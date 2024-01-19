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
		const nextCard = document.getElementById(`card-${index + 1}`);
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top bottom",
				end: "top top",
				scrub: 1,
			},
		});

		tl.fromTo(
			projectCardRef.current,
			{
				scale: 0,
				transformOrigin: "right top",
			},
			{
				scale: 1,
			},
		).fromTo(
			projectCardRef.current,
			{ scale: 1 },
			{
				scale: 0,
				transformOrigin: "left top",
				backgroundColor: "red",
				scrollTrigger: {
					trigger: nextCard,
					start: "top bottom",
					end: "top top",
					markers: true,
					scrub: 1,
				},
			},
		);
	}, [index]);
	return (
		<div
			ref={containerRef}
			id={`card-${index}`}
			className="card  flex flex-col gap-10 p-4  h-[100vh] w-full top-0 "
		>
			<div className="flex border-b-2 text-white items-center px-4 h-[100px] border-white justify-between ">
				<h1 className="text-3xl">TITLE</h1>
				<h1 className="text-3xl">DESCRIPTION</h1>
			</div>
			<div
				ref={projectCardRef}
				className="h-[calc(100vh-100px)]  w-full bg-neutral-500 rounded-md"
			/>
		</div>
	);
};
