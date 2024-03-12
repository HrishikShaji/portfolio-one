"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface BarProps {
	item: string;
}

export const Bar: React.FC<BarProps> = ({ item }) => {
	const barRefs = useRef<(HTMLDivElement | null)[]>([]);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			barRefs.current.forEach((bar, i) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: bar,
						start: "top 90%",
						end: "top 40%",
						scrub: 2.5,
					},
				});
				tl.fromTo(
					bar,
					{
						backgroundColor: "red",
						scaleX: 0,
						opacity: 0,
						transformOrigin: "left",
					},
					{
						scaleX: 1,
						opacity: 1,
						backgroundColor: "white",
					},
				).to(bar, {
					backgroundColor: "red",
					scaleX: 0,
					opacity: 0,
					transformOrigin: "right",
				});
			});
		});

		return () => ctx.revert();
	}, []);
	return (
		<div className="relative w-full justify-start flex ">
			<div className="h-full absolute w-full flex flex-col  mix-blend-difference">
				{Array.from({ length: 5 }).map((_, i) => (
					<div
						ref={(el) => (barRefs.current[i] = el)}
						key={i}
						className="leftBar bar w-full  origin-left h-[20%]"
					/>
				))}
			</div>
			<h1 className="text-[150px] leading-none ">{item}</h1>
		</div>
	);
};
