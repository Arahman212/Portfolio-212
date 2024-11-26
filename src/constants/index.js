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
  meta,
  starbucks,
  tesla,
  shopify,
  A_ROOM,
  carrent,
  jobit,
  tripguide,
  threejs,
  E_Commerce,
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
    title: "React Js",
    icon: web,
  },
  {
    title: "Javascript/Typescript",
    icon: mobile,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  
  
  {
    title: "Linux/Github",
    icon: creator,
  },
  {
    title: "figma",
    icon: figma,
  },
   {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "Node JS",
    icon: nodejs,
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
    title: "Junior Software Developer",
    company_name: "Luul Solutions LTD",
    icon: "#",
    iconBg: "#383E56",
    date: "01/11/2023 - Present",
    points: [
      "Hands-on experience with React to develop dynamic, responsive interfaces that enhance user experience and improve functionality.",
      "Proficient in Git for version control, collaborating on projects, and managing code changes efficiently.",
      "Experienced with SQL basics to understand and query databases, enhancing frontend-backend integration.",
      "Skilled in Tailwind CSS for rapid styling and creating responsive, modern layouts.",
      "Currently learning full stack development to strengthen backend knowledge and broaden skill sets.",
    ],
  },
  
  
  {
    title: "Kitchen Designer",
    company_name: "Porcelanosa",
    icon: "#",
    iconBg: "#E6DEDD",
    date: "Jan 2014 - Nov 2023",
    points: [
      "Meeting with clients to ascertain the intended functions and appearance of each space.",
      "Anticipating and informing clients of additional features which may be of use to them.",
      "Giving careful consideration to the placement of water and electrical systems to ensure safety.",
      "Creating a plan which details the layout and appearance of all installations and loose furniture.",
      "Working closely with the sales team to ensure that all installations are completed to the highest standard.",
      "Observing prescribed building and safety regulations."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abdi proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abdi does.",
    name: "Imran Khan",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abdi optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Amy Martin",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "A-ROOM",
    description:
      "A-ROOM is a web-based project designed to facilitate the renting of spaces. This project focuses on providing a user-friendly interface for browsing, listing, and renting available spaces. The aim is to create a seamless experience for users looking to find rental spaces, whether for short-term or long-term use.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: A_ROOM,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce",
    description:
      "This showcases a comprehensive eCommerce platform designed and developed to streamline online shopping experiences. The project includes a fully responsive web application with a modern and intuitive user interface, secure payment integration, robust inventory management, and personalized customer interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Next.JS",
        color: "pink-text-gradient",
      },
    ],
    image: E_Commerce,
    source_code_link: "https://github.com/",
  },
  ]
export { services, technologies, experiences, testimonials, projects };
