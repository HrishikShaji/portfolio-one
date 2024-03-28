"use client";
import { Headings } from "./Headings";
import { ProjectCard } from "./ProjectCard";
import { data } from "@/lib/data";

export const Projects = () => {
  return (
    <div id={data.projects.id} className=" flex flex-col gap-10 pb-40">
      <Headings text="PROJECTS" />
      <div className=" flex flex-col gap-10">
        {data.projects.data.slice(0, 5).map((project, i) => (
          <ProjectCard img={project.img} title={project.title} key={i} />
        ))}
      </div>
    </div>
  );
};
