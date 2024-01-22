"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMount } from "../hooks/useMount";

interface BoxProps {
  item: string;
  index: number;
}
export const Box: React.FC<BoxProps> = ({ item, index }) => {
  const { isMounted } = useMount();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted) {
      const box = document.getElementById(`box-${index}`);
      const overlay = document.getElementById(`overlay-${index}`);
      gsap.fromTo(
        overlay,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          scrollTrigger: {
            trigger: box,
            start: "top center",
            end: "center center",
            scrub: 0.5,
          },
        },
      );
    }
  }, [isMounted, index]);
  return (
    <div
      id={`box-${index}`}
      className="box h-[300px] w-[300px] relative rounded-md  flex justify-center text-center items-center"
    >
      <h1 className="text-4xl font-bold mix-blend-difference z-10">{item}</h1>
      <div
        id={`overlay-${index}`}
        className="overlay absolute top-0 h-full w-full bg-white"
      />
    </div>
  );
};
