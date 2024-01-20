"use client";

import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const data = ["I CREATE", "COOL", "WEB APPS"];

export const Intro = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
          backgroundColor: "blue",
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
        backgroundColor: "blue",
        scaleX: 0,
        opacity: 0,
        transformOrigin: "right",
      });
    });
  }, []);
  return (
    <div className="container h-screen  text-white w-full bg-neutral-900  flex flex-col justify-center items-center">
      {data.map((item, i) => (
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
