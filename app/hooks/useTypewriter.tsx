import { useEffect, useRef, useState } from "react";

interface Props {
	input: string;
	speed: number;
}

export const useTypewriter = ({ input, speed }: Props) => {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	function nextChar() {
		if (index < input.length) {
			const newChar = input.charAt(index);
			setIndex((prev) => prev + 1);
			return newChar;
		}
		return ""; // Return an empty string when the word is fully typed
	}

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			const newChar = nextChar();
			if (newChar === "") {
				clearInterval(intervalRef.current);
			} else {
				setText((prev) => prev + newChar);
			}
		}, speed); // Adjust the interval duration to your preference (e.g., 100 milliseconds)

		return () => clearInterval(intervalRef.current);
	}, [index]);

	return { text };
};
