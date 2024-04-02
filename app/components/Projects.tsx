import { projects } from "@/public/data";
import { Headings } from "./Headings";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
	return (
		<div className=" flex flex-col w-full h-full ">
			<Headings text="PROJECTS" />
			<div className=" flex flex-col  py-20 w-full h-full">
				{projects.map((project, i) => (
					<ProjectCard img={project.img} title={project.title} key={i} />
				))}
			</div>
		</div>
	);
};

export default Projects;
