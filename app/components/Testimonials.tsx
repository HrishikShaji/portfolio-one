"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap/all";
import { Headings } from "./Headings";
import { data } from "@/lib/data";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Testimonials = () => {
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline().fromTo(
        testimonialRefs.current,
        {
          xPercent: (i) => (i + 1) * 100,
        },
        {
          stagger: 0.05,
          xPercent: (i) => i * 25,
        },
      );

      ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        pin: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden w-full flex flex-col gap-10"
    >
      <Headings text="TESTIMONIALS" />
      <div className="p-10 gap-0 relative w-full   h-full text-white  ">
        {data.testimonials.map((item, i) => (
          <div
            key={i}
            ref={(el) => (testimonialRefs.current[i] = el)}
            className={`w-[500px] absolute h-[300px] bg-red-500 py-10 text-2xl font-semibold`}
          >
            <div
              ref={(el) => (overlayRefs.current[i] = el)}
              className="h-full w-full absolute left-0 top-0 bg-red-500 "
            ></div>
            <h1 className="absolute z-10 text-neutral-900">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
