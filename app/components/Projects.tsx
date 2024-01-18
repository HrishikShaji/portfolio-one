import { Marquee } from "./Marquee";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="">
      <Marquee text="MY PROJECTS" number={5} />
      {Array.from({ length: 5 }).map((_, i) => (
        <ProjectCard key={i} index={i} />
      ))}
    </div>
  );
};
