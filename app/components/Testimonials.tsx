"use client";
import { useLayoutEffect, useRef } from "react";
import { Headings } from "./Headings";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/public/data";
import { useIsMount } from "@/hooks/useIsMount";

const Testimonials = () => {
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const { isMounted } = useIsMount();

  useLayoutEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/dist/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);
      let ctx = gsap.context(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline();

        testimonialRefs.current.forEach((el) => {
          tl.fromTo(el, { xPercent: 300 }, { xPercent: 0 });
        });

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
    };
    if (isMounted) {
      animate();
    }
  }, [isMounted]);

  return (
    <div ref={containerRef} className="h-screen  w-full flex flex-col gap-10">
      <Headings text="TESTIMONIALS" />
      <div className="p-10 overflow-hidden gap-0 relative w-full  h-full text-white  ">
        {testimonials.map((item, i) => (
          <div
            ref={(el) => (testimonialRefs.current[i] = el)}
            key={i}
            style={{ left: `${(i + 1) * 100}px` }}
            className={`w-[calc(100vw_-_700px)] absolute flex h-full pb-40   font-semibold`}
          >
            <TestimonialCard img={item.img} desc={item.desc} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
