import imgOne from "../public/assets/images/1.jpg";
import imgTwo from "../public/assets/images/2.jpg";
import imgThree from "../public/assets/images/3.jpg";
import imgFour from "../public/assets/images/4.jpg";
import imgFive from "../public/assets/images/5.jpg";

export const data = {
  personal: {
    name: "Anakin Skywalker",
    status: "single",
    position: "Web Developer",
    address: "Tattoine,Outer Rim",
    phone: "1234567890",
    email: "anakinskywalker@gmail.com",
    img: "https://wallpapercave.com/wp/wp5709607.jpg",
    profileImg: "https://wallpapercave.com/wp/wp4507720.jpg",
  },
  navLinks: [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ],
  education: {
    id: "education",
    title: "My Education",
    description: "My Learning Path",
    data: [
      {
        id: 1,
        degreeType: "Bachelor",
        university: "Cambridge University",
        major: "Computer Science",
        startYear: 2004,
        endYear: 2007,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
      {
        id: 2,
        degreeType: "Bachelor",
        university: "University of Tokyo",
        major: "Computer Science",
        startYear: 2008,
        endYear: 2010,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
      {
        id: 3,
        degreeType: "Master",
        university: "Harvard University",
        major: "Computer Science",
        startYear: 2012,
        endYear: 2015,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
    ],
  },

  experience: {
    id: "experience",
    title: "My Experience",
    description: "",
    data: [
      {
        id: 1,
        position: "Software Engineer",
        company: "Adobe",
        startYear: 2015,
        endYear: 2017,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
      {
        id: 2,
        position: "Back-End Developer",
        company: "Google",
        startYear: 2017,
        endYear: 2018,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
      {
        id: 3,
        position: "UI/UX Designer",
        company: "Discord",
        startYear: 2019,
        endYear: "Present",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
      },
    ],
  },
  about: {
    id: "about",
    title: "ABOUT ME",
    description:
      "Hi, I'm Anakin Skywalker, a dynamic full-stack developer driven by a passion for crafting cutting-edge digital solutions. With expertise across the entire development stack, I specialize in building scalable back-end systems using technologies like Node.js and Django, complemented by proficiency in modern front-end frameworks like React and Vue.js. Experienced in database management, I ensure efficient data handling with both relational and NoSQL databases. Embracing DevOps principles, I streamline development processes for seamless integration and deployment. A natural problem solver, I excel in troubleshooting and thrive in collaborative environments. Committed to continuous learning, I stay ahead in this ever-evolving tech landscape. Let's connect and discuss how I can contribute to your project!",
  },
  contact: {
    id: "contact",
    title: "CONTACT ME",
    description: "Let's Discuss What You Want?",
  },
  features: {
    id: "features",
    title: "Features",
    description: "I'm Best At",
    data: [
      {
        id: 1,
        title: "RESPONSIVE DESIGN",
        desc: " Ensuring that websites function seamlessly across all devices, from desktops to smartphones and tablets.",
      },
      {
        id: 2,
        title: "USER-FRIENDLY INTERFACE",
        desc: " Intuitive navigation and layout to enhance user experience and engagement.",
      },
      {
        id: 3,
        title: "SCALABILITY",
        desc: "Building websites that can grow with your client's business, easily accommodating future expansions and updates.",
      },
      {
        id: 4,
        title: "PERFORMANCE",
        desc: "Utilizing efficient coding practices and optimization techniques to ensure fast loading times and smooth performance.",
      },
      {
        id: 5,
        title: "CROSS-BROWSER COMBATIBILITY",
        desc: "Ensuring compatibility with all major web browsers to reach the widest audience possible.",
      },
      {
        id: 6,
        title: "SEARCH ENGINE OPTIMIZTION(SEO)",
        desc: "Implementing SEO best practices to improve visibility and ranking on search engines, driving organic traffic to the website.",
      },
    ],
  },
  hero: {
    id: "home",
    title: "Home",
    headingOne: "I'm Hrishik,",
    headingTwo: "I'm A Web Developer.",
  },
  intro: {
    id: "intro",
    title: "Intro",
    data: ["I CREATE", "COOL", "WEB APPS"],
  },
  projects: {
    id: "projects",
    title: "MY PROJECTS",
    data: [
      {
        id: 1,
        title: "project one",
        img: imgOne,
        tools: "HTML/CSS/JAVASCRIPT",
        year: "2015",
        code: "",
        url: "",
      },
      {
        id: 2,
        title: "project two",
        img: imgTwo,
        tools: "HTML/CSS/JAVASCRIPT",
        year: "2016",
        code: "",
        url: "",
      },
      {
        id: 3,
        title: "project three",
        img: imgThree,
        tools: "HTML/CSS/JAVASCRIPT",
        year: "2017",
        code: "",
        url: "",
      },
      {
        id: 4,
        title: "project four",
        img: imgFour,
        tools: "HTML/CSS/JAVASCRIPT",
        year: "2018",
        code: "",
        url: "",
      },
      {
        id: 5,
        title: "project five",
        img: imgFive,
        tools: "HTML/CSS/JAVASCRIPT",
        year: "2019",
        code: "",
        url: "",
      },
    ],
  },
  skills: {
    id: "skills",
    title: "MY SKILLS",
    data: [
      { name: "HTML", level: 10 },
      { name: "CSS", level: 10 },
      { name: "JAVASCRIPT", level: 9 },
      { name: "TYPESCRIPT", level: 8 },
      { name: "REACT JS", level: 8 },
      { name: "NEXT JS", level: 9 },
      { name: "EXPRESS JS", level: 7 },
      { name: "NODE JS", level: 8 },
      { name: "TAILWIND CSS", level: 9 },
      { name: "GSAP", level: 7 },
      { name: "FRAMER MOTION", level: 7 },
      { name: "MONGODB", level: 7 },
      { name: "POSTGRE SQL", level: 6 },
      { name: "FIREBASE", level: 6 },
      { name: "GIT", level: 8 },
      { name: "LINUX", level: 8 },
    ],
  },
  testimonials: [
    {
      name: "person one",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Working with Anakin was an absolute pleasure! Their expertise in web development not only met but exceeded our expectations. They were responsive, attentive to detail, and delivered a website that perfectly encapsulated our brand's vision. We highly recommend Anakin for anyone seeking top-notch web development services.",
    },
    {
      name: "person two",
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Anakin is a true professional in the field of web development. Their ability to translate our ideas into a functional and visually stunning website was impressive. They demonstrated excellent communication skills throughout the project, ensuring that our needs were met every step of the way. We couldn't be happier with the results!",
    },
    {
      name: "person three",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "I can't speak highly enough of the experience I had working with Anakin. Their technical expertise and creative flair transformed our outdated website into a modern, user-friendly platform. Not only did they deliver on time and within budget, but they also provided valuable insights that enhanced the overall user experience. I wouldn't hesitate to recommend Anakin to anyone looking for top-quality web development services.",
    },
    {
      name: "person four",
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Choosing Anakin for our web development project was one of the best decisions we made. From the initial consultation to the final delivery, they demonstrated a deep understanding of our requirements and consistently exceeded our expectations. Their professionalism, attention to detail, and commitment to excellence are commendable. We're thrilled with the results and look forward to collaborating with Anakin on future projects.",
    },
    {
      name: "person five",
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Working with Anakin was a game-changer for our business. Their expertise in web development helped us revamp our online presence and attract more customers than ever before. Not only did they deliver a visually stunning website, but they also ensured that it was optimized for performance and user engagement. If you're looking for a talented and reliable web developer, look no further than Anakin.",
    },
    {
      name: "person six",
      img: "https://images.pexels.com/photos/4057649/pexels-photo-4057649.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Anakin's dedication to excellence and mastery of web development truly set them apart. They took our project to new heights with their innovative solutions and meticulous attention to detail. Their ability to understand our unique requirements and translate them into a seamless digital experience was remarkable. Working with Anakin was not just a partnership, but a journey towards achieving our online goals. We are immensely grateful for their expertise and highly recommend them to anyone seeking exceptional web development services.",
    },
  ],
};
