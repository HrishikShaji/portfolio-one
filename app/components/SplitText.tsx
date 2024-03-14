import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

interface SplitTextProps {
	text: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ text }) => {
	const letterRefs = useRef<(HTMLDivElement | null)[]>([]);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(letterRefs.current, { y: 500 });
			gsap.to(letterRefs.current, {
				delay: 1,
				y: 0,
				stagger: 0.05,
				duration: 0.05,
				ease: "bounce",
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<h1
			className="custom-clip flex font-audiowide"
			style={{ whiteSpace: "pre" }}
		>
			{text.split("").map((letter, i) => (
				<div
					ref={(el) => (letterRefs.current[i] = el)}
					className="text-animate  transition transform duration-700"
					key={i}
				>
					{letter}
				</div>
			))}
		</h1>
	);
};
