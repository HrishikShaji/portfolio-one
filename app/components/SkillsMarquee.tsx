"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const SkillsMarquee = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);

	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(animation);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: slider.current,
				start: "top bottom",
				end: "top top",
				scrub: 5,
				markers: true,
				onUpdate: (e) => (direction = e.direction * -1),
			},
		});
	}, []);

	const animation = () => {
		if (xPercent <= -100) {
			xPercent = 0;
		}
		if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		xPercent += 0.1 * direction;
		requestAnimationFrame(animation);
	};

	return (
		<div className="absolute">
			<div ref={slider} className="relative ">
				<div
					ref={firstText}
					className="text-7xl w-screen relative m-0 flex text-white font-semibold"
				>
					<h1>MY SKILLS</h1>
					<h1>MY SKILLS</h1>
					<h1 className="text-red-500">MY SKILLS</h1>
					<h1>MY SKILLS</h1>
					<h1>MY SKILLS</h1>
					<h1>MY SKILLS</h1>
				</div>
				<div
					ref={secondText}
					className="text-7xl text-white w-screen font-semibold flex  absolute left-[100%]  top-0"
				>
					<h1>MY SKILLS</h1>
					<h1>MY SKILLS</h1>
					<h1 className="text-red-500">MY SKILLS</h1>
					<h1>MY SKILLS</h1>
					<h1>MY SKILLS</h1>
					<h1>MY SKILLS</h1>
				</div>
			</div>
		</div>
	);
};
