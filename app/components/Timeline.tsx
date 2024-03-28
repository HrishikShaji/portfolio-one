import { data } from "@/lib/data";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Headings } from "./Headings";

export const Timeline = () => {
	const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	const educationLength = data.education.data.length;

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			overlayRefs.current.forEach((el, i) => {
				const elHeight = el?.getBoundingClientRect().height;
				gsap.fromTo(
					el,
					{ xPercent: 0 },
					{
						xPercent: i % 2 === 0 ? -50 : 50,
						scrollTrigger: {
							trigger: el,
							start: "top 75%",
							end: `+=${elHeight}`,
							scrub: true,
						},
					},
				);
			});
		}, containerRef);

		return () => ctx.kill();
	}, []);

	return (
		<div ref={containerRef} className="flex flex-col gap-2">
			<Headings text="JOURNEY"></Headings>
			<div className="flex flex-col overflow-hidden">
				{data.education.data.map((item, i) => (
					<div key={i} className="flex h-[300px] relative w-full">
						<div
							ref={(el) => (overlayRefs.current[i] = el)}
							className="left-0 absolute justify-start flex h-full w-full  mix-blend-difference "
						>
							<div
								className={`w-[50%] h-full ${i % 2 === 0 ? "bg-black" : "bg-red-500"}`}
							></div>
							<div
								className={`w-[50%] h-full ${i % 2 === 0 ? "bg-red-500" : "bg-black"}`}
							></div>
						</div>
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
							ref={(el) => (overlayRefs.current[i + educationLength] = el)}
							className="left-0 absolute justify-start flex h-full w-full  mix-blend-difference "
						>
							<div
								className={`w-[50%] h-full ${(i + educationLength) % 2 === 0 ? "bg-black" : "bg-red-500"}`}
							></div>
							<div
								className={`w-[50%] h-full ${(i + educationLength) % 2 === 0 ? "bg-red-500" : "bg-black"}`}
							></div>
						</div>
						<div
							className={`bg-black w-full flex justify-center items-center h-full`}
						>
							{(i + educationLength) % 2 === 0 ? (
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
							{(i + educationLength) % 2 === 0 ? (
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
