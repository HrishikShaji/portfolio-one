"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Headings } from "./Headings";
import { data } from "@/lib/data";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Skills = () => {
	const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
	const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					pin: containerRef.current,
					start: "top top",
					end: "+=3000",
					scrub: true,
					once: true,
				},
			});

			function disappear(i: number) {
				gsap.to(overlayRefs.current[i], {
					opacity: 0,
				});
			}

			tl.fromTo(
				overlayRefs.current[0],
				{ xPercent: -100 },
				{ xPercent: 0, onComplete: () => disappear(0) },
			)
				.fromTo(
					overlayRefs.current[1],
					{ xPercent: -100 },
					{ xPercent: 0, onComplete: () => disappear(1) },
				)
				.fromTo(overlayRefs.current[2], { xPercent: -100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[3], { xPercent: -100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[7], { yPercent: -100 }, { yPercent: 0 })
				.fromTo(overlayRefs.current[6], { xPercent: 100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[5], { xPercent: 100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[4], { xPercent: 100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[8], { yPercent: -100 }, { yPercent: 0 })
				.fromTo(overlayRefs.current[9], { xPercent: -100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[10], { xPercent: -100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[11], { xPercent: -100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[15], { yPercent: -100 }, { yPercent: 0 })
				.fromTo(overlayRefs.current[14], { xPercent: 100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[13], { xPercent: 100 }, { xPercent: 0 })
				.fromTo(overlayRefs.current[12], { xPercent: 100 }, { xPercent: 0 });
			skillRefs.current.forEach((skill) => {
				gsap.fromTo(
					skill,
					{
						autoAlpha: 0,
						y: 50,
					},
					{
						duration: 1,
						autoAlpha: 1,
						y: 0,
						delay: 0.5,
						scrollTrigger: {
							trigger: skill,
							toggleActions: "play none none none",
							once: true,
						},
					},
				);
			});
		}, containerRef);

		return () => ctx.kill();
	}, []);

	return (
		<div ref={containerRef} className="pb-40 flex flex-col gap-10">
			<Headings text="SKILLS" />
			<div className="px-10  w-full place-items-center h-full text-white grid grid-cols-4 ">
				{data.skills.data.map((item, i) => (
					<div
						key={i}
						ref={(el) => (skillRefs.current[i] = el)}
						className="skill overflow-hidden relative w-full h-full py-10 text-2xl font-semibold"
					>
						<div
							ref={(el) => (overlayRefs.current[i] = el)}
							className="h-full w-full absolute left-0 top-0 bg-blue-500 mix-blend-difference"
						></div>
						<h1>{item.name}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
