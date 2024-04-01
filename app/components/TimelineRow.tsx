"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";

interface TimelineRowProps {
	i: number;
	year: number | string;
	position: string;
	place: string;
	desc: string;
}

export const TimelineRow: React.FC<TimelineRowProps> = ({
	i,
	position,
	year,
	place,
	desc,
}) => {
	const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			overlayRefs.current.forEach((el, i) => {
				const elHeight = el?.getBoundingClientRect().height;
				gsap.fromTo(
					el,
					{ xPercent: 0 },
					{
						xPercent: i % 2 === 0 ? -100 : 100,
						scrollTrigger: {
							trigger: el,
							start: "top bottom",
							end: `+=${elHeight}`,
							scrub: true,
						},
					},
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} key={i} className="flex h-[300px] relative w-full">
			<div
				ref={(el) => (overlayRefs.current[i] = el)}
				className={`${i % 2 === 0 ? "right-0" : "left-0"}  absolute  flex h-full bg-red-500 w-[50%]  mix-blend-difference `}
			></div>
			<div
				className={`bg-neutral-900 w-full flex justify-center items-center h-full`}
			>
				{i % 2 === 0 ? (
					<h1 className="text-red-500 text-6xl">{year}</h1>
				) : (
					<div className="flex text-red-500 flex-col  items-end justify-center gap-5">
						<h1 className=" text-3xl">{position}</h1>
						<div className="flex flex-col gap-1 items-end">
							<h1 className="text-xl">{place}</h1>
							<h1>{desc}</h1>
						</div>
					</div>
				)}
			</div>
			<div
				className={`bg-neutral-900 w-full h-full flex justify-center items-center`}
			>
				{i % 2 === 0 ? (
					<div className="flex text-red-500 flex-col  items-start justify-center gap-5">
						<h1 className=" text-3xl">{position}</h1>
						<div className="flex flex-col gap-1 items-start">
							<h1 className="text-xl">{place}</h1>
							<h1>{desc}</h1>
						</div>
					</div>
				) : (
					<h1 className="text-red-500 text-6xl">{year}</h1>
				)}
			</div>
		</div>
	);
};
