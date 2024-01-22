import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HeroText } from "./HeroText";
import { useMount } from "../hooks/useMount";

interface CodeProps {
  setCode: Dispatch<SetStateAction<boolean>>;
}

export const Code: React.FC<CodeProps> = ({ setCode }) => {
  const { isMounted } = useMount();
  const [isRunning, setIsRunnig] = useState(false);
  const lines = [
    "export const Hero = ({name,description})=>{",
    "        return (",
    "                <div>",
    "                  <h1>`Hi, I'm ${name}`,</h1>",
    "                  <h2>`I'm a ${description}`.</h2>",
    "                  <button>Let's Talk.</button>",
    "               </div>",
    "        )",
    "}",
  ];
  const [isCompleted, setIsCompleted] = useState(
    Array(lines.length).fill(false),
  );

  useEffect(() => {
    if (isMounted) {
      if (isCompleted[lines.length - 1]) {
        const delay = setTimeout(() => {
          setIsRunnig(true);
        }, 1000);

        const removeCode = setTimeout(() => {
          setCode(false);
        }, 2000);

        return () => {
          clearTimeout(delay);
          clearTimeout(removeCode);
        };
      }
    }
  }, [isMounted, isCompleted, lines.length, setCode]);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-[2px]">
        {lines.map((line, i) => {
          if (i === 0) {
            return (
              <HeroText
                key={i}
                input={line}
                index={i}
                setIsCompleted={setIsCompleted}
              />
            );
          }
          return isCompleted[i - 1] ? (
            <HeroText
              key={i}
              input={line}
              index={i}
              setIsCompleted={setIsCompleted}
            />
          ) : null;
        })}
      </div>
      {isCompleted[lines.length - 1] ? (
        <button className="px-3 py-2 rounded-md bg-green-500 text-white">
          {isRunning ? "Running..." : "Run"}
        </button>
      ) : null}
    </div>
  );
};
