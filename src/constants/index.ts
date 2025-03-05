import {
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech8,
  tech9,
  tech10,
  project1,
  project3,
  project4,
  project5,
  project6,
  project2,
} from "../assets";

export const navLinks = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const paragraphs = [
  {
    paragraph:
      "Hi, I'm Jalal Amourgha, a passionate and dedicated junior software developer from Morocco. With a strong foundation in web development, I have developed extensive expertise in frontend technologies and practices, ensuring seamless and interactive user experiences. My backend skills are focused on Next.js, MongoDB, and TypeScript, allowing me to build robust and scalable web applications.",
    project: false,
    projects: [],
  },
  {
    paragraph:
      "I embarked on my web development journey in 2022, starting with the Harvard CS50 course and further honing my skills through FreeCodeCamp courses. These rigorous programs have equipped me with a deep understanding of computer science principles and practical coding skills.",
    project: false,
    projects: [],
  },
  {
    paragraph:
      "Despite having no professional work experience yet, I have successfully completed several personal projects that showcase my ability to create dynamic and responsive websites:",
    project: true,
    projects: [
      {
        label: "Twitter Clone",
        paragraph:
          "A comprehensive platform that gives users the same features as X.",
      },
      {
        label: "Animox",
        paragraph: "A website dedicated to rating animes and manga.",
      },
      { label: "Brainwave", paragraph: "A Modern UI/UX website" },
      { label: "Petful", paragraph: "Pet care agency website" },
      {
        label: "Morocco Travels",
        paragraph:
          " A platform for booking hotels, apartments, and houses in Morocco.",
      },
      {
        label: "E-Tech",
        paragraph: "An online store focused on tech products.",
      },
    ],
  },
  {
    paragraph:
      "My commitment to continuous learning and staying updated with the latest industry trends ensures that I am always ready to tackle new challenges and contribute effectively to any development team.",
    project: false,
    projects: [],
  },
  {
    paragraph:
      "Feel free to explore my portfolio to see the projects I've worked on and the skills I've developed. I'm excited about the opportunity to bring my expertise and enthusiasm to a professional setting and make a meaningful impact.",
    project: false,
    projects: [],
  },
];

export const skills = [
  {
    label: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
  },
  {
    label: "frameworks",
    technologies: ["Tailwind CSS", "Sass", "jQuery"],
  },
  {
    label: "Backend",
    technologies: ["Next.JS", "React.JS", "Typescript", "Python", "MongoDB"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Twitter Clone",
    img: project1,
    description:
      "Twitter clone application built with Next.js. Users can register, create posts, like, comment, repost, bookmark posts ans share, search for other users, follow/unfollow them, and see their posts.",
    git_link: "https://github.com/Jalal-Amourgha/Twitter_Clone",
    web_link: "https://twitter-clone-five-zeta.vercel.app/",
    technologies: [tech1, tech2, tech3, tech4, tech10, tech8],
  },

  {
    id: 2,
    name: "Petful",
    img: project2,
    description:
      "Petful pet care platform where users can browse pet products, access health tips, book grooming services, and connect with local pet communities. Featuring easy navigation and trusted resources for all your pet's needs",
    git_link: "",
    web_link: "https://petful-sand.vercel.app/",
    technologies: [tech9, tech3, tech2, tech4],
  },
  {
    id: 6,
    name: "E-Tech",
    img: project6,
    description:
      "E-Tech an ecommerce website for all tech-related products. From the latest smartphones to high-performance laptops. E-Tech offers a wide range of technology products to meet all your needs.",
    git_link: "https://github.com/Jalal-Amourgha/E-Tech",
    web_link: "https://e-tech-chi.vercel.app/",
    technologies: [tech1, tech2, tech3, tech4, tech8],
  },
  {
    id: 3,
    name: "Animox",
    img: project3,
    description:
      "Animox is a website built using Next.js. This platform allows users to search for their favorite anime, manga ... . Filter by diffrent methods, and add their reviews, watchlists, and ratings.",
    git_link: "https://github.com/Jalal-Amourgha/Animox",
    web_link: "https://animox-beta.vercel.app/",
    technologies: [tech1, tech2, tech3, tech4, tech6, tech7, , tech8],
  },

  {
    id: 5,
    name: "Morocco Marvel Travels",
    img: project5,
    description:
      "Morocco Marvel Travels a booking application where you book hotels, houses, and apartments exclusively in Morocco. Allowing users to filter by multiple options, destinations and payment methods.",
    git_link: "https://github.com/Jalal-Amourgha/Morocco-Marvel-Travels",
    web_link: "https://morocco-marvel-travels.vercel.app/",
    technologies: [tech1, tech2, tech3, tech4, tech6, tech8],
  },
  {
    id: 4,
    name: "Brainwave",
    img: project4,
    description:
      "Brainwave - Modern UI/UX website, developed using React.js. Its sleek design and seamless animations. Serving as a reference or inspiration for future modern applications or websites in general.",
    git_link: "https://github.com/Jalal-Amourgha/Brainwave",
    web_link: "https://jalal-amourgha.github.io/Brainwave/",
    technologies: [tech9, tech3, tech4, tech5],
  },
];
