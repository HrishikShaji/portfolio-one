import Image from "next/image";

interface TestimonialCardProps {
	i: number;
	name: string;
	desc: string;
	img: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
	i,
	name,
	desc,
	img,
}) => {
	return (
		<div
			key={i}
			style={{ left: `${(i + 1) * 100}px` }}
			className={`w-[calc(100vw_-_700px)] absolute flex h-[300px]   text-2xl font-semibold`}
		>
			<div className="h-full p-5 w-[30%]  bg-red-500">
				<Image
					className="h-full flex-shrink-0 w-full object-cover"
					height={1000}
					width={1000}
					alt=""
					src={img}
				/>
			</div>
			<div className="flex flex-col gap-2 w-[70%] bg-neutral-800 p-10">
				<h1 className="">{name}</h1>
				<p className="text-sm">{desc}</p>
			</div>
		</div>
	);
};
