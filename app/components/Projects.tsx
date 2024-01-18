import { Marquee } from "./Marquee";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	return (
		<div className="">
			<Marquee text="MY PROJECTS" number={5} />
			<div className=" h-full flex flex-col gap-10 w-full">
				{Array.from({ length: 5 }).map((_, i) => (
					<ProjectCard key={i} index={i} />
				))}
			</div>
		</div>
	);
};
