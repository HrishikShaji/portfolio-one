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
			gsap.to(projectRef.current, {
				scale: 1,
				ease: "none",
				transformOrigin: "right top",

				scrollTrigger: {
					trigger: cardRef.current,
					start: "top bottom",
					end: "top top",
					scrub: true,
				},
			});

			gsap.to(projectRef.current, {
				scale: 0,
				ease: "none",
				transformOrigin: "left bottom",
				immediateRender: false,
				scrollTrigger: {
					trigger: cardRef.current,
					start: "bottom bottom",
					end: "bottom top",
					scrub: true,
				},
			});
		}, cardRef);

		return () => ctx.revert();
	}, []);
	return (
		<div ref={cardRef} className="  flex flex-col  h-screen w-full top-0 ">
			<div className="h-full w-full relative">
				<Image
					ref={projectRef}
					className=" object-cover "
					fill
					sizes="100vw"
					alt=""
					src={img}
				/>
			</div>
		</div>
	);
};
