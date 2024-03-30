"use client";

import { useLayoutEffect, useRef } from "react";
import { data } from "../lib/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Intro = () => {
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(textRefs.current, {
        xPercent: (i) => (i + 1) * 1000,
      });
      gsap.to(textRefs.current, {
        xPercent: 0,
        stagger: {
          from: "start",
          each: 0.05,
        },
        scrollTrigger: {
          trigger: textRefs.current,
          start: "top center",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.kill();
  }, []);
  return (
    <div
      ref={containerRef}
      id={data.intro.id}
      className="py-40  text-white w-full relative bg-neutral-900  flex flex-col overflow-hidden"
    >
      <h1 className="text-9xl font-audiowide mix-blend-difference text-red-500">
        I CREATE{" "}
        {["C", "O", "O", "L"].map((item, i) => (
          <span
            key={i}
            className="text-white inline-block"
            ref={(el) => (textRefs.current[i] = el)}
          >
            {item}
          </span>
        ))}
        WEBPAGES
      </h1>
    </div>
  );
};
