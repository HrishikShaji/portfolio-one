import { Headings } from "./Headings";
import { AboutContent } from "./AboutContent";

export const About = () => {
  return (
    <div className=" text-red-500 flex  relative flex-col  w-full  ">
      <Headings text="ABOUT" />
      <div className=" text-white  p-20 rounded-3xl text-3xl font-audiowide ">
        <AboutContent />
      </div>
    </div>
  );
};
