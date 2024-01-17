const data = [
  {
    title: "EFFICIENT",
    slope: "1deg",
  },

  {
    title: "CLEAN CODE",
    slope: "-1deg",
  },
  {
    title: "RESPONSIVE",
    slope: "2deg",
  },
  {
    title: "GOOD",
    slope: "-2deg",
  },
];

export const Parallax = () => {
  return (
    <div className="  flex flex-col gap-10 h-full ">
      {data.map((item, i) => (
        <div
          className={`sticky border-2 border-white h-[300px]  w-[600px] bg-orange-500  rounded-md flex justify-center items-center`}
          style={{ top: `${33 + i * 3}%`, rotate: item.slope }}
          key={i}
        >
          <div className="rounded-md flex justify-center items-center">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};
