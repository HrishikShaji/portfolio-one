import { Headings } from "./Headings";
import { AboutContent } from "./AboutContent";
import data from "@/public/data.json";

const About = () => {
	return (
		<div className=" text-red-500 flex  relative flex-col  w-full  ">
			<Headings text="ABOUT" />
			<AboutContent description={data.about.description} />
		</div>
	);
};

export default About;
