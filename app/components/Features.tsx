"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Box } from "./Box";
import { data } from "../lib/data";

export const Features = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(pinRef.current, {
        scrollTrigger: {
          trigger: targetRef.current,
          pin: pinRef.current,
          start: "top top",
          end: "bottom bottom",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-full w-full flex text-white ">
      <div
        ref={pinRef}
        className=" h-screen w-[50%]  flex justify-center items-center"
      >
        <div className="flex flex-col gap-0 leading-none text-9xl items-start">
          <h1 className="text-[250px]">{`I'm`}</h1>
          <h1>Best</h1>
          <h1>At</h1>
        </div>
      </div>
      <div
        ref={targetRef}
        className=" flex flex-col gap-4  w-[50%] h-[300vh] items-center justify-around"
      >
        {data.features.data.map((item, i) => (
          <Box item={item} key={i} />
        ))}
      </div>
    </div>
  );
};
