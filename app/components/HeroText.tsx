import { Dispatch, SetStateAction, useEffect } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface HeroTextProps {
  input: string;
  index: number;
  setIsCompleted: Dispatch<SetStateAction<any[]>>;
}

export const HeroText: React.FC<HeroTextProps> = ({
  input,
  index,
  setIsCompleted,
}) => {
  const { text, isRunning } = useTypewriter({ input: input, speed: 25 });
  useEffect(() => {
    if (!isRunning) {
      setIsCompleted((prev) => ({
        ...prev,
        [index]: true,
      }));
    }
  }, [isRunning, index, setIsCompleted]);

  return (
    <div className="flex gap-[2px]" style={{ whiteSpace: "pre" }}>
      {text}
      {isRunning ? <div className="h-full  w-[1px] bg-white" /> : null}
    </div>
  );
};
