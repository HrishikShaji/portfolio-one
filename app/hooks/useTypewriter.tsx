import { useEffect, useRef, useState } from "react";

export const useTypewriter = () => {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const word = "HRISHIK";

	function nextChar() {
		if (index < word.length) {
			const newChar = word.charAt(index);
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
		}, 1000); // Adjust the interval duration to your preference (e.g., 100 milliseconds)

		return () => clearInterval(intervalRef.current);
	}, [index]);

	return { text };
};
