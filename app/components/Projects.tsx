import { data } from "../lib/data";
import { Marquee } from "./Marquee";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	return (
		<div id={data.projects.id} className=" flex flex-col gap-10 pb-40">
			<Marquee text={data.projects.title} number={2} colorIndex={1} />
			<div className=" flex flex-col gap-10">
				{Array.from({ length: 5 }).map((_, i) => (
					<ProjectCard key={i} index={i} />
				))}
			</div>
		</div>
	);
};
