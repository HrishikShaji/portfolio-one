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
	const projectRef = useRef<HTMLImageElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(projectRef.current, { scale: 0 });
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: projectRef.current,
					start: "top bottom",
					end: "top top",
					scrub: 1,
				},
			});

			tl.to(projectRef.current, {
				scale: 1,
				ease: "none",
				transformOrigin: "right top",
			});

			tl.to(projectRef.current, {
				scale: 0,
				ease: "none",
				transformOrigin: "left bottom",
			});
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
			<Image
				ref={projectRef}
				className="h-[calc(100vh-100px)] w-full object-cover"
				height={1000}
				width={1000}
				alt=""
				src={img}
			/>
		</div>
	);
};
