"use client";
import { useEffect, useRef } from "react";
import { Headings } from "./Headings";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/public/data";
import { useIsMount } from "@/hooks/useIsMount";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const Testimonials = () => {
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | undefined>();

  const { isMounted } = useIsMount();

  useIsomorphicLayoutEffect(() => {
    const animate = async () => {
      let ctx = gsap.context(() => {
        if (!containerRef.current) return;

        timeline.current = gsap.timeline();

        testimonialRefs.current.forEach((el) => {
          if (!timeline.current) return;
          timeline.current.fromTo(el, { xPercent: 300 }, { xPercent: 0 });
        });

        ScrollTrigger.create({
          animation: timeline.current,
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
