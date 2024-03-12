import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiBootstrap, SiSass, SiMongodb, SiGit, SiGithub, SiVisualstudiocode, SiFigma, SiNextdotjs, SiTrello, SiDiscord, SiCsharp, SiPostman, SiNpm, } from "react-icons/si";
import { FaMobile, FaNode, FaUsers } from "react-icons/fa";
import { TbUxCircle } from "react-icons/tb";
import { RiUserFill } from 'react-icons/ri';
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import uxdesign from "@/public/uxdesign.png";
import dreamestate from "@/public/dreamestate.png"
import todolist from "@/public/todolist.png";
import validateform from "@/public/validateform.png";

export const links = [
    {
        name: "Home",
        hash: "#home",

    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },

    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const educationData = [
    {
        title: "Frontend Developer | Internship",
        subtitle: "Seemli Sweden AB",
        description: "During my internship at Seemli, I worked on both frontend and backend development as well as UX/UI design. I took on a lot of responsibility, especially in developing a CMS for handling job ads and applications, and a connected career website. I primarily used technologies like React, Next.js, Typescript, and TailwindCSS, along with Figma for design work. I also worked with Node.js, MongoDB, and Trello. I also had the opportunity to familiarize myself with some basic C# programming and explore the Litium e-commerce platform. In this role, my team and I were responsible for addressing error reports and implementing requested functionalities from customers for their websites. We effectively broke down these tasks into manageable components and estimated the time required for their completion. I also worked with the agile methodology Scrum.",
        icon: React.createElement(CgWorkAlt),
        date: "2023-2024 (5 months)",
    },
    {
        title: "Frontend Developer",
        subtitle: "KYH Stockholm | Higher Vocational Education",
        description: "Graduating in May 2024, I've spent two years learning Front End Development. Alongside frontend and backend development, I've delved into UX/UI design and collaborated on diverse projects, refining my adaptability and teamwork skills.Throughout my studies, I've gained proficiency in HTML, CSS, JavaScript, React, Next.js, Typescript, TailwindCSS, Sass, Bootstrap, Express, Node.js, and MongoDB. I've also utilized Figma, Trello, and Discord for project management, testing, debugging and learning Git/Github.Furthermore, I've embraced principles of responsive design, accessibility, and agile methodologies like Scrum, enriching my approach to software development.",
        icon: React.createElement(LuGraduationCap),
        date: "2022-2024",
    },
    {
        title: "Frontend Engineer Career Path Certificate",
        subtitle: "Codecademy",
        description: "I completed the Frontend Engineer Career Path with a certificate from Codecademy. I learned about the fundamentals of HTML, CSS and JavaScript. ",
        icon: React.createElement(LuGraduationCap),
        date: "2021-2022",
    },
    {
        title: "Programmering 1 Java", "Sociology": "Personaladministration",
        subtitle: "Komvux | Adult Education",
        description: "I studied Java programming 1 to prepare myself for further studies in technology. Additionally, I took courses in sociology and personal administration at Komvux (Adult Education).",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
    {
        title: "Healthcare Assistant | Undersköterska",
        subtitle: "Salems Kommun",
        description: "I worked as a healthcare assistant in a nursing home, specifically in the dementia ward with 10 residents. My responsibilities included providing care for the elderly, such as personal care, medication administration, activities, and household chores. The focus of our work was to ensure the best possible care for each individual, with an emphasis on their well-being and comfort. Despite the high workload, I collaborated closely with my team to meet the needs of the residents and maintain a supportive environment.",
        icon: React.createElement(CgWorkAlt),
        date: "2020-2022",

    },
    {
        title: "E-commerce manager | Co-owner",
        subtitle: "Affingos | E-commerce Business",
        description: "Co-owner of an e-commerce business specializing in clothing and shoes for women. I worked with marketing, SEO/SEM, was responsible for partnerships and graphic content. Worked in Klarna Merchant.",
        icon: React.createElement(CgWorkAlt),
        date: "2018-2020",
    },
    {
        title: "Healthcare Assistant",
        subtitle: "Moa Lärcentrum | Adult Education",
        description: "1.5 years studies to graduate as Healtcare Assistant (Undersköterska) I learned about healthcare, patient care, and nursing.",
        icon: React.createElement(LuGraduationCap),
        date: "2015-2017",
    },
    {
        title: "Personal Assistant",
        subtitle: "Särnmark Assistans",
        description: "I assisted a person with spinal cord injurie. Such as personal care, rehab training, and household chores. I also worked extra while I was studying.",
        icon: React.createElement(CgWorkAlt),
        date: "2013-2023",
    },
    {
        title: "Personal Assistant",
        subtitle: "Rehab Station Stockholm",
        description: "I assisted people with spinal cord injuriesin, MS and Parkinson's disease with diffrent chores in their daily lives. Such as personal care, rehab training, and household chores.For the most part of these years I worked full-time with a person that had a spinal cord injury and needed 24/7 care.I worked both alone and with a team.",
        icon: React.createElement(CgWorkAlt),
        date: "2013-2017",
    }
] as const;

export const projectsData = [
    {
        title: "Ux-Design & research for Food App",
        description:
            "In this project, I did UX research and designed a food ordering app. The objective was to create a responsive application with a seamless user experience. I used Figma for this.",
        tags: ["Figma", "UX/UI Design"],
        imageUrl: uxdesign,
        projectUrl: "https://www.figma.com/file/CzWRa9pCaRfpFPgJmX8RP9/UX-uppgift-ulrika-hahn?type=design&mode=design&t=I31yz1GLX2JtlbxG-1",
    },
    {
        title: "Todo List",
        description: "A responsive todo list application using JavaScript. This involved implementing functionalities such as adding, deleting, and marking items as done. CSS was applied for styling to enhance the user interface.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: todolist,
        projectUrl: "https://todoli00.netlify.app/",
    },
    {
        title: "Real Estate Website",
        description:
            "For a school HTML/CSS project, I created a responsive corporate website for a fictional real estate company. It was my first time building a multi-page site and using Sass.",
        tags: ["HTML", "CSS", "Sass"],
        imageUrl: dreamestate,
        projectUrl: "https://dream-estate-website.netlify.app/",
    },
    {
        title: "Validating Form",
        description:
            "This project involved creating a form with validation using JavaScript. I implemented functionalities such as checking for empty fields, valid email addresses, and password length. I also used CSS to style the form.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: validateform,
        projectUrl: "https://valifor.netlify.app/",
    },

] as const;

export const skillsData = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "UX/UI - Design", icon: TbUxCircle },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "SaSS", icon: SiSass },
    { name: "Node.js", icon: FaNode },
    { name: "Express", icon: SiJavascript },
    { name: "MongoDB", icon: SiMongodb },
    { name: "C#", icon: SiCsharp },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: SiVisualstudiocode },
    { name: "Figma", icon: SiFigma },
    { name: "Trello", icon: SiTrello },
    { name: "Discord", icon: SiDiscord },
    { name: "Postman", icon: SiPostman },
    { name: "NPM", icon: SiNpm },
    { name: "Responsive Design", icon: FaMobile },
    { name: "Agile Methodologies", icon: FaUsers },
    { name: "Accessibility", icon: RiUserFill },

] as const;


