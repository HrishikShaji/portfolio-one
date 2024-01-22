"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface MarqueeProps {
	text: string;
	number: number;
	colorIndex: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
	text,
	number,
	colorIndex,
}) => {
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
		<div className="">
			<div ref={slider} className="relative ">
				<div
					ref={firstText}
					className="text-9xl w-full overflow-hidden relative m-0 flex text-white font-semibold"
				>
					{Array.from({ length: number }).map((_, i) => (
						<h1 key={i} className={i === colorIndex ? "text-red-500" : ""}>
							{text}
						</h1>
					))}
				</div>
				<div
					ref={secondText}
					className="text-9xl w-full text-white  font-semibold flex  absolute left-[100%]  top-0"
				>
					{Array.from({ length: number }).map((_, i) => (
						<h1 key={i} className={i === colorIndex ? "text-red-500" : ""}>
							{text}
						</h1>
					))}
				</div>
			</div>
		</div>
	);
};
