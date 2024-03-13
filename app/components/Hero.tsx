"use client";

import { data } from "../lib/data";
import { Marquee } from "./Marquee";
import { SplitText } from "./SplitText";

const speed = [0.1, 0.2, 0.1, 0.2, 0.1, 0.2, 0.1, 0.2];

export const Hero = () => {
  return (
    <div
      id={data.hero.id}
      className="h-screen w-full pt-20 flex relative  flex-col  "
    >
      {Array.from({ length: 7 }).map((_, j) => (
        <Marquee key={j} speed={speed[j]}>
          {Array.from({ length: 5 }).map((_, i) => (
            <h1 key={i} className="text-neutral-800  text-8xl ">
              ANAIKIN <span className="text-red-500">.</span>
            </h1>
          ))}
        </Marquee>
      ))}
      <div className="flex flex-col gap-4 items-center absolute top-40 left-10 text-white">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-2 text-9xl">
            <SplitText text={data.hero.headingOne} />
            <SplitText text={data.hero.headingTwo} />
          </div>
          <button className="text-6xl text-red-500">
            <SplitText text={`Let's Talk`} />
          </button>
        </div>
      </div>
    </div>
  );
};
