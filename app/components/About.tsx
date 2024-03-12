import { data } from "../lib/data";
import { Marquee } from "./Marquee";

export const About = () => {
	return (
		<div
			id={data.about.id}
			className="pb-40 text-red-500 flex flex-col w-full gap-10 "
		>
			<Marquee text={data.about.title} number={3} colorIndex={2}>
				<h1 className="text-6xl ">ABOUT ME</h1>
				<h1 className="text-6xl ">ABOUT ME</h1>
				<h1 className="text-6xl ">ABOUT ME</h1>
				<h1 className="text-6xl ">ABOUT ME</h1>
				<h1 className="text-6xl ">ABOUT ME</h1>
				<h1 className="text-6xl ">ABOUT ME</h1>
			</Marquee>
			<div className=" text-white px-10 text-2xl">{data.about.description}</div>
		</div>
	);
};
