"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Marquee } from "./Marquee";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { data } from "../lib/data";

export const Skills = () => {
	const skillRefs = useRef<(HTMLHeadingElement | null)[]>([]);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			skillRefs.current.forEach((skill) => {
				gsap.fromTo(
					skill,
					{
						autoAlpha: 0,
						y: 50,
					},
					{
						duration: 1,
						autoAlpha: 1,
						y: 0,
						delay: 0.5,
						scrollTrigger: {
							trigger: skill,
							toggleActions: "play none none none",
							once: true,
						},
					},
				);
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<div id={data.skills.id} className="pb-40 flex flex-col gap-10">
			<Marquee text={data.skills.title} number={3} colorIndex={2}>
				{Array.from({ length: 5 }).map((_, i) => (
					<h1 key={i} className="text-red-500 text-6xl ">
						MY SKILLS{" "}
					</h1>
				))}
			</Marquee>
			<div className="px-10 relative w-full h-full text-white grid grid-cols-4 gap-10">
				{data.skills.data.map((item, i) => (
					<h1
						key={item}
						ref={(el) => (skillRefs.current[i] = el)}
						className="skill text-2xl font-semibold"
					>
						{item}
					</h1>
				))}
			</div>
		</div>
	);
};
