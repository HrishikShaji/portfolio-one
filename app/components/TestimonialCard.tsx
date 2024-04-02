import { CustomImage } from "./CustomImage";

interface TestimonialCardProps {
	name: string;
	desc: string;
	img: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
	name,
	desc,
	img,
}) => {
	return (
		<>
			<div className="h-full overflow-hidden flex-shrink-0 w-[50%]">
				<CustomImage height={2000} width={2000} alt="" src={img} />
			</div>
			<div className="flex flex-col h-full gap-2 w-[50%] bg-neutral-800 p-10">
				<h1 className="font-audiowide text-3xl text-red-600">{name}</h1>
				<p className="">{desc}</p>
			</div>
		</>
	);
};
