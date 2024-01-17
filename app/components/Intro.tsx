"use client";

import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export const Intro = () => {
	const firstBar = useRef<HTMLDivElement>(null);
	const secondBar = useRef<HTMLDivElement>(null);
	const thirdBar = useRef<HTMLDivElement>(null);
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			firstBar.current,
			{ scaleX: 0 },
			{
				scaleX: 1,
				scrollTrigger: {
					trigger: firstBar.current,
					start: "top 90%",
					end: "top 40%",
					scrub: 1,
					toggleActions: "play reverse none none",
				},
			},
		);
		gsap.fromTo(
			secondBar.current,
			{ scaleX: 0 },
			{
				scaleX: 1,
				scrollTrigger: {
					trigger: secondBar.current,
					start: "top 90%",
					end: "top 40%",
					scrub: 1,
					toggleActions: "play reverse none none",
				},
			},
		);
		gsap.fromTo(
			thirdBar.current,
			{ scaleX: 0 },
			{
				scaleX: 1,
				scrollTrigger: {
					trigger: thirdBar.current,
					start: "top 90%",
					end: "top 40%",
					scrub: 1,
					toggleActions: "play reverse none none",
				},
			},
		);
	}, []);
	return (
		<div className="container h-full p-5 pb-20 text-white w-full bg-neutral-900 gap-1 flex flex-col justify-center items-center">
			<div className="relative w-full justify-center flex items-center">
				<div
					ref={firstBar}
					className="leftBar w-full  origin-left h-full bg-white mix-blend-difference absolute "
				/>
				<h1 className="text-9xl font-extrabold">I CREATE</h1>
			</div>
			<div className="relative w-full justify-center flex items-center">
				<div
					ref={secondBar}
					className="rightBar w-full origin-right  h-full bg-white mix-blend-difference absolute "
				/>
				<h1 className="text-9xl  font-extrabold">COOL</h1>
			</div>
			<div className="relative w-full justify-center flex items-center">
				<div
					ref={thirdBar}
					className="leftBar w-full origin-left  h-full bg-white mix-blend-difference absolute "
				/>
				<h1 className="text-9xl  font-extrabold">WEB APPS</h1>
			</div>
		</div>
	);
};
