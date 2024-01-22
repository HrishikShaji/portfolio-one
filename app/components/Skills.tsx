import { Marquee } from "./Marquee";

const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT JS",
  "NEXT JS",
  "EXPRESS JS",
  "NODE JS",
  "TAILWIND CSS",
  "GSAP",
  "FRAMER MOTION",
  "PRISMA",
  "MONGODB",
  "POSTGRE SQL",
  "FIREBASE",
  "GIT",
  "LINUX",
];

export const Skills = () => {
  return (
    <div className="pb-40 flex flex-col gap-10">
      <Marquee text="MY SKILLS" number={3} colorIndex={2} />
      <div className="px-10 relative w-full h-full text-white grid grid-cols-4 gap-10">
        {skills.map((item) => (
          <h1 key={item} className="text-2xl font-semibold">
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};
