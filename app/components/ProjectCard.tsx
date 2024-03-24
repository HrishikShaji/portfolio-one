"use client";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

interface ProjectCardProps {
	title: string;
	img: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, img }) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const projectRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();

			tl.fromTo(
				projectRef.current,
				{
					xPercent: 100,
				},
				{
					xPercent: 0,

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
				{ xPercent: 0 },
				{
					xPercent: -100,
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
				<h1 className="text-3xl">{title}</h1>
			</div>
			<div
				ref={projectRef}
				className="h-[calc(100vh-100px)]  w-full bg-neutral-500 rounded-md"
			>
				<Image className="h-full w-full object-cover" fill alt="" src={img} />
			</div>
		</div>
	);
};
