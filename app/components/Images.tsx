"use client";
import Image from "next/image";

export const Images = () => {
	return (
		<>
			<Image
				src={`https://picsum.photos/600/400?random=1`}
				alt="scroll"
				width={600}
				height={400}
			/>
			{Array.from({ length: 10 }).map((_, i) => (
				<div key={i}>
					<h1>{i}</h1>
					<Image
						key={i}
						src={`https://picsum.photos/600/400?random=${i}`}
						alt="scroll"
						width={600}
						height={400}
					/>
				</div>
			))}
		</>
	);
};
