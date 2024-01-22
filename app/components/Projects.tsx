import { Marquee } from "./Marquee";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	return (
		<div className="">
			<Marquee text="MY PROJECTS" number={2} colorIndex={1} />
			<div className=" flex flex-col ">
				{Array.from({ length: 1 }).map((_, i) => (
					<ProjectCard key={i} index={i} />
				))}
			</div>
		</div>
	);
};
