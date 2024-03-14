"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface BoxProps {
	item: string;
}
export const Box: React.FC<BoxProps> = ({ item }) => {
	const textRef = useRef<HTMLHeadingElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const timeline = gsap.timeline();
			timeline.fromTo(
				textRef.current,
				{ scale: 1 },
				{
					scale: 2,
					transformOrigin: "left",
					color: "white",
					scrollTrigger: {
						trigger: textRef.current,
						start: "top 80%",
						end: "top 40%",
						scrub: true,
						markers: true,
					},
				},
			);

			gsap.fromTo(
				textRef.current,
				{ scale: 2 },
				{
					scale: 1,
					transformOrigin: "left",
					color: "#ef4444",
					scrollTrigger: {
						trigger: textRef.current,
						start: "top 40%",
						end: "top 20%",
						scrub: true,
						markers: true,
					},
				},
			);
		});
		return () => ctx.clear();
	}, []);
	return (
		<h1
			ref={textRef}
			className="text-4xl smooth font-audiowide text-red-500 w-[200px] flex-wrap mix-blend-difference z-10"
		>
			{item}
		</h1>
	);
};
