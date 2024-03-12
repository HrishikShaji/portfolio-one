"use client";

import { data } from "../lib/data";
import { SplitText } from "./SplitText";

export const Hero = () => {
  return (
    <div
      id={data.hero.id}
      className="h-screen w-full flex justify-center text-white flex-col gap-40 items-center"
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-2">
            <SplitText text={data.hero.headingOne} />
            <SplitText text={data.hero.headingTwo} />
          </div>
          <button>
            <SplitText text={`Let's Talk`} />
          </button>
        </div>
      </div>
    </div>
  );
};
