"use client";

import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export const Intro = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const leftBar = document.querySelector(".leftBar");
		const rightBar = document.querySelector(".rightBar");
		const container = document.querySelector(".container");
		gsap.fromTo(
			leftBar,
			{ scaleX: 0 },
			{
				scaleX: 1,
				scrollTrigger: {
					trigger: leftBar,
					start: "top 90%",
					end: "top 40%",
					scrub: 1,
					toggleActions: "play reverse none none",
				},
			},
		);
		gsap.fromTo(
			rightBar,
			{ scaleX: 0 },
			{
				scaleX: 1,
				scrollTrigger: {
					trigger: rightBar,
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
				<div className="leftBar w-full  origin-left top-16 h-full bg-neutral-300 mix-blend-difference absolute " />
				<h1 className="text-9xl font-extrabold">I CREATE</h1>
			</div>
			<div className="relative w-full justify-center flex items-center">
				<div className="rightBar w-full origin-right top-16 h-full bg-neutral-300 mix-blend-difference absolute " />
				<h1 className="text-9xl  font-extrabold">COOL</h1>
			</div>
			<h1 className="text-9xl font-extrabold">WEB APPS</h1>
		</div>
	);
};
