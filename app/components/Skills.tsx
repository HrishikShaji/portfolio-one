"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Headings } from "./Headings";
import { data } from "@/lib/data";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Skills = () => {
	const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
	const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					pin: containerRef.current,
					start: "top top",
					end: "+=3000",
					scrub: true,
				},
			});

			function disappear(i: number) {
				gsap.to(overlayRefs.current[i], {
					opacity: 0,
				});
			}

			const directions = [
				"right",
				"right",
				"right",
				"right",
				"left",
				"left",
				"left",
				"down",
				"down",
				"right",
				"right",
				"right",
				"left",
				"left",
				"left",
				"down",
			];
			const indexes = [0, 1, 2, 3, 7, 6, 5, 4, 8, 9, 10, 11, 15, 14, 13, 12];

			function getValue(index: number) {
				if (directions[index] === "right") {
					return { x: -100, y: 0 };
				} else if (directions[index] === "left") {
					return { x: 100, y: 0 };
				} else {
					return { x: 0, y: -100 };
				}
			}

			indexes.forEach((index) => {
				tl.fromTo(
					overlayRefs.current[index],
					{
						xPercent: getValue(index).x,
						yPercent: getValue(index).y,
					},
					{
						xPercent: 0,
						yPercent: 0,
					},
				);
			});

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
		}, containerRef);

		return () => ctx.kill();
	}, []);

	return (
		<div ref={containerRef} className="pb-40 flex flex-col gap-10">
			<Headings text="SKILLS" />
			<div className="px-10  w-full place-items-center h-full text-white grid grid-cols-4 ">
				{data.skills.data.map((item, i) => (
					<div
						key={i}
						ref={(el) => (skillRefs.current[i] = el)}
						className="skill overflow-hidden relative w-full h-full py-10 text-2xl font-semibold"
					>
						<div
							ref={(el) => (overlayRefs.current[i] = el)}
							className="h-full w-full absolute left-0 top-0 bg-blue-500 mix-blend-difference"
						></div>
						<h1>{item.name}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
