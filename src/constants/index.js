import {
    web,
    javascript,
    html,
    css,
    tailwind,
    git,
    udemy,
    jinan,
    robofriends,
    nike,
    portfolio,
    react,
    python,
    java
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
      icon: react,
    },
    {
      title: "Java Developer",
      icon: java,
    },
    {
      title: "Python Developer",
      icon: python,
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
      name: "React JS",
      icon: react,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React Developer",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#E6DEDD",
      date: "Started Jun 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Jinan University",
      icon: jinan,
      iconBg: "#383E56",
      date: "Started Feb 2023",
      points: [
        "Developing and maintaining web applications using HTML5, CSS3, JavaScript and React.js.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "RoboFriends",
      description:
        "My first web project using reactjs and tachyons",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tachyons",
          color: "pink-text-gradient",
        },
      ],
      image: robofriends,
      source_code_link: "https://github.com/alielabdo/robofriends",
    },
    {
      name: "Nike with react",
      description:
        "A nike page that shows offers , sales , subscribe , products , testimonials , special offers and more",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/alielabdo/nike-tailwindcss",
    },
    {
      name: "3dPortfolio",
      description:
        "My 3d Portfolio",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/alielabdo/ali_3dportfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };