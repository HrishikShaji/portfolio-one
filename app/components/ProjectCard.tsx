"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const ProjectCard = () => {
	const cardRef = useRef<HTMLDivElement>(null);
	const projectRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();

			tl.fromTo(
				projectRef.current,
				{
					scale: 0,
				},
				{
					scale: 1,

					transformOrigin: "right top",
					scrollTrigger: {
						trigger: cardRef.current,
						start: "top bottom",
						end: "top top",
						scrub: 1,
					},
				},
			).fromTo(
				projectRef.current,
				{ scaleX: 1 },
				{
					scaleX: 0,
					transformOrigin: "left top",
					backgroundColor: "red",
					scrollTrigger: {
						trigger: cardRef.current,
						start: "bottom bottom",
						end: "bottom top",
						scrub: 1,
					},
				},
			);
		});

		return () => ctx.revert();
	}, []);
	return (
		<div
			ref={cardRef}
			className="card  flex flex-col gap-10 px-10  h-[100vh] w-full top-0 "
		>
			<div className="flex border-y-2 text-white items-center  py-5 border-white justify-between ">
				<h1 className="text-3xl">TITLE</h1>
				<h1 className="text-3xl">DESCRIPTION</h1>
			</div>
			<div
				ref={projectRef}
				className="h-[calc(100vh-100px)]  w-full bg-neutral-500 rounded-md"
			/>
		</div>
	);
};
