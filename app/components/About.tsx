import { useEffect, useRef } from "react";
import { data } from "@/lib/data";
import SplitType from "split-type";
import gsap from "gsap";
import { Headings } from "./Headings";

export const About = () => {
	const paraRef = useRef<HTMLParagraphElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (paraRef.current && containerRef.current) {
			const childSplit = new SplitType(paraRef.current, {
				types: "lines",
				lineClass: "split-child",
			});

			const lines = containerRef.current?.querySelectorAll(".split-child");
			lines.forEach((line) => {
				const div = document.createElement("div");
				div.classList.add("inner-div");
				div.textContent = line.textContent;
				line.textContent = "";
				line.appendChild(div);
			});

			let ctx = gsap.context(() => {
				gsap.from(".inner-div", {
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top center",
						once: true,
					},
					duration: 1,
					yPercent: 200,
					ease: "none",
				});
			}, containerRef);

			return () => ctx.kill();
		}
	}, []);

	return (
		<div
			id={data.about.id}
			ref={containerRef}
			className="pb-40 text-red-500 flex  relative flex-col  w-full  "
		>
			<Headings text="ABOUT" />
			<div className=" text-white  p-5 rounded-3xl text-3xl font-audiowide ">
				<p ref={paraRef} className="text-white smooth">
					{data.about.description}
				</p>
			</div>
		</div>
	);
};
