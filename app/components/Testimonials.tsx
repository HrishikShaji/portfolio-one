"use client";
import { useLayoutEffect, useRef } from "react";
import { Headings } from "./Headings";
import { TestimonialCard } from "./TestimonialCard";
import { gsap, ScrollTrigger } from "../gsap";

interface TestimonialsProps {
	data: any[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
	const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
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
				{data.map((item, i) => (
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
