"use client";

import gsap from "gsap";
import { useEffect } from "react";

export const Marquee = () => {
	let currentScroll = 0;
	let isScrollingDown = true;
	useEffect(() => {
		let tween = gsap
			.to(".marquee-part", {
				xPercent: -100,
				repeat: -1,
				duration: 2,
				ease: "linear",
			})
			.totalProgress(0.5);
		gsap.set(".marquee-inner", { xPercent: 0 });
	}, []);

	return (
		<div className="marquee text-white">
			<div className="marquee-inner">
				<div className="marquee-part text-7xl">ABOUT ME</div>
				<div className="marquee-part text-7xl">ABOUT ME</div>
				<div className="marquee-part text-7xl">ABOUT ME</div>
				<div className="marquee-part text-7xl">ABOUT ME</div>
				<div className="marquee-part text-7xl">ABOUT ME</div>
			</div>
		</div>
	);
};
