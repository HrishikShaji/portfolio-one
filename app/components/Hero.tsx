"use client";

import { Marquee } from "./Marquee";
import { SplitText } from "./SplitText";

export const Hero = () => {
	return (
		<div className="h-screen w-full  flex relative  flex-col  ">
			{Array.from({ length: 20 }).map((_, j) => (
				<Marquee key={j} speed={0.1}>
					{Array.from({ length: 10 }).map((_, i) => (
						<h1 key={i} className="text-neutral-800 font-audiowide text-5xl ">
							ANAKIN
							<span className="">#</span>
						</h1>
					))}
				</Marquee>
			))}
			<div className="flex flex-col gap-4 items-center absolute bottom-20 left-20 text-white">
				<div className="flex flex-col gap-20">
					<div className="flex flex-col gap-2 text-8xl text-red-600  rounded-3xl">
						<SplitText text={`ANAKIN`} />
						<SplitText text={`SKYWALKER.`} />
						<SplitText text="WEB DEVELOPER." />
					</div>
				</div>
			</div>
		</div>
	);
};
