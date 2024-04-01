"use client";

import { useLayoutEffect, useRef } from "react";
import { data } from "@/lib/data";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const AboutContent = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (paraRef.current) {
      new SplitType(paraRef.current, {
        types: "lines",
        lineClass: "split-child",
      });

      const lines = paraRef.current?.querySelectorAll(".split-child");
      lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("inner-div");
        div.textContent = line.textContent;
        line.textContent = "";
        line.appendChild(div);
      });

      let ctx = gsap.context(() => {
        gsap.from(".inner-div", {
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top center",
            once: true,
          },
          duration: 1,
          yPercent: 200,
          ease: "none",
        });
      }, paraRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <p ref={paraRef} className="text-red-600 smooth ">
      {data.about.description}
    </p>
  );
};
