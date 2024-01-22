import { Marquee } from "./Marquee";

export const Contact = () => {
  return (
    <div className="w-full text-white h-screen gap-10 flex flex-col  items-center">
      <Marquee text="CONTACT ME" number={2} colorIndex={1} />

      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-bold">{`Let's Discuss What You Want?`}</h1>
        <form className="flex flex-col gap-3 items-center ">
          <input
            className="border-b-2 w-full border-red-500 bg-neutral-700 p-2"
            type="text"
            placeholder="Name..."
          />
          <input
            className="border-b-2 border-red-500 bg-neutral-700 p-2 w-full"
            type="email"
            placeholder="Email..."
          />
          <textarea
            className="border-b-2 border-red-500 bg-neutral-700 p-2 w-full"
            placeholder="Name..."
          />
          <button className="w-full p-2 bg-red-500 text-black text-xl border-2 border-white">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};
