import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface GetTextProps {
  input: string;
  index: number;
  setIsCompleted: Dispatch<SetStateAction<any[]>>;
}

const GetText: React.FC<GetTextProps> = ({ input, index, setIsCompleted }) => {
  const { text, isRunning } = useTypewriter({ input: input, speed: 100 });
  useEffect(() => {
    if (!isRunning) {
      setIsCompleted((prev) => ({
        ...prev,
        [index]: true,
      }));
    }
  }, [isRunning, index, setIsCompleted]);

  return (
    <div className="flex gap-[2px]">
      {text}
      {isRunning ? <div className="h-full  w-[1px] bg-white" /> : null}
    </div>
  );
};

export const Code = () => {
  const lines = [
    "const Hero = ({name,description})=>{",
    "return (",
    "<div>",
    "<h1>Hi, I'm Hrishik</h1>",
    "<h2>I'm a Web Developer.</h2>",
    "<button>Let's Talk.</button>",
    "</div>",
    ")",
    "}",
  ];
  const [isCompleted, setIsCompleted] = useState(
    Array(lines.length).fill(false),
  );
  return (
    <div className="flex flex-col gap-[2px]">
      {lines.map((line, i) => {
        if (i === 0) {
          return (
            <GetText
              key={i}
              input={line}
              index={i}
              setIsCompleted={setIsCompleted}
            />
          );
        }
        return isCompleted[i - 1] ? (
          <GetText
            key={i}
            input={line}
            index={i}
            setIsCompleted={setIsCompleted}
          />
        ) : null;
      })}
    </div>
  );
};
