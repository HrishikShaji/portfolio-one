"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

export const Features = () => {
	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		setIsMounted(true)
	}, [])
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const pin = document.querySelector(".pin-ref");
		const tar = document.querySelector(".target-ref");
		if (isMounted) {
			gsap.to(pin, {
				scrollTrigger: {
					trigger: tar,
					pin: pin,
					start: "top top",
					end: "bottom bottom",
					markers: true,
				},
			});
			console.log(pin, tar);
		}
	}, [isMounted]);

	return (
		<div className="h-full w-full flex text-white ">
			<div className="pin-ref h-screen w-[50%] bg-neutral-600 flex justify-center items-center">
				<h1 className=" text-6xl font-bold">{`I'm Best At`}</h1>
			</div>
			<div className="target-ref flex flex-col gap-4 bg-neutral-400 w-[50%] h-[300vh]">
				<h1 className="text-4xl font-bold">CLEAN CODE</h1>
				<h1 className="text-4xl font-bold">REUSABLE COMPONENTS</h1>
				<h1 className="text-4xl font-bold">RESPONSIVE DESIGN</h1>
			</div>
		</div>
	);
};
