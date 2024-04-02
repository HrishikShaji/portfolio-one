import { Headings } from "./Headings";
import { AboutContent } from "./AboutContent";
import { about } from "@/public/data";

const About = () => {
	return (
		<div className=" text-red-500 flex  relative flex-col  w-full  ">
			<Headings text="ABOUT" />
			<AboutContent description={about} />
		</div>
	);
};

export default About;
