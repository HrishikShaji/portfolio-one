import Image from "next/image";

interface CustomImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export const CustomImage: React.FC<CustomImageProps> = ({
	src,
	alt,
	width,
	height,
}) => {
	console.log("rendered");
	return (
		<Image
			className="  object-cover  "
			src={src}
			alt={alt}
			width={width}
			height={height}
		/>
	);
};
