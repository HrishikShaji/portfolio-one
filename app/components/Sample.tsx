"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Sample = () => {
	const projectCardRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: projectCardRef.current,
				start: "top bottom",
				end: "top top",
				scrub: true,
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
		);
	}, []);
	return (
		<div
			ref={containerRef}
			className="card sticky h-[100vh] p-2 flex flex-col gap-10 w-full top-0 "
		>
			<div
				ref={titleRef}
				className="flex border-b-2 text-white items-center px-4 h-[100px] border-white justify-between "
			>
				<h1 className="text-3xl">TITLE</h1>
				<h1 className="text-3xl">DESCRIPTION</h1>
			</div>
			<div
				ref={projectCardRef}
				className="h-[90vh]  w-full bg-neutral-500 rounded-md"
			/>
		</div>
	);
};
