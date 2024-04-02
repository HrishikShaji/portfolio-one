import data from "@/public/data.json";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";

const Intro = dynamic(() => import("./components/Intro"));
const About = dynamic(() => import("./components/About"));
const Features = dynamic(() => import("./components/Features"));
const Timeline = dynamic(() => import("./components/Timeline"));
const Skills = dynamic(() => import("./components/Skills"));
const Projects = dynamic(() => import("./components/Projects"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
	return (
		<main className="bg-neutral-900">
			<Hero />
			<Intro />
			<About />
			<Features data={data.features.data} />
			<Timeline
				educationData={data.education.data}
				experienceData={data.experience.data}
			/>
			<Skills data={data.skills.data} />
			<Projects data={data.projects.data} />
			<Testimonials data={data.testimonials} />
			<Contact />
		</main>
	);
}
