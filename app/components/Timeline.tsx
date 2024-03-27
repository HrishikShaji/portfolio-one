import { data } from "@/lib/data";

export const Timeline = () => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-4xl text-red-500">MY JOURNEY</h1>
			<div className="flex flex-col">
				{data.education.data.map((item, i) => (
					<div key={i} className="flex h-[300px] w-full">
						<div
							className={`${i % 2 === 0 ? "bg-red-500" : "bg-black"} w-full flex justify-center items-center h-full`}
						>
							{i % 2 === 0 ? (
								<h1 className="text-black text-6xl">{item.endYear}</h1>
							) : (
								<div className="flex text-red-500 flex-col  items-end justify-center gap-5">
									<h1 className=" text-3xl">{item.major}</h1>
									<div className="flex flex-col gap-1 items-end">
										<h1 className="text-xl">{item.degreeType}</h1>
										<h1>{item.university}</h1>
										<h1>{item.description}</h1>
									</div>
								</div>
							)}
						</div>
						<div
							className={`${i % 2 === 0 ? "bg-black" : "bg-red-500"} w-full h-full flex justify-center items-center`}
						>
							{i % 2 === 0 ? (
								<div className="flex text-red-500 flex-col  items-start justify-center gap-5">
									<h1 className=" text-3xl">{item.major}</h1>
									<div className="flex flex-col gap-1 items-start">
										<h1 className="text-xl">{item.degreeType}</h1>
										<h1>{item.university}</h1>
										<h1>{item.description}</h1>
									</div>
								</div>
							) : (
								<h1 className="text-black text-6xl">{item.endYear}</h1>
							)}
						</div>
					</div>
				))}
				{data.experience.data.map((item, i) => (
					<div key={i} className="flex h-[300px] w-full">
						<div
							className={`${(i + 1) % 2 === 0 ? "bg-red-500" : "bg-black"} w-full flex justify-center items-center h-full`}
						>
							{(i + 1) % 2 === 0 ? (
								<h1 className="text-black text-6xl">{item.endYear}</h1>
							) : (
								<div className="flex text-red-500 flex-col  items-end justify-center gap-5">
									<h1 className=" text-3xl">{item.position}</h1>
									<div className="flex flex-col gap-1 items-end">
										<h1 className="text-xl">{item.company}</h1>
										<h1>{item.description}</h1>
									</div>
								</div>
							)}
						</div>
						<div
							className={`${(i + 1) % 2 === 0 ? "bg-black" : "bg-red-500"} w-full h-full flex justify-center items-center`}
						>
							{(i + 1) % 2 === 0 ? (
								<div className="flex text-red-500 flex-col  items-start justify-center gap-5">
									<h1 className=" text-3xl">{item.position}</h1>
									<div className="flex flex-col gap-1 items-start">
										<h1 className="text-xl">{item.company}</h1>
										<h1>{item.description}</h1>
									</div>
								</div>
							) : (
								<h1 className="text-black text-6xl">{item.endYear}</h1>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
