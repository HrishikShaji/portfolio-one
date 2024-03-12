"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMount } from "../hooks/useMount";

interface BoxProps {
  item: string;
}
export const Box: React.FC<BoxProps> = ({ item }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top center",
          end: "center center",
          scrub: 0.5,
        },
      },
    );
  }, []);
  return (
    <div
      ref={boxRef}
      className="box h-[300px] w-[300px] relative rounded-md  flex justify-center text-center items-center"
    >
      <h1 className="text-4xl font-bold mix-blend-difference z-10">{item}</h1>
      <div
        ref={overlayRef}
        className="overlay absolute top-0 h-full w-full bg-white"
      />
    </div>
  );
};
