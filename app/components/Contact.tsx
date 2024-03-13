"use client";
import { useLayoutEffect, useRef } from "react";
import { Marquee } from "./Marquee";
import gsap from "gsap";
import { data } from "../lib/data";

export const Contact = () => {
  const contactRefs = useRef<
    (HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement | null)[]
  >([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      contactRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            delay: 0.5,
            scrollTrigger: {
              trigger: el,
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className=" h-screen flex flex-col justify-center gap-10">
      <Marquee text={data.contact.title} number={2} colorIndex={1}>
        {Array.from({ length: 5 }).map((_, i) => (
          <h1 key={i} className="text-red-500 text-6xl ">
            CONTACT ME
          </h1>
        ))}
      </Marquee>
      <div className="flex w-[50%] flex-col gap-10">
        <h1 className="input text-3xl font-bold">{data.contact.description}</h1>
        <form className="flex flex-col gap-3 items-center ">
          <input
            ref={(el) => (contactRefs.current[0] = el)}
            className="input border-b-2 w-full border-white p-2 bg-transparent"
            type="text"
            placeholder="Name..."
          />
          <input
            ref={(el) => (contactRefs.current[1] = el)}
            className="input border-b-2 border-white p-2 w-full bg-transparent"
            type="email"
            placeholder="Email..."
          />
          <textarea
            ref={(el) => (contactRefs.current[2] = el)}
            className="input border-b-2 border-white bg-transparent p-2 w-full"
            placeholder="Message..."
          />
          <button
            className="input w-full p-2 bg-white text-black text-xl "
            ref={(el) => (contactRefs.current[3] = el)}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};
