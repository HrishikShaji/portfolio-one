"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { data } from "../lib/data";
import { useMount } from "../hooks/useMount";
import { Bar } from "./Bar";

export const Intro = () => {
	return (
		<div
			id={data.intro.id}
			className="container h-screen  text-white w-full bg-neutral-900  flex flex-col justify-center items-center"
		>
			{data.intro.data.map((item, i) => (
				<Bar key={i} item={item} />
			))}
		</div>
	);
};
