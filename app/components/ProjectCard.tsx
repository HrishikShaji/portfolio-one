"use client";
import { useRef } from "react";
import { CustomImage } from "./CustomImage";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";

interface ProjectCardProps {
	title: string;
	img: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, img }) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const projectRef = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		const animate = () => {
			let ctx = gsap.context(() => {
				gsap.fromTo(
					projectRef.current,
					{ scale: 0 },
					{
						scale: 1,
						ease: "none",
						transformOrigin: "right top",

						scrollTrigger: {
							trigger: cardRef.current,
							start: "top bottom",
							end: "top top",
							scrub: true,
						},
					},
				);

				gsap.fromTo(
					projectRef.current,
					{ scale: 1 },
					{
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
					},
				);
			}, cardRef);

			return () => ctx.kill();
		};
		animate();
	}, []);
	return (
		<div ref={cardRef} className="h-screen w-full  ">
			<div ref={projectRef} className="h-full w-full overflow-hidden">
				<CustomImage width={2400} height={1350} src={img} alt="" />
			</div>
		</div>
	);
};
