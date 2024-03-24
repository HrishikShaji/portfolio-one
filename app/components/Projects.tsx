import { data } from "../lib/data";
import { Headings } from "./Headings";
import { Marquee } from "./Marquee";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div id={data.projects.id} className=" flex flex-col gap-10 pb-40">
      <Headings text="PROJECTS" />
      <div className=" flex flex-col gap-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
    </div>
  );
};
