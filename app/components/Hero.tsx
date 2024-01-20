"use client";

import { motion } from "framer-motion";

export const Hero = () => {
	return (
		<div className="h-screen w-full flex justify-center text-white flex-col gap-40 items-center">
			<div className="flex flex-col gap-4 items-center">
				<motion.h1
					initial={{ x: 300, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-8xl font-bold "
				>
					<span id="left-tag-one" className="text-blue-500">{`<h1>`}</span>{" "}
					{`Hi,I'm Hrishik.`}
					<span id="right-tag-one" className="text-blue-500">{`<h1/>`}</span>
				</motion.h1>
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
