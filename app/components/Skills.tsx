const skills = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACT JS", "NEXT JS", "EXPRESS JS", "NODE JS", "TAILWIND CSS", "GSAP", "FRAMER MOTION", "PRISMA", "MONGODB", "POSTGRE SQL", "FIREBASE", "GIT", "LINUX"]

export const Skills = () => {
	return (
		<div className="p-5 w-full h-full text-white grid grid-cols-5 gap-5">
			{skills.map((item) => (
				<h1 key={item} className="text-2xl font-semibold">{item}</h1>
			))}
		</div>
	)
}
