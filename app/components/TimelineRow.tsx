"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";

interface TimelineRowProps {
  i: number;
  year: number | string;
  position: string;
  place: string;
  desc: string;
}

export const TimelineRow: React.FC<TimelineRowProps> = ({
  i,
  position,
  year,
  place,
  desc,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const elHeight = overlayRef.current?.getBoundingClientRect().height;
      gsap.fromTo(
        overlayRef.current,
        { xPercent: 0 },
        {
          xPercent: i % 2 === 0 ? -100 : 100,
          scrollTrigger: {
            trigger: overlayRef.current,
            start: "top bottom",
            end: `+=${elHeight}`,
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} key={i} className="flex h-[300px] relative w-full">
      <div
        ref={overlayRef}
        className={`${i % 2 === 0 ? "right-0" : "left-0"}  absolute  flex h-full bg-red-500 w-[50%]  mix-blend-difference `}
      ></div>
      <div
        className={`${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} bg-neutral-900 w-full flex items-center h-full`}
      >
        <h1 className="text-red-500 text-6xl font-audiowide w-[50%] text-center">
          {year}
        </h1>
        <div
          className={`${i % 2 === 0 ? "text-left" : "text-right"} px-5 flex text-red-500 flex-col justify-center gap-5`}
        >
          <h1 className=" text-3xl">{position}</h1>
          <div className="flex flex-col gap-1 ">
            <h1 className="text-xl">{place}</h1>
            <h1>{desc}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
