"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
	children: ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	});
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.1,
				smooth: true,
				smoothWheel: true,
				wheelMultiplier: 0.8,
			}}
		>
			{children}
		</ReactLenis>
	);
}

export default SmoothScroll;
