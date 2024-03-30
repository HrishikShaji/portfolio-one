"use client";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

interface ProjectCardProps {
  title: string;
  img: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, img }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(projectRef.current, { scale: 0 });
      gsap.to(projectRef.current, {
        scale: 1,
        ease: "none",
        transformOrigin: "right top",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      gsap.to(projectRef.current, {
        scale: 0,
        ease: "none",
        transformOrigin: "left bottom",
        immediateRender: false,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, cardRef);

    return () => ctx.kill();
  }, []);
  return (
    <div ref={cardRef} className="card  flex flex-col  h-full w-full top-0 ">
      <div className="flex  text-white items-center  py-5 bg-red-600 justify-between ">
        <h1 className="text-3xl text-neutral-800">{title}</h1>
      </div>
      <Image
        ref={projectRef}
        className="h-[calc(100vh-100px)] w-full object-cover"
        height={1000}
        width={1000}
        alt=""
        src={img}
      />
    </div>
  );
};
