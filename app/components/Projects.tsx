import { Marquee } from "./Marquee";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	return (
		<div className=" flex flex-col gap-10 pb-40">
			<Marquee text="MY PROJECTS" number={2} colorIndex={1} />
			<div className=" flex flex-col ">
				{Array.from({ length: 5 }).map((_, i) => (
					<ProjectCard key={i} index={i} />
				))}
			</div>
		</div>
	);
};
