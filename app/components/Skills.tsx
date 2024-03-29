"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap/all";
import { Headings } from "./Headings";
import { data } from "@/lib/data";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Skills = () => {
	const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
	const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const tl = useRef(null);

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

	gsap.registerPlugin(ScrollTrigger);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			function getValue(index: number) {
				if (directions[index] === "right") {
					return { x: -110, y: 0 };
				} else if (directions[index] === "left") {
					return { x: 110, y: 0 };
				} else {
					return { x: 0, y: -110 };
				}
			}

			const tl = gsap.timeline().fromTo(
				overlayRefs.current,
				{
					xPercent: 100,
					yPercent: 100,
				},
				{
					xPercent: 0,
					yPercent: 0,
				},
			);

			ScrollTrigger.create({
				animation: tl,
				trigger: containerRef.current,
				pin: containerRef.current,
				start: "top top",
				end: "+=3000",
				scrub: true,
				onLeave: function(self) {
					let start = self.start;
					self.scroll(self.start);
					self.disable();
					self.animation.progress(1);
					ScrollTrigger.refresh();
					window.scrollTo(0, start);
				}
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className="pb-40 flex flex-col gap-10">
			<Headings text="SKILLS" />
			<div className="px-10 gap-0 w-full place-items-center h-full text-white grid grid-cols-4 ">
				{data.skills.data.map((item, i) => (
					<div
						key={i}
						ref={(el) => (skillRefs.current[i] = el)}
						className="skill overflow-hidden relative w-full h-full py-10 text-2xl font-semibold"
					>
						<div
							ref={(el) => (overlayRefs.current[i] = el)}
							className="h-full w-full absolute left-0 top-0 bg-red-500 "
						></div>
						<h1 className="absolute z-10 text-neutral-900">{item.name}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
