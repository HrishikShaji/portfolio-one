"use client";

import { useEffect, useRef } from "react";

const Intro = () => {
	const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
	const containerRef = useRef<HTMLHeadingElement>(null);
	useEffect(() => {
		const animate = async () => {
			const gsap = (await import("gsap")).default;
			const ScrollTrigger = (await import("gsap/dist/ScrollTrigger")).default;
			gsap.registerPlugin(ScrollTrigger);
			let ctx = gsap.context(() => {
				gsap.set(textRefs.current, {
					xPercent: (i) => (i + 1) * 1000,
				});
				gsap.to(textRefs.current, {
					xPercent: 0,
					stagger: {
						from: "start",
						each: 0.05,
					},
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top center",
						once: true,
					},
				});
			}, containerRef);

			return () => ctx.kill();
		};

		animate();
	}, []);
	return (
		<h1
			ref={containerRef}
			className="py-40 px-20 overflow-hidden w-full text-[140px] leading-[140px] font-audiowide  text-neutral-800"
		>
			I CREATE{" "}
			{["C", "O", "O", "L"].map((item, i) => (
				<span
					key={i}
					className="text-red-600 inline-block"
					ref={(el) => (textRefs.current[i] = el)}
				>
					{item}
				</span>
			))}
			WEBPAGES
		</h1>
	);
};

export default Intro;
