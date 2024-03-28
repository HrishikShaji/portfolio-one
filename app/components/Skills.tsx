"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { data } from "../lib/data";
import { Headings } from "./Headings";

export const Skills = () => {
  const skillRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      skillRefs.current.forEach((skill) => {
        gsap.fromTo(
          skill,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            delay: 0.5,
            scrollTrigger: {
              trigger: skill,
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.kill();
  }, []);

  return (
    <div ref={containerRef} className="pb-40 flex flex-col gap-10">
      <Headings text="SKILLS" />
      <div className="px-10 relative w-full h-full text-white grid grid-cols-4 gap-10">
        {data.skills.data.map((item, i) => (
          <h1
            key={item}
            ref={(el) => (skillRefs.current[i] = el)}
            className="skill text-2xl font-semibold"
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};
