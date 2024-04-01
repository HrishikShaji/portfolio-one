import { Headings } from "./Headings";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  data: any[];
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <div className=" flex flex-col ">
      <Headings text="PROJECTS" />
      <div className=" flex flex-col  py-20">
        {data.map((project, i) => (
          <ProjectCard img={project.img} title={project.title} key={i} />
        ))}
      </div>
    </div>
  );
};
