"use client";
import { useEffect, useState } from "react";
import { Marquee } from "./Marquee";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Contact = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const inputs = gsap.utils.toArray(".input");

		inputs.forEach((input: any) => {
			const anim = gsap.fromTo(
				input,
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
				trigger: input,
				animation: anim,
				toggleActions: "play none none none",
				once: true,
			});
		});
	}, [isMounted]);
	return (
		<div
			id="contact"
			className="w-full text-white h-screen gap-10 flex flex-col  items-center"
		>
			<Marquee text="CONTACT ME" number={2} colorIndex={1} />

			<div className="flex flex-col gap-10">
				<h1 className="input text-3xl font-bold">{`Let's Discuss What You Want?`}</h1>
				<form className="flex flex-col gap-3 items-center ">
					<input
						className="input border-b-2 w-full border-white p-2 bg-transparent"
						type="text"
						placeholder="Name..."
					/>
					<input
						className="input border-b-2 border-white p-2 w-full bg-transparent"
						type="email"
						placeholder="Email..."
					/>
					<textarea
						className="input border-b-2 border-white bg-transparent p-2 w-full"
						placeholder="Message..."
					/>
					<button className="input w-full p-2 bg-white text-black text-xl ">
						SEND
					</button>
				</form>
			</div>
		</div>
	);
};
