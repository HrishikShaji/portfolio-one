"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface MarqueeProps {
  speed: number;
  children: ReactNode;
}

export const Marquee: React.FC<MarqueeProps> = ({ children, speed }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const directionRef = useRef(-1); // Use useRef to store direction value
  useEffect(() => {
    let xPercent = 0;

    const animation = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      xPercent += speed * directionRef.current; // Use directionRef
      requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1,
        onUpdate: (e) => {
          directionRef.current = e.direction * -1; // Update directionRef
        },
      },
    });
  }, []);

  return (
    <div ref={slider} className="overflow-hidden flex">
      <div ref={firstText} className="flex whitespace-pre w-fit  ">
        {children}
      </div>
      <div ref={secondText} className="flex whitespace-pre w-fit  ">
        {children}
      </div>
    </div>
  );
};
