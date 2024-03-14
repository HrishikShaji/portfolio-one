"use client";

import { useLayoutEffect, useRef } from "react";
import { data } from "../lib/data";
import gsap from "gsap";

export const Intro = () => {
	const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.from(textRefs.current, {
				xPercent: (i) => (i + 1) * 1000,
				stagger: {
					from: "start",
					each: 0.05,
				},
				scrollTrigger: {
					trigger: textRefs.current,
					start: "top center",
					once: true,
				},
			});
		});

		return () => ctx.revert();
	}, []);
	return (
		<div
			id={data.intro.id}
			className="container   text-white w-full relative bg-neutral-900  flex flex-col overflow-hidden"
		>
			<h1 className="text-9xl font-audiowide mix-blend-difference text-red-500">
				I CREATE{" "}
				{["C", "O", "O", "L"].map((item, i) => (
					<span
						key={i}
						className="text-white inline-block"
						ref={(el) => (textRefs.current[i] = el)}
					>
						{item}
					</span>
				))}
				WEBPAGES
			</h1>
		</div>
	);
};
