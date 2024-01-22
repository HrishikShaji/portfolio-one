import { data } from "../lib/data";
import { Marquee } from "./Marquee";

export const About = () => {
  return (
    <div id={data.about.id} className="pb-40 w-full flex flex-col gap-10 ">
      <Marquee text={data.about.title} number={3} colorIndex={2} />
      <div className=" text-white px-10 text-2xl">{data.about.description}</div>
    </div>
  );
};
