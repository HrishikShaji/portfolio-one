"use client";

import { useRef } from "react";
import { features } from "@/public/data";
import { useIsMount } from "@/hooks/useIsMount";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";

const Features = () => {
	const pinRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);
	const featureRefs = useRef<(HTMLHeadingElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const timeline = useRef<gsap.core.Timeline | undefined>();

	const { isMounted } = useIsMount();

	useIsomorphicLayoutEffect(() => {
		const animate = () => {
			let ctx = gsap.context(() => {
				gsap.to(pinRef.current, {
					scrollTrigger: {
						trigger: targetRef.current,
						pin: pinRef.current,
						start: "top top",
						end: "bottom bottom",
					},
				});
				gsap.fromTo(
					textRef.current,
					{ yPercent: 200 },
					{
						yPercent: 0,
						scrollTrigger: {
							trigger: pinRef.current,
							start: "top top",
							once: true,
						},
					},
				);

				timeline.current = gsap.timeline();
				const top = textRef.current?.offsetTop;
				featureRefs.current.forEach((el) => {
					if (!timeline.current) return;
					timeline.current.fromTo(
						el,
						{ scale: 1 },
						{
							scale: 2,
							transformOrigin: "top left",
							color: "#dc2626",
							scrollTrigger: {
								trigger: el,
								start: `top 500px`,
								end: `top ${top}px`,
								scrub: true,
							},
						},
					);
				});
			}, containerRef);

			return () => ctx.revert();
		};

		if (isMounted) {
			animate();
		}
	}, [isMounted]);

	return (
		<div ref={containerRef} className=" w-full flex text-white ">
			<div ref={pinRef} className=" h-screen w-[40%]  flex items-center ">
				<h1 className="flex text-neutral-800 font-audiowide flex-col gap-0 pl-20 text-[140px] leading-[140px] items-start">
					{`I'M`}
					<div className="overflow-hidden">
						<h1 ref={textRef} className="font-audiowide text-red-600">
							BEST
						</h1>
					</div>
					AT
				</h1>
			</div>
			<div
				ref={targetRef}
				className=" flex flex-col   w-[60%] gap-[50vh] pt-[100vh] pb-[50vh]  justify-around"
			>
				{features.map((item, i) => (
					<h1
						ref={(el) => (featureRefs.current[i] = el)}
						key={i}
						className="text-4xl smooth font-audiowide text-neutral-800 w-[200px] flex-wrap z-10"
					>
						{item.title}
					</h1>
				))}
			</div>
		</div>
	);
};

export default Features;
