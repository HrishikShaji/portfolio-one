import { Marquee } from "./Marquee";

interface HeadingsProps {
  text: string;
}

export const Headings: React.FC<HeadingsProps> = ({ text }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-red-500 text-9xl font-audiowide">{text}</h1>
      <Marquee speed={0.2}>
        {Array.from({ length: 5 }).map((_, i) => (
          <h1 key={i} className="text-neutral-800 font-audiowide text-8xl ">
            {text}
            <span className="text-red-500">.</span>
          </h1>
        ))}
      </Marquee>
    </div>
  );
};
