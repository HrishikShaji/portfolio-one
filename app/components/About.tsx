import { useEffect, useRef } from "react";
import { data } from "../lib/data";
import SplitType from "split-type";
import gsap from "gsap";
import { Headings } from "./Headings";

export const About = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (paraRef.current) {
      const childSplit = new SplitType(paraRef.current, {
        types: "lines",
        lineClass: "split-child",
      });

      const lines = document.querySelectorAll(".split-child");
      lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("inner-div");
        div.textContent = line.textContent;
        line.textContent = "";
        line.appendChild(div);
      });

      let ctx = gsap.context(() => {
        gsap.from(".inner-div", {
          duration: 1.5,
          yPercent: 100,
          ease: "power4",
          stagger: 0.1,
        });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <div
      id={data.about.id}
      className="pb-40 text-red-500 flex  relative flex-col  w-full  "
    >
      <Headings text="ABOUT" />
      <div className=" text-white  p-5 rounded-3xl text-3xl font-audiowide ">
        <p ref={paraRef} className="text-white ">
          {data.about.description}
        </p>
      </div>
    </div>
  );
};
