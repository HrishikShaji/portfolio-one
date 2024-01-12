"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const AboutMarquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
  return (
    <div className="overflow-hidden w-full">
      <div ref={slider} className="relative text-white whitespace-nowrap">
        <h1 ref={firstText} className="text-7xl relative m-0 pr-[50px]">
          ABOUT ME ABOUT ME ABOUT ME ABOUT ME
        </h1>
        <h1 ref={secondText} className="text-7xl absolute left-[100%] top-0 ">
          ABOUT ME ABOUT ME ABOUT ME ABOUT ME
        </h1>
      </div>
    </div>
  );
};
