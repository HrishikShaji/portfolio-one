"use client";

import gsap from "gsap";
import { useEffect } from "react";

export const Marquee = () => {
  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    let tween = gsap.to(".marquee-part", {
      xPercent: -100,
      duration: 1,
      ease: "linear",
    });

    gsap.set(".marquee-inner", { xPercent: 0 });

    window.addEventListener("scroll", function () {
      const newScroll = window.scrollY;

      if (newScroll > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = newScroll;
    });
  }, []);

  return (
    <div className="marquee text-white">
      <div className="marquee-inner">
        <div className="marquee-part text-7xl">
          ABOUT ME<span className="text-red-500"> ABOUT ME</span>
        </div>
        <div className="marquee-part text-7xl">ABOUT ME ABOUT ME</div>
        <div className="marquee-part text-7xl">ABOUT ME ABOUT ME</div>
      </div>
    </div>
  );
};
