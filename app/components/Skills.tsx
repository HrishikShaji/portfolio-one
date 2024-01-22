"use client";
import { useEffect, useState } from "react";
import { Marquee } from "./Marquee";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const skills = [
	"HTML",
	"CSS",
	"JAVASCRIPT",
	"TYPESCRIPT",
	"REACT JS",
	"NEXT JS",
	"EXPRESS JS",
	"NODE JS",
	"TAILWIND CSS",
	"GSAP",
	"FRAMER MOTION",
	"PRISMA",
	"MONGODB",
	"POSTGRE SQL",
	"FIREBASE",
	"GIT",
	"LINUX",
];

export const Skills = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const skills = gsap.utils.toArray(".skill");

		skills.forEach((skill: any) => {
			const anim = gsap.fromTo(
				skill,
				{
					autoAlpha: 0,
					y: 50,
				},
				{
					duration: 1,
					autoAlpha: 1,
					y: 0,
					delay: 0.5,
				},
			);
			ScrollTrigger.create({
				trigger: skill,
				animation: anim,
				toggleActions: "play none none none",
				once: true,
			});
		});
	}, [isMounted]);

	return (
		<div className="pb-40 flex flex-col gap-10">
			<Marquee text="MY SKILLS" number={3} colorIndex={2} />
			<div className="px-10 relative w-full h-full text-white grid grid-cols-4 gap-10">
				{skills.map((item) => (
					<h1 key={item} className="skill text-2xl font-semibold">
						{item}
					</h1>
				))}
			</div>
		</div>
	);
};
