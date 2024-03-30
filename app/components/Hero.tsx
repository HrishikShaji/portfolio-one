"use client";

import { data } from "../lib/data";
import { Marquee } from "./Marquee";
import { SplitText } from "./SplitText";

const speed = [0.1, 0.2, 0.1, 0.2, 0.1, 0.2, 0.1, 0.2];

export const Hero = () => {
	return (
		<div
			id={data.hero.id}
			className="h-screen w-full  flex relative  flex-col  "
		>
			{Array.from({ length: 20 }).map((_, j) => (
				<Marquee key={j} speed={0.1}>
					{Array.from({ length: 10 }).map((_, i) => (
						<h1 key={i} className="text-neutral-800 font-audiowide text-4xl ">
							ANAKIN
							<span className="">#</span>
						</h1>
					))}
				</Marquee>
			))}
			<div className="flex flex-col gap-4 items-center absolute bottom-10 left-10 text-white">
				<div className="flex flex-col gap-20">
					<div className="flex flex-col gap-2 text-8xl text-red-600 p-10 rounded-3xl">
						<SplitText text={`ANAKIN`} />
						<SplitText text={`SKYWALKER.`} />
						<SplitText text="WEB DEVELOPER." />
					</div>
				</div>
			</div>
		</div>
	);
};
