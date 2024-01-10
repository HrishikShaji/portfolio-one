export const Hero = () => {
  return (
    <div className="h-screen w-full flex justify-center text-white flex-col gap-32 items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-8xl font-bold ">
          <span className="text-blue-500">{`<h1>`}</span> {`Hi,I'm Hrishik.`}
          <span className="text-blue-500">{`<h1/>`}</span>
        </h1>
        <h1 className="text-6xl font-bold ">
          <span className="text-blue-500">{`<h2>`}</span>
          {`I'm a Web Developer.`}

          <span className="text-blue-500">{`<h2/>`}</span>
        </h1>
      </div>
      <h1 className="text-3xl font-bold ">
        <span className="text-blue-500">{`<button>`}</span>
        {`Let's Talk.`}

        <span className="text-blue-500">{`<button/>`}</span>
      </h1>
    </div>
  );
};
