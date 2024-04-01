"use client";
import { useLayoutEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { Headings } from "./Headings";
import { data } from "@/lib/data";
import { TestimonialCard } from "./Testimonial";

export const Testimonials = () => {
	const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		let ctx = gsap.context(() => {
			if (!containerRef.current) return;

			const tl = gsap.timeline();

			testimonialRefs.current.forEach((el) => {
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
					<div ref={(el) => (testimonialRefs.current[i] = el)} key={i}>
						<TestimonialCard
							img={item.img}
							desc={item.desc}
							name={item.desc}
							i={i}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
