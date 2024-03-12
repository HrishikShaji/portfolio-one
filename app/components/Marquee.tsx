"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface MarqueeProps {
	text: string;
	number: number;
	colorIndex: number;
	children: ReactNode;
}

export const Marquee: React.FC<MarqueeProps> = ({
	text,
	number,
	colorIndex,
	children,
}) => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	const directionRef = useRef(-1); // Use useRef to store direction value

	let xPercent = 0;

	const animation = () => {
		if (xPercent <= -100) {
			xPercent = 0;
		}
		if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		xPercent += 0.1 * directionRef.current; // Use directionRef
		requestAnimationFrame(animation);
	};
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(animation);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: slider.current,
				start: "top bottom",
				end: "top top",
				scrub: 5,
				onUpdate: (e) => {
					directionRef.current = e.direction * -1; // Update directionRef
				},
			},
		});
	}, []);

	return (
		<div ref={slider} className="overflow-hidden flex">
			<div ref={firstText} className="flex whitespace-pre w-fit  ">
				{children}
			</div>
			<div ref={secondText} className="flex whitespace-pre w-fit  ">
				{children}
			</div>
		</div>
	);
};
