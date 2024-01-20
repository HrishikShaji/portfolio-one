"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface SpacerProps {
  index: number;
}

export const Spacer: React.FC<SpacerProps> = ({ index }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const spacer = document.getElementById(`spacer-${index}`);

    gsap.fromTo(
      spacer,
      {
        y: 100,
      },
      {
        backgroundColor: "red",
        y: 0,
        scrollTrigger: {
          trigger: spacer,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      },
    );
  }, []);
  return (
    <div
      id={`spacer-${index}`}
      className="h-screen w-full bg-neutral-700 rounded-md"
    ></div>
  );
};
