"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface ProjectCardProps {
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ index }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const nextCard = document.getElementById(`card-${index + 1}`);
    const card = document.getElementById(`card-${index}`);
    const project = document.getElementById(`project-${index}`);
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      tl.fromTo(
        project,
        {
          scale: 0,
          transformOrigin: "right top",
        },
        {
          scale: 1,
        },
      ).fromTo(
        project,
        { scaleX: 1 },
        {
          scaleX: 0,
          transformOrigin: "left top",
          backgroundColor: "red",
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        },
      );
    }
  }, [index, isMounted]);
  return (
    <div
      id={`card-${index}`}
      className="card  flex flex-col gap-10 px-10  h-[100vh] w-full top-0 "
    >
      <div className="flex border-b-2 text-white items-center  pb-10 border-white justify-between ">
        <h1 className="text-3xl">TITLE</h1>
        <h1 className="text-3xl">DESCRIPTION</h1>
      </div>
      <div
        id={`project-${index}`}
        className="h-[calc(100vh-100px)]  w-full bg-neutral-500 rounded-md"
      />
    </div>
  );
};
