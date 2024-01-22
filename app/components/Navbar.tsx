"use client";

import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="bg-neutral-900 text-white  fixed z-50 top-0 w-full p-5 flex justify-between">
			<h1>HRISHIK</h1>
			<div className="flex gap-4">
				<Link href="#home">Home</Link>
				<Link href="#about">About</Link>
				<Link href="#skills">Skills</Link>
				<Link href="#projects">Projects</Link>
				<Link href="#contact">Contact</Link>
			</div>
		</div>
	);
};
