"use client";

import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

interface AboutContentProps {
  description: string;
}

export const AboutContent: React.FC<AboutContentProps> = ({ description }) => {
  const paraRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/dist/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);
      if (paraRef.current) {
        new SplitType(paraRef.current, {
          types: "lines",
          lineClass: "split-child",
        });

        const lines = paraRef.current?.querySelectorAll(".split-child");
        lines.forEach((line) => {
          const div = document.createElement("div");
          div.classList.add("inner-div");
          div.textContent = line.textContent;
          line.textContent = "";
          line.appendChild(div);
        });

        gsap.from(".inner-div", {
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top center",
            once: true,
          },
          duration: 1,
          yPercent: 200,
          ease: "none",
        });
      }
    };

    animate();
  }, []);

  return (
    <p
      ref={paraRef}
      className="p-20 text-3xl font-audiowide text-red-600 smooth "
    >
      {description}
    </p>
  );
};
