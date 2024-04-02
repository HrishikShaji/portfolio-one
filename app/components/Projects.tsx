import { Headings } from "./Headings";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
	data: any[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
	return (
		<div className=" flex flex-col w-full h-full ">
			<Headings text="PROJECTS" />
			<div className=" flex flex-col  py-20 w-full h-full">
				{data.map((project, i) => (
					<ProjectCard img={project.img} title={project.title} key={i} />
				))}
			</div>
		</div>
	);
};

export default Projects;
