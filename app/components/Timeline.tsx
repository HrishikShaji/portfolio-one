import { educations, experiences } from "@/public/data";
import { Headings } from "./Headings";
import { TimelineRow } from "./TimelineRow";

const Timeline = () => {
	const educationLength = educations.length;

	return (
		<div className="flex flex-col ">
			<Headings text="JOURNEY"></Headings>
			<div className="flex flex-col py-20 overflow-hidden">
				{educations.map((item, i) => (
					<TimelineRow
						key={i}
						i={i}
						year={item.endYear}
						position={item.major}
						place={item.university}
						desc={item.description}
					/>
				))}
				{experiences.map((item, i) => (
					<TimelineRow
						key={i + educationLength}
						i={i + educationLength}
						year={item.endYear}
						position={item.position}
						place={item.company}
						desc={item.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Timeline;
