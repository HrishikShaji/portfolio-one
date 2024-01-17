const data = ["CLEAN CODE", "REUSABLE", "EFFICIENT"];

export const Parallax = () => {
  return (
    <div className=" mt-[50vh] flex flex-col gap-10 mb-[50vh]  ">
      {data.map((item) => (
        <div
          className="sticky top-[33%] h-[300px] w-[600px] bg-orange-500  rounded-md flex justify-center items-center"
          key={item}
        >
          <div className="rounded-md flex justify-center items-center">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
