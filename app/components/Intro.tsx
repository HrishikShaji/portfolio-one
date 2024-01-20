"use client";

import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export const Intro = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll(".bar").forEach((bar) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        },
      });
      tl.fromTo(
        bar,
        { scaleX: 0, opacity: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          opacity: 1,
        },
      ).to(bar, { scaleX: 0, opacity: 0, transformOrigin: "right" });
    });
  }, []);
  return (
    <div className="container h-full p-5 pb-20 text-white w-full bg-neutral-900  flex flex-col justify-center items-center">
      <div className="relative w-full justify-center flex items-center">
        <div className="h-full absolute w-full flex flex-col mix-blend-difference">
          <div className="leftBar bar w-full  origin-left h-[50%] bg-white " />
          <div className="leftBar bar w-full  origin-left h-[50%] bg-white" />
        </div>
        <h1 className="text-9xl font-extrabold">I CREATE</h1>
      </div>
      <div className="relative w-full justify-center flex items-center">
        <div className="h-full absolute w-full flex flex-col mix-blend-difference">
          <div className="leftBar bar w-full  origin-left h-[50%] bg-white " />
          <div className="leftBar bar w-full  origin-left h-[50%] bg-white" />
        </div>
        <h1 className="text-9xl  font-extrabold">COOL</h1>
      </div>
      <div className="relative w-full justify-center flex items-center">
        <div className="h-full absolute w-full flex flex-col mix-blend-difference">
          <div className="leftBar bar w-full  origin-left h-[50%] bg-white " />
          <div className="leftBar bar w-full  origin-left h-[50%] bg-white" />
        </div>
        <h1 className="text-9xl  font-extrabold">WEB APPS</h1>
      </div>
    </div>
  );
};
