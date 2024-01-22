import { Marquee } from "./Marquee";

export const About = () => {
	return (
		<div id="about" className="pb-40 w-full flex flex-col gap-10 ">
			<Marquee text="ABOUT ME" number={3} colorIndex={2} />
			<div className=" text-white px-10 text-2xl">
				{` My name is Hrishik Shaji.I'm 23 years old.I'm from
      Thrissur,Kerala,India.I'm a son,a brother and a good friend for a handful
      of people. After 10th, i took computer science for plus two because i
      loved computers since i grew up playing computer games. As for my Degree i
      chose B.Sc Computer Science,unfortunately i failed some papers not the
      core subjects,but still i had to say goodbye to my degree.After leaving
      computers i tried jobs in other areas and had some success and some
      failures but nothing felt permanent.And then after few years i started
      learning programming, i attended a full stack Web development Bootcamp in
      Udemy,fortunately i completed it and it felt good to be back to the
      computer science.After that i have been teaching myself about
      programming,i learnt new languages and frameworks,implemented them in my
      projects and soon i was able to build working web apps,and i believe i am
      ready now to have a career in web development.For my future employers i
      only have this message: Each and Every Error that stood before me as an
      obstacle stands no more and i will remove them as long as i wish to.Also i
      am hardworking,willing to learn new technologies,exceptionally adaptive to
      all kinds of scenarios.`}
			</div>
		</div>
	);
};
