"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const links = [
	{
		url: "#home",
		title: "HOME",
	},
	{
		url: "#about",
		title: "ABOUT",
	},
	{
		url: "#skills",
		title: "SKILLS",
	},
	{
		url: "#projects",
		title: "PROJECTS",
	},
	{
		url: "#contact",
		title: "CONTACT",
	},
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const timeline = useRef<gsap.core.Timeline | undefined>();
	const linkRefs = useRef<(HTMLHeadingElement | null)[]>([]);

	useLayoutEffect(() => { }, []);

	useEffect(() => {
		timeline.current = gsap.timeline({ paused: true });
		gsap.set(menuRef.current, { yPercent: -110 });
		gsap.set(linkRefs.current, { yPercent: 150 });
		timeline.current
			.to(menuRef.current, {
				yPercent: 0,
				duration: 0.75,
			})
			.to(
				linkRefs.current,
				{
					yPercent: 0,
					stagger: 0.05,
				},
				0.5,
			);
	}, []);

	useEffect(() => {
		if (timeline.current) {
			isOpen ? timeline.current.play() : timeline.current.reverse();
		}
	}, [isOpen]);
	return (
		<div className=" text-white  fixed z-50 top-0 w-full   flex flex-col">
			<div className="p-2  flex z-50 gap-2">
				<button onClick={() => setIsOpen(!isOpen)} ref={buttonRef}>
					MENU
				</button>
				<h1 className="font-audiowide text-2xl">HRISHIK</h1>
			</div>
			<div
				className="flex  flex-col justify-center items-center bg-red-500 absolute z-40 w-full gap-4 h-screen"
				ref={menuRef}
			>
				{links.map((item, i) => (
					<Link onClick={() => setIsOpen(false)} href={item.url} key={i} className="overflow-hidden">
						<h1 className="text-6xl" ref={(el) => (linkRefs.current[i] = el)}>
							{item.title}
						</h1>
					</Link>
				))}
			</div>
		</div>
	);
};
