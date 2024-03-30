import { data } from "@/lib/data";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Headings } from "./Headings";

export const Timeline = () => {
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const educationLength = data.education.data.length;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      overlayRefs.current.forEach((el, i) => {
        const elHeight = el?.getBoundingClientRect().height;
        gsap.fromTo(
          el,
          { xPercent: 0 },
          {
            xPercent: i % 2 === 0 ? -100 : 100,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: `+=${elHeight}`,
              scrub: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.kill();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col ">
      <Headings text="JOURNEY"></Headings>
      <div className="flex flex-col py-20 overflow-hidden">
        {data.education.data.map((item, i) => (
          <div key={i} className="flex h-[300px] relative w-full">
            <div
              ref={(el) => (overlayRefs.current[i] = el)}
              className={`${i % 2 === 0 ? "right-0" : "left-0"}  absolute  flex h-full bg-red-500 w-[50%]  mix-blend-difference `}
            ></div>
            <div
              className={`bg-neutral-900 w-full flex justify-center items-center h-full`}
            >
              {i % 2 === 0 ? (
                <h1 className="text-red-500 text-6xl">{item.endYear}</h1>
              ) : (
                <div className="flex text-red-500 flex-col  items-end justify-center gap-5">
                  <h1 className=" text-3xl">{item.major}</h1>
                  <div className="flex flex-col gap-1 items-end">
                    <h1 className="text-xl">{item.university}</h1>
                    <h1>{item.description}</h1>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`bg-neutral-900 w-full h-full flex justify-center items-center`}
            >
              {i % 2 === 0 ? (
                <div className="flex text-red-500 flex-col  items-start justify-center gap-5">
                  <h1 className=" text-3xl">{item.major}</h1>
                  <div className="flex flex-col gap-1 items-start">
                    <h1 className="text-xl">{item.university}</h1>
                    <h1>{item.description}</h1>
                  </div>
                </div>
              ) : (
                <h1 className="text-red-500 text-6xl">{item.endYear}</h1>
              )}
            </div>
          </div>
        ))}
        {data.experience.data.map((item, i) => (
          <div key={i} className="flex relative h-[300px] w-full">
            <div
              ref={(el) => (overlayRefs.current[i + educationLength] = el)}
              className={`${(i + educationLength) % 2 === 0 ? "right-0" : "left-0"}  absolute  flex h-full bg-red-500 w-[50%]  mix-blend-difference `}
            ></div>
            <div
              className={`bg-neutral-900 w-full flex justify-center items-center h-full`}
            >
              {(i + educationLength) % 2 === 0 ? (
                <h1 className="text-red-500 text-6xl">{item.endYear}</h1>
              ) : (
                <div className="flex text-red-500 flex-col  items-end justify-center gap-5">
                  <h1 className=" text-3xl">{item.position}</h1>
                  <div className="flex flex-col gap-1 items-end">
                    <h1 className="text-xl">{item.company}</h1>
                    <h1>{item.description}</h1>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`bg-neutral-900 w-full h-full flex justify-center items-center`}
            >
              {(i + educationLength) % 2 === 0 ? (
                <div className="flex text-red-500 flex-col  items-start justify-center gap-5">
                  <h1 className=" text-3xl">{item.position}</h1>
                  <div className="flex flex-col gap-1 items-start">
                    <h1 className="text-xl">{item.company}</h1>
                    <h1>{item.description}</h1>
                  </div>
                </div>
              ) : (
                <h1 className={`text-red-500 text-6xl`}>{item.endYear}</h1>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
