"use client";

import { useIsMount } from "@/hooks/useIsMount";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { ReactNode, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface MarqueeProps {
  speed: number;
  children: ReactNode;
}

export const Marquee: React.FC<MarqueeProps> = ({ children, speed }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const directionRef = useRef(-1); // Use useRef to store direction value

  const { isMounted } = useIsMount();

  useIsomorphicLayoutEffect(() => {
    const animate = async () => {
      let xPercent = 0;
      let animationId: number;

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
        animationId = requestAnimationFrame(animation);
      };
      animationId = requestAnimationFrame(animation);

      let ctx = gsap.context(() => {
        if (slider.current && isMounted) {
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
        }
      }, slider);

      return () => {
        ctx.revert();
        cancelAnimationFrame(animationId);
      };
    };
    animate();
  }, [isMounted]);

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
