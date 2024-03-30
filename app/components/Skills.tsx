"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap/all";
import { Headings } from "./Headings";
import { data } from "@/lib/data";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Skills = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef(null);

  const directions = [
    "right",
    "right",
    "right",
    "right",
    "left",
    "left",
    "left",
    "down",
    "down",
    "right",
    "right",
    "right",
    "left",
    "left",
    "left",
    "down",
  ];
  const indexes = [0, 1, 2, 3, 7, 6, 5, 4, 8, 9, 10, 11, 15, 14, 13, 12];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      function getValue(index: number) {
        if (directions[index] === "right") {
          return { x: -110, y: 0 };
        } else if (directions[index] === "left") {
          return { x: 110, y: 0 };
        } else {
          return { x: 0, y: -110 };
        }
      }

      const tl = gsap.timeline();
      indexes.forEach((index) => {
        tl.fromTo(
          overlayRefs.current[index],
          {
            xPercent: getValue(index).x,
            yPercent: getValue(index).y,
          },
          {
            xPercent: 0,
            yPercent: 0,
          },
        );
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        pin: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        onLeave: function (self) {
          let start = self.start;
          self.scroll(self.start);
          self.disable();
          self.animation.progress(1);
          ScrollTrigger.refresh();
          window.scrollTo(0, start);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className=" flex flex-col">
      <Headings text="SKILLS" />
      <div className="p-20  w-full place-items-center h-full text-white grid grid-cols-4 ">
        {data.skills.data.map((item, i) => (
          <div
            key={i}
            ref={(el) => (skillRefs.current[i] = el)}
            className="skill border-y-4 border-neutral-900 bg-neutral-900 overflow-hidden relative flex items-center justify-center w-full h-full py-10 text-2xl font-semibold"
          >
            <div
              ref={(el) => (overlayRefs.current[i] = el)}
              className="h-full w-full mix-blend-difference absolute left-0 top-0 bg-red-500 "
            ></div>
            <h1 className="z-10 text-neutral-900">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
