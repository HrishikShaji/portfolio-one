import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface GetTextProps {
	input: string;
	index: number;
	setIsCompleted: Dispatch<SetStateAction<any[]>>;
}

const GetText: React.FC<GetTextProps> = ({ input, index, setIsCompleted }) => {
	const { text, isRunning } = useTypewriter({ input: input, speed: 25 });
	useEffect(() => {
		if (!isRunning) {
			setIsCompleted((prev) => ({
				...prev,
				[index]: true,
			}));
		}
	}, [isRunning, index, setIsCompleted]);

	return (
		<div className="flex gap-[2px]" style={{ whiteSpace: "pre" }}>
			{text}
			{isRunning ? <div className="h-full  w-[1px] bg-white" /> : null}
		</div>
	);
};

interface CodeProps {
	setCode: Dispatch<SetStateAction<boolean>>;
}

export const Code: React.FC<CodeProps> = ({ setCode }) => {
	const [isRunning, setIsRunnig] = useState(false);
	const lines = [
		"export const Hero = ({name,description})=>{",
		"        return (",
		"                <div>",
		"                  <h1>`Hi, I'm ${name}`,</h1>",
		"                  <h2>`I'm a ${description}`.</h2>",
		"                  <button>Let's Talk.</button>",
		"               </div>",
		"        )",
		"}",
	];
	const [isCompleted, setIsCompleted] = useState(
		Array(lines.length).fill(false),
	);

	useEffect(() => {
		if (isCompleted[lines.length - 1]) {
			const delay = setTimeout(() => {
				setIsRunnig(true);
			}, 1000);

			const removeCode = setTimeout(() => {
				setCode(false);
			}, 2000);

			return () => {
				clearTimeout(delay);
				clearTimeout(removeCode);
			};
		}
	}, [isCompleted]);
	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col gap-[2px]">
				{lines.map((line, i) => {
					if (i === 0) {
						return (
							<GetText
								key={i}
								input={line}
								index={i}
								setIsCompleted={setIsCompleted}
							/>
						);
					}
					return isCompleted[i - 1] ? (
						<GetText
							key={i}
							input={line}
							index={i}
							setIsCompleted={setIsCompleted}
						/>
					) : null;
				})}
			</div>
			{isCompleted[lines.length - 1] ? (
				<button className="px-3 py-2 rounded-md bg-green-500 text-white">
					{isRunning ? "Running..." : "Run"}
				</button>
			) : null}
		</div>
	);
};
