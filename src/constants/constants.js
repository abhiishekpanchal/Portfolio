import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  nextjs,
  express,
  java,
  sql,
  tableau,
  powerbi,
  springboot,
  cpp,
  mongodb,
  redux,
} from "../assets";
import quickmeet from "../assets/Quickmeet.png"
import truehomes from '../assets/TrueHomes.png'
import groovebox from '../assets/GrooveBox.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Mongo DB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Redux",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Springboot",
    icon: springboot,
  }, 
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
];

const projects = [
  {
    name: "GrooveBox",
    description:
      "This is a free music streaming web application built with Next.js and powered by the Saavn API. The app allows users to search and stream music from a vast collection of songs available on the Saavn platform.",
    features: [
      "User authentication using NextAuth.js with JWT and OAuth providers.",
      "Redux to Manage app state effectively.",
      "Play, pause, skip, and control the playback of songs.",
      "Users can Create, update and delete their own playlists.",
      "Add songs to favorites in one click.",
      "Auto adds similar songs to the queue.",
      "Swipe and touch gestures for touch-responsive devices.",
      "Display song details such as title, artist, album, and album artwork.",
    ],
    tags: [
      {
        name: "SaavnAPI",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "NextJs",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: groovebox,
    source_code_link: "https://github.com/abhiishekpanchal/GrooveBox",
    live_link: "#",
  },
  {
    name: "Quickmeet",
    description:
      "A web app integrating video calls and collaborative whiteboarding for real-time virtual collaboration, built with HTML, CSS, JavaScript, Socket.io, WebRTC.",
    features: [
      "Users can create a room and invite others to join the room using a unique room code.",
      "Users can draw on the whiteboard and the changes will be reflected in real-time to all the users in the room.",
    ],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "orange-text-gradient",
      },
      {
        name: "WebRTC",
        color: "blue-text-gradient",
      },
    ],
    image: quickmeet,
    source_code_link: "https://github.com/abhiishekpanchal/Meet-WhiteBoard",
    live_link: "https://meet-whiteboard.onrender.com/",
  },
  {
    name: "TrueHomes",
    description:
      "A MERN stack-based real estate platform allowing users to view properties for rent and sale, create listings with images, and search, sort, and filter properties efficiently. It offers a responsive design for seamless browsing on any device.",
    features: [
      "Property Listings: Browse properties for rent and sale with detailed info and images.",
      "Create Listings: Add and manage your property listings with images and descriptions.",
      "Search & Filter: Find properties by location, price, type, and more with powerful filters.",
      "Persistent Storage: Data is saved in localStorage, ensuring listings persist after page refresh.",
    ],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "ReactJs",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "orange-text-gradient",
      },
    ],
    image: truehomes,
    source_code_link: "https://github.com/abhiishekpanchal/True-home",
    live_link: "https://true-homes.onrender.com/",
  },
];

export {
  services,
  technologies,
  projects,
};
