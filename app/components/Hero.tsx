"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface GetTextProps {
	input: string;
	index: number;
	setIsCompleted: Dispatch<SetStateAction<any[]>>;
}

const GetText: React.FC<GetTextProps> = ({ input, index, setIsCompleted }) => {
	const { text, isRunning } = useTypewriter({ input: input, speed: 100 });
	useEffect(() => {
		if (!isRunning) {
			setIsCompleted((prev) => ({
				...prev,
				[index]: true,
			}));
		}
	}, [isRunning]);

	return (
		<div className="flex gap-[2px]">
			{text}
			{isRunning ? <div className="h-full  w-[1px] bg-white" /> : null}
		</div>
	);
};

export const Hero = () => {
	const lines = [
		"<h1>Hi, I'm Hrishik</h1>",
		"<h2>I'm a Web Developer.</h2>",
		"<button>Let's Talk.</button>",
	];
	const [isCompleted, setIsCompleted] = useState(
		Array(lines.length).fill(false),
	);
	const splitWord = () => {
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
		console.log(isCompleted);
	}, [isCompleted]);

	useEffect(() => {
		gsap.to(".text-animate", {
			y: 0,
			stagger: 0.05,
			duration: 0.05,
			ease: "bounce",
		});
	}, []);

	return (
		<div className="h-screen w-full flex justify-center text-white flex-col gap-40 items-center">
			<div className="flex flex-col gap-4 items-center">
				<div className="flex flex-col gap-[2px]">
					<GetText input={lines[0]} index={0} setIsCompleted={setIsCompleted} />
					{isCompleted[0] ? (
						<GetText
							input={lines[1]}
							index={1}
							setIsCompleted={setIsCompleted}
						/>
					) : null}
					{isCompleted[1] ? (
						<GetText
							input={lines[2]}
							index={2}
							setIsCompleted={setIsCompleted}
						/>
					) : null}
				</div>
				<div className="flex">
					{/*	<motion.h1
						initial={{ x: -1000, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: word.split("").length * 0.05 }}
						className="text-8xl font-bold text-blue-500 "
					>
						{`<h1>`}
					</motion.h1>
					<h1 className="custom-clip text-8xl font-bold flex">{splitWord()}</h1>

					<motion.h1
						initial={{ x: 1000, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: word.split("").length * 0.05 }}
						className="text-8xl font-bold text-blue-500"
					>
						{`</h1>`}
					</motion.h1>*/}
				</div>
				<h1 className="text-6xl font-bold ">
					<span className="text-blue-500">{`<h2>`}</span>
					{`I'm a Web Developer.`}

					<span className="text-blue-500">{`<h2/>`}</span>
				</h1>
			</div>
			<h1 className="text-2xl font-bold ">
				<span className="text-blue-500">{`<button>`}</span>
				{`Let's Talk.`}

				<span className="text-blue-500">{`<button/>`}</span>
			</h1>
		</div>
	);
};
