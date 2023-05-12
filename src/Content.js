// import images
import Hero_person from "./assets/images/Hero/person.png";

import flutter from "./assets/images/Skills/flutter.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import git from "./assets/images/Skills/git.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "SAMARTH",
    LastName: "JAIN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience in Web and App Development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Flutter",
        logo: flutter,
      },
      {
        name: "Node js",
        logo: nodejs,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Git",
        logo: git,
      },
      {
        name: "Python",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Web development is the process of building and maintaining websites. It includes web design, web programming, and database management.",
        logo: services_logo1,
      },
      {
        title: "Ui / Ux DESIGNING",
        para: "UI/UX design is the process of designing the user interface and user experience of a product or service. It focuses on making products and services easy to use and enjoyable for users.",
        logo: services_logo2,
      },
      {
        title: "App Development",
        para: "App development is the process of creating and maintaining software applications. It includes software design, software development, and software testing.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Catering Website",
        image: project1,
        link: "https://www.regaliadiners.com",
      },
      {
        title: "Banking Solutions Website",
        image: project2,
        link: "https://vaidik-labs.vercel.app",
      },
      {
        title: "Construction Website",
        image: project3,
        link: "https://meena-build.vercel.app",
      },
    ],
  },
  // Testimonials: {
  //   title: "Testimonials",
  //   subtitle: "MY CLIENT REVIEWS",
  //   testimonials_content: [
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar1,
  //       name: "JOHN DOE",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar2,
  //       name: "Tom Alex",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar3,
  //       name: "Johnny",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar4,
  //       name: "ROBBIN",
  //     },
  //   ],
  // },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hire me as your software developer. I can write code, solve problems, and deliver results.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "jainsamarth549@gmail.com",
        icon: GrMail,
        link: "mailto:jainsamarth549@gmail.com",
      },
      {
        text: "+91 8127471064",
        icon: MdCall,
        link: "https://wa.me/+918127471064",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
