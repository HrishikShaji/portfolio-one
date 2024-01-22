"use client";

import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { data } from "../lib/data";
import { useMount } from "../hooks/useMount";

export const Intro = () => {
  const { isMounted } = useMount();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted) {
      document.querySelectorAll(".bar").forEach((bar) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            end: "top 40%",
            scrub: 2.5,
          },
        });
        tl.fromTo(
          bar,
          {
            backgroundColor: "red",
            scaleX: 0,
            opacity: 0,
            transformOrigin: "left",
          },
          {
            scaleX: 1,
            opacity: 1,
            backgroundColor: "white",
          },
        ).to(bar, {
          backgroundColor: "red",
          scaleX: 0,
          opacity: 0,
          transformOrigin: "right",
        });
      });
    }
  }, [isMounted]);
  return (
    <div
      id={data.intro.id}
      className="container h-screen  text-white w-full bg-neutral-900  flex flex-col justify-center items-center"
    >
      {data.intro.data.map((item, i) => (
        <div key={i} className="relative w-full justify-start flex ">
          <div className="h-full absolute w-full flex flex-col  mix-blend-difference">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="leftBar bar w-full  origin-left h-[20%]"
              />
            ))}
          </div>
          <h1 className="text-[150px] leading-none ">{item}</h1>
        </div>
      ))}
    </div>
  );
};
