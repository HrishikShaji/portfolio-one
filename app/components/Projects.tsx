import { Marquee } from "./Marquee";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	return (
		<div className="">
			<Marquee text="MY PROJECTS" number={5} />
			<div className=" flex flex-col ">
				{Array.from({ length: 10 }).map((_, i) => (
					<ProjectCard key={i} index={i} />
				))}
			</div>
		</div>
	);
};
