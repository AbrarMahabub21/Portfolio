import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  GAOtek,
  stl,
  WashIT,
  StoryVerse,
  SpinSphere,
  Therapia,
  ValoHUB,
  VividVoices,
  ChillCraft,
  NoPic,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "GAO Tek Inc.",
    icon: GAOtek,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
      "Implementing responsive design",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Angular Developer Intern",
    company_name: "Streams Tech Ltd",
    icon: stl,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Present",
    points: [
      "Reforming code structures and refactoring existing code to improve maintainability and efficiency.",
      "Writing and implementing test cases to ensure code quality and reliability.",
      "Extending services by writing new code to enhance functionality and scalability.",
      "Contributing to the US-based project 'SpendPlan' by delivering high-quality solutions, including reforming code structures, refactoring existing code, writing test cases, and extending services."



    ],
  },
];

const testimonials = [
  {
    testimonial:
      "will give",
    name: "Zadid Bin Azad",
    designation: "Associate Software Engineer",
    company: "Streams Tech Ltd.",
    image: "src/assets/Zadid bhai.png",
  },
  {
    testimonial:
      "will give",
    name: "Sultan Ahmed Khan",
    designation: "Associate Software Engineer",
    company: "Streams Tech Ltd.",
    image: "",
  },
];

const projects = [
  {
    name: "WashIT",
    description:
      "WashIT provides a user-friendly platform for seamless account creation, order tracking and preference management, while also empowering administrators to efficiently handle orders,payments and overall laundry management",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: WashIT,
    source_code_link: "https://github.com/AbrarMahabub21/SPL-01_WashIt",
  },
  {
    name: "StoryVerse",
    description:
      "A platform allowing users to craft, share, and explore stories. Users can create accounts via Google OAuth, compose public or private stories, edit and delete their own, and browse others' public stories.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "HandleBars",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: StoryVerse,
    source_code_link: "https://github.com/AbrarMahabub21/StoryVerse",
  },
  {
    name: "Therapia",
    description:
      "Therapia customizes programs specifically for shoulder abduction rehabilitation. It also monitors patient progress and adjusts treatments for optimal recovery outcomes.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyQT5",
        color: "green-text-gradient",
      },
      {
        name: "Arduino",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: Therapia,
    source_code_link: "https://github.com/AbrarMahabub21/Therapia",
  },
  {
    name: "SpinSphere",
    description:
      "A small project using Three.JS where user can control the spin by rotating it and color will also be changed when it will rotate",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: SpinSphere,
    source_code_link: "https://github.com/AbrarMahabub21/SpinSphere",
  },
  {
    name: "ValoHUB",
    description:
      "VALOhub provides clear and straightforward guides for Valorant agents, helping new players master unique abilities and effective in-game strategies.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ValoHUB,
    source_code_link: "https://github.com/",
  },
  {
    name: "VividVoices",
    description:
      "Vivid Voices lets users create accounts and chat with friends and family in real time. It supports group chats, media sharing, and real-time indicators like online status and read receipts. The app ensures secure communication with end-to-end encryption and provides a seamless experience across multiple devices.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "green-text-gradient",
      },
      {
        name: "Node.JS",
        color: "pink-text-gradient",
      },
      {
        name: "Express.JS",
        color: "blue-text-gradient",
      },
    ],
    image: VividVoices,
    source_code_link: "https://github.com/AbrarMahabub21/vividvoices",
  },
  {
    name: "ChillCraft",
    description:
      "A React-based website that allows users to create custom ice cream by choosing flavors and toppings, with a real-time visual preview of their creations.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "red-text-gradient",
      }
    ],
    image: ChillCraft,
    source_code_link: "https://github.com/AbrarMahabub21/ChillCraft-Ice-Cream-Dream",
  },
  {
    name: "Movie Recommendation System",
    description:
      "A machine learning-based system where users input a favorite movie, and the system recommends similar movies based on genre, director, and other attributes.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: NoPic,
    source_code_link: "https://github.com/AbrarMahabub21/Movie-Recommendation-System-Machine-Learning-",
  },

  {
    name: "JARVIS",
    description:
      "A Python-based virtual assistant that uses voice activation to convert spoken commands into text replies and provides spoken responses.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: NoPic,
    source_code_link: "https://github.com/AbrarMahabub21/JARVIS",
  },
  {
    name: "DuckQuackology",
    description:
      "A Java-based backend project implementing design patterns like adapters, decorators, factories, and the composite pattern to simulate ducks. It also tracks duck quacks in real time using the observer pattern for comprehensive behavior monitoring.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
    ],
    image: NoPic,
    source_code_link: "https://github.com/AbrarMahabub21/DesignPattern_4502-Project",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
