"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../gsap";

export const ContactForm = () => {
	const [isMounted, setIsMounted] = useState(false);
	const contactRefs = useRef<
		(HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement | null)[]
	>([]);

	const containerRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useLayoutEffect(() => {
		if (!isMounted) return;
		let ctx = gsap.context(() => {
			contactRefs.current.forEach((el) => {
				gsap.fromTo(
					el,
					{
						autoAlpha: 0,
						y: 50,
					},
					{
						duration: 1,
						autoAlpha: 1,
						y: 0,
						delay: 0.5,
						scrollTrigger: {
							trigger: el,
							toggleActions: "play none none none",
							once: true,
						},
					},
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, [isMounted]);
	return (
		<form ref={containerRef} className="flex flex-col gap-3 items-center ">
			<input
				ref={(el) => (contactRefs.current[0] = el)}
				className="input border-b-2 w-full border-white p-2 bg-transparent"
				type="text"
				placeholder="Name..."
			/>
			<input
				ref={(el) => (contactRefs.current[1] = el)}
				className="input border-b-2 border-white p-2 w-full bg-transparent"
				type="email"
				placeholder="Email..."
			/>
			<textarea
				ref={(el) => (contactRefs.current[2] = el)}
				className="input border-b-2 border-white bg-transparent p-2 w-full"
				placeholder="Message..."
			/>
			<button
				className="input w-full p-2 bg-white text-black text-xl "
				ref={(el) => (contactRefs.current[3] = el)}
			>
				SEND
			</button>
		</form>
	);
};
