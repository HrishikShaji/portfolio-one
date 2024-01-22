"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { Box } from "./Box";
import { data } from "../lib/data";
import { useMount } from "../hooks/useMount";

export const Features = () => {
  const { isMounted } = useMount();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted) {
      const pin = document.querySelector(".pin-ref");
      const tar = document.querySelector(".target-ref");
      gsap.to(pin, {
        scrollTrigger: {
          trigger: tar,
          pin: pin,
          start: "top top",
          end: "bottom bottom",
        },
      });
    }
  }, [isMounted]);

  return (
    <div className="h-full w-full flex text-white ">
      <div className="pin-ref h-screen w-[50%]  flex justify-center items-center">
        <div className="flex flex-col gap-0 leading-none text-9xl items-start">
          <h1 className="text-[250px]">{`I'm`}</h1>
          <h1>Best</h1>
          <h1>At</h1>
        </div>
      </div>
      <div className="target-ref flex flex-col gap-4  w-[50%] h-[300vh] items-center justify-around">
        {data.features.data.map((item, i) => (
          <Box item={item} index={i} key={i} />
        ))}
      </div>
    </div>
  );
};
