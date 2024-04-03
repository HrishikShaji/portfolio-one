"use client";
import { useEffect, useRef } from "react";
import { Headings } from "./Headings";
import { skills } from "@/public/data";
import { useIsMount } from "@/hooks/useIsMount";

const Skills = () => {
	const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
	const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const timeline = useRef<gsap.core.Timeline | undefined>();

	const { isMounted } = useIsMount();

	useEffect(() => {
		const animate = async () => {
			const gsap = (await import("gsap")).default;
			const ScrollTrigger = (await import("gsap/dist/ScrollTrigger")).default;
			gsap.registerPlugin(ScrollTrigger);
			const positions = [
				{ x: -110, y: 0 },
				{ x: -110, y: 0 },
				{ x: -110, y: 0 },
				{ x: -110, y: 0 },
				{ x: 110, y: 0 },
				{ x: 110, y: 0 },
				{ x: 110, y: 0 },
				{ x: 0, y: -110 },
				{ x: 0, y: -110 },
				{ x: -110, y: 0 },
				{ x: -110, y: 0 },
				{ x: -110, y: 0 },
				{ x: 110, y: 0 },
				{ x: 110, y: 0 },
				{ x: 110, y: 0 },
				{ x: 0, y: -110 },
			];
			const indexes = [0, 1, 2, 3, 7, 6, 5, 4, 8, 9, 10, 11, 15, 14, 13, 12];
			let ctx = gsap.context(() => {
				timeline.current = gsap.timeline();
				indexes.forEach((index) => {
					if (!timeline.current) return;
					timeline.current.fromTo(
						overlayRefs.current[index],
						{
							xPercent: positions[index].x,
							yPercent: positions[index].y,
						},
						{
							xPercent: 0,
							yPercent: 0,
						},
					);
				});

				ScrollTrigger.create({
					animation: timeline.current,
					trigger: containerRef.current,
					pin: containerRef.current,
					start: "top top",
					end: "+=3000",
					scrub: true,
					onLeave: function(self) {
						let start = self.start;
						self.scroll(self.start);
						self.disable();
						if (self.animation) {
							self.animation.progress(1);
							ScrollTrigger.refresh();
							window.scrollTo(0, start);
						}
					},
				});
			}, containerRef);

			return () => ctx.revert();
		};
		if (isMounted) {
			animate();
		}
	}, [isMounted]);

	return (
		<div ref={containerRef} className=" flex flex-col">
			<Headings text="SKILLS" />
			<div className="p-20  w-full place-items-center h-full text-white grid grid-cols-4 ">
				{skills.map((item, i) => (
					<div
						key={i}
						ref={(el) => (skillRefs.current[i] = el)}
						className="skill border-y-4 border-neutral-900 bg-neutral-900 overflow-hidden relative flex items-center justify-center w-full h-full py-10 text-2xl font-semibold"
					>
						<div
							ref={(el) => (overlayRefs.current[i] = el)}
							className="h-full w-full mix-blend-difference absolute left-0 top-0 bg-red-500 "
						></div>
						<h1 className="z-10 text-neutral-900">{item.name}</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
