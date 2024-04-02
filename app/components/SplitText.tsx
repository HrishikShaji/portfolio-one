"use client";
import { useLayoutEffect, useRef } from "react";

interface SplitTextProps {
  text: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ text }) => {
  const letterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/dist/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);
      let ctx = gsap.context(() => {
        gsap.fromTo(
          letterRefs.current,
          { y: 500 },
          {
            delay: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.05,
            ease: "bounce",
          },
        );
      }, containerRef);

      return () => ctx.kill();
    };
    animate();
  }, []);

  return (
    <h1
      ref={containerRef}
      className="custom-clip flex font-audiowide"
      style={{ whiteSpace: "pre" }}
    >
      {text.split("").map((letter, i) => (
        <div
          ref={(el) => (letterRefs.current[i] = el)}
          className="text-animate  transition transform duration-700"
          key={i}
        >
          {letter}
        </div>
      ))}
    </h1>
  );
};
