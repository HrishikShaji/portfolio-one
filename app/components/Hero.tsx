"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { Code } from "./Code";

export const Hero = () => {
	const [code, setCode] = useState(true);
	const splitWord = (word: string) => {
		return word.split("").map((letter, i) => (
			<div
				className="text-animate translate-y-[220px] transition transform duration-700"
				key={i}
			>
				{letter}
			</div>
		));
	};

	useEffect(() => {
		gsap.to(".text-animate", {
			y: 0,
			stagger: 0.05,
			duration: 0.05,
			ease: "bounce",
		});
	}, [code]);

	return (
		<div
			id="home"
			className="h-screen w-full flex justify-center text-white flex-col gap-40 items-center"
		>
			<div className="flex flex-col gap-4 items-center">
				{code ? (
					<Code setCode={setCode} />
				) : (
					<div className="flex flex-col gap-20">
						<div className="flex flex-col gap-2" style={{ whiteSpace: "pre" }}>
							<h1 className="custom-clip text-8xl font-bold flex">
								{splitWord("I'm Hrishik,")}
							</h1>
							<h1 className="custom-clip text-8xl font-bold flex">
								{splitWord("I'm A Web Developer.")}
							</h1>
						</div>
						<button>
							<h1
								className="custom-clip text-3xl flex"
								style={{ whiteSpace: "pre" }}
							>
								{splitWord("Let's Talk")}
							</h1>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
