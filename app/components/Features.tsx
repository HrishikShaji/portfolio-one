"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { data } from "../lib/data";

export const Features = () => {
	const pinRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const featureRefs = useRef<(HTMLHeadingElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.from(textRef.current, {
				yPercent: 200,
				scrollTrigger: {
					trigger: pinRef.current,
					start: "top top",
					once: true,
				},
			});

			gsap.to(pinRef.current, {
				scrollTrigger: {
					trigger: targetRef.current,
					pin: pinRef.current,
					start: "top top",
					end: "bottom bottom",
				},
			});
			featureRefs.current.forEach((el) => {
				const timeline = gsap.timeline();
				const rect = titleRef.current?.getBoundingClientRect();
				const textRect = textRef.current?.getBoundingClientRect();

				if (rect && textRect) {
					timeline.fromTo(
						el,
						{ scale: 1 },
						{
							scale: 2,
							transformOrigin: "top left",
							color: "white",
							scrollTrigger: {
								trigger: el,
								start: `top 500px`,
								end: `top ${textRef.current?.offsetTop}px`,
								scrub: true,
							},
						},
					);
				}
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className="h-full w-full flex text-white ">
			<div
				ref={pinRef}
				className=" h-screen w-[50%]  flex justify-center items-center"
			>
				<div
					ref={titleRef}
					className="flex font-audiowide flex-col gap-0 leading-none text-9xl items-start"
				>
					<h1 className=" text-red-500 font-audiowide">{`I'M`}</h1>
					<div className="overflow-hidden">
						<h1 ref={textRef} className="font-audiowide ">
							BEST
						</h1>
					</div>
					<h1 className="font-audiowide text-red-500">AT</h1>
				</div>
			</div>
			<div
				ref={targetRef}
				className=" flex flex-col   w-[50%] gap-[50vh] pt-[100vh] pb-[50vh]  justify-around"
			>
				{data.features.data.map((item, i) => (
					<h1
						ref={(el) => (featureRefs.current[i] = el)}
						key={i}
						className="text-4xl smooth font-audiowide text-red-500 w-[200px] flex-wrap mix-blend-difference z-10"
					>
						{item}
					</h1>
				))}
			</div>
		</div>
	);
};
