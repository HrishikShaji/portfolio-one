"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const data = ["CLEAN CODE", "REUSABLE COMPONENTS", "RESPONSIVE DESIGN"];

interface BoxProps {
	item: string;
	index: number;
}
const Box: React.FC<BoxProps> = ({ item, index }) => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const box = document.getElementById(`box-${index}`);
		const overlay = document.getElementById(`overlay-${index}`);
		if (isMounted) {
			gsap.fromTo(
				overlay,
				{ scaleY: 0 },
				{
					scaleY: 1,
					transformOrigin: "top",
					scrollTrigger: {
						trigger: box,
						start: "top center",
						end: "center center",
						scrub: .5,
						markers: true,
					},
				},
			);
		}
	}, [isMounted]);
	return (
		<div
			id={`box-${index}`}
			className="box h-[300px] w-[300px] relative rounded-md  flex justify-center items-center"
		>
			<h1 className="text-4xl font-bold mix-blend-difference z-10">{item}</h1>
			<div
				id={`overlay-${index}`}
				className="overlay absolute top-0 h-full w-full bg-white"
			/>
		</div>
	);
};

export const Features = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
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
				},
			});
		}
	}, [isMounted]);

	return (
		<div className="h-full w-full flex text-white ">
			<div className="pin-ref h-screen w-[50%]  flex justify-center items-center">
				<div className="flex flex-col gap-0 leading-none text-9xl items-start">
					<h1 className="text-[250px]">{`I'm`}</h1>
					<h1>Best</h1>
					<h1>At</h1>
				</div>
			</div>
			<div className="target-ref flex flex-col gap-4  w-[50%] h-[300vh] items-center justify-around">
				{data.map((item, i) => (
					<Box item={item} index={i} key={i} />
				))}
			</div>
		</div>
	);
};
