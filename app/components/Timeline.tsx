import { data } from "@/lib/data";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Headings } from "./Headings";

export const Timeline = () => {
	const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			overlayRefs.current.forEach((el, i) => {
				const elHeight = el?.getBoundingClientRect().height;
				gsap.to(el, {
					xPercent: i % 2 === 0 ? -50 : 50,
					scrollTrigger: {
						trigger: el,
						start: "top bottom",
						end: `+=${elHeight}`,
						scrub: true,
					},
				});
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className="flex flex-col gap-2">
			<Headings text="JOURNEY"></Headings>
			<div className="flex flex-col overflow-hidden">
				{data.education.data.map((item, i) => (
					<div key={i} className="flex h-[300px] relative w-full">
						<div
							ref={(el) => (overlayRefs.current[i] = el)}
							className="absolute h-full w-full bg-red-500 mix-blend-difference "
						></div>
						<div
							className={`bg-black w-full flex justify-center items-center h-full`}
						>
							{i % 2 === 0 ? (
								<h1 className="text-red-500 text-6xl">{item.endYear}</h1>
							) : (
								<div className="flex text-red-500 flex-col  items-end justify-center gap-5">
									<h1 className=" text-3xl">{item.major}</h1>
									<div className="flex flex-col gap-1 items-end">
										<h1 className="text-xl">{item.university}</h1>
										<h1>{item.description}</h1>
									</div>
								</div>
							)}
						</div>
						<div
							className={`bg-black w-full h-full flex justify-center items-center`}
						>
							{i % 2 === 0 ? (
								<div className="flex text-red-500 flex-col  items-start justify-center gap-5">
									<h1 className=" text-3xl">{item.major}</h1>
									<div className="flex flex-col gap-1 items-start">
										<h1 className="text-xl">{item.university}</h1>
										<h1>{item.description}</h1>
									</div>
								</div>
							) : (
								<h1 className="text-red-500 text-6xl">{item.endYear}</h1>
							)}
						</div>
					</div>
				))}
				{data.experience.data.map((item, i) => (
					<div key={i} className="flex relative h-[300px] w-full">
						<div
							ref={(el) =>
								(overlayRefs.current[i + data.education.data.length] = el)
							}
							className="absolute h-full w-full bg-red-500 mix-blend-difference "
						></div>
						<div
							className={`bg-black w-full flex justify-center items-center h-full`}
						>
							{(i + 1) % 2 === 0 ? (
								<h1 className="text-red-500 text-6xl">{item.endYear}</h1>
							) : (
								<div className="flex text-red-500 flex-col  items-end justify-center gap-5">
									<h1 className=" text-3xl">{item.position}</h1>
									<div className="flex flex-col gap-1 items-end">
										<h1 className="text-xl">{item.company}</h1>
										<h1>{item.description}</h1>
									</div>
								</div>
							)}
						</div>
						<div
							className={`bg-black w-full h-full flex justify-center items-center`}
						>
							{(i + 1) % 2 === 0 ? (
								<div className="flex text-red-500 flex-col  items-start justify-center gap-5">
									<h1 className=" text-3xl">{item.position}</h1>
									<div className="flex flex-col gap-1 items-start">
										<h1 className="text-xl">{item.company}</h1>
										<h1>{item.description}</h1>
									</div>
								</div>
							) : (
								<h1 className="text-red-500 text-6xl">{item.endYear}</h1>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
