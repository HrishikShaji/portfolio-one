"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const SkillsMarquee = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);

	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		requestAnimationFrame(animation);
	}, []);

	const animation = () => {
		if (xPercent <= -100) {
			xPercent = 0;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		xPercent += 0.1 * direction;
		requestAnimationFrame(animation);
	};

	return (
		<div className="absolute">
			<div className="relative whitespace-nowrap">
				<p
					ref={firstText}
					className="text-7xl relative m-0  text-white font-bold"
				>
					MY SKILLS MY SKILLS MY SKILLS MY SKILLS
				</p>
				<p
					ref={secondText}
					className="text-7xl text-white font-bold absolute left-[100%] top-0"
				>
					MY SKILLS MY SKILLS MY SKILLS MY SKILLS
				</p>
			</div>
		</div>
	);
};
