"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap/all";
import { Headings } from "./Headings";
import { data } from "@/lib/data";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export const Testimonials = () => {
	const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
	const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const tl = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			if (!containerRef.current) return;
			const width = window.innerWidth - 40;

			const gap = width / 6;
			const tl = gsap.timeline();

			testimonialRefs.current.forEach((el, i) => {
				tl.fromTo(el, { xPercent: 300 }, { xPercent: 0 });
			});

			ScrollTrigger.create({
				animation: tl,
				trigger: containerRef.current,
				pin: containerRef.current,
				start: "top top",
				end: "+=3000",
				scrub: true,
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className="h-screen  w-full flex flex-col gap-10">
			<Headings text="TESTIMONIALS" />
			<div className="p-10 overflow-hidden gap-0 relative w-full   h-full text-white  ">
				{data.testimonials.map((item, i) => (
					<div
						key={i}
						ref={(el) => (testimonialRefs.current[i] = el)}
						style={{ left: `${(i + 1) * 100}px` }}
						className={`w-[calc(100vw_-_700px)] absolute flex h-[300px]   text-2xl font-semibold`}
					>
						<div className="h-full p-5 w-[30%]  bg-red-500">
							<Image
								className="h-full flex-shrink-0 w-full object-cover"
								height={1000}
								width={1000}
								alt=""
								src={item.img}
							/>
						</div>
						<div className="flex flex-col gap-2 w-[70%] bg-neutral-800 p-10">
							<h1 className="">{item.name}</h1>
							<p className="text-sm">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
