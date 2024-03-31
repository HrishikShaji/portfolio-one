import Image from "next/image";

interface CustomImageProps {
	src: string;
	alt: string;
	priority?: boolean;
}

export const CustomImage: React.FC<CustomImageProps> = ({
	src,
	alt,
	priority,
}) => {
	return (
		<Image
			className=" object-cover "
			src={src}
			alt={alt}
			width={650}
			height={650}
		/>
	);
};
