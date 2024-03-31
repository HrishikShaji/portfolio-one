"use client";
import { Headings } from "./Headings";
import { ProjectCard } from "./ProjectCard";
import { data } from "@/lib/data";

export const Projects = () => {
  return (
    <div id={data.projects.id} className=" flex flex-col ">
      <Headings text="PROJECTS" />
      <div className=" flex flex-col  py-20">
        {data.projects.data.map((project, i) => (
          <ProjectCard img={project.img} title={project.title} key={i} />
        ))}
      </div>
    </div>
  );
};
