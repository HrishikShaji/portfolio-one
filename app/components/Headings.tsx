import { Marquee } from "./Marquee";

interface HeadingsProps {
  text: string;
}

export const Headings: React.FC<HeadingsProps> = ({ text }) => {
  return (
    <div className="flex flex-col  relative ">
      <h1 className="ml-20 text-red-600  top-0 text-8xl absolute z-10 font-audiowide">
        {text}
      </h1>
      {Array.from({ length: 2 }).map((_, j) => (
        <Marquee speed={0.1} key={j}>
          {Array.from({ length: 14 }).map((_, i) => (
            <h1 key={i} className="text-neutral-800 font-audiowide text-5xl ">
              {text}
              <span className="">#</span>
            </h1>
          ))}
        </Marquee>
      ))}
    </div>
  );
};
