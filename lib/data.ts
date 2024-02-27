import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";


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
        name: "Education",
        hash: "#education",
    },

    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const educationData = [
    {
        title: "Frontend Developer Intern",
        subtitle: "Seemli Sweden AB",
        icon: React.createElement(CgWorkAlt),
        date: "2023-2024, 5 months",
    },
    {
        title: "Frontend Engineer Career Path Certificate",
        subtitle: "Codecademy",
        icon: React.createElement(LuGraduationCap),
        date: "2021-2022",
    },
    {
        title: "Programmering 1 Java", "Sociologi": "Personaladministration",
        subtitle: "Komvux",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
    
    {
        title: "Frontend Developer",
        subtitle: "KYH Stockholm",
        icon: React.createElement(LuGraduationCap),
        date: "2022-2024",
    },
    {
        title: "Frontend Engineer Career Path Certificate",
        subtitle: "Codecademy",
        icon: React.createElement(LuGraduationCap),
        date: "2021-2022",
    },
    {
        title: "Programmering 1 Java", "Sociologi": "Personaladministration",
        subtitle: "Komvux",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
] as const;

export const projectsData = [
    {
        title: "UX-design for a food app",
        subtitle: "School Project, UX-design course",
        description: "The task was to make the ux-design to a food app for ordering food. The app should be responsive and have a good user experience. I used Figma to make the design and prototyping.",
        tags: ["Figma", "UX/UI Design"],
        imageUrl: 
    },
    {
        title: "Real Estate Website",
        description: "A school projekt in html and css course. The task was to come up with a pretend company that needed a corporate website. The website should be responsive. This was my first time making a website with multiple subpages and my first time using Sass.",
        tags: ["HTML", "CSS", "Sass"],
        imageUrl:
    },
    {
        title: "Todo List",
        description: "The task was to make a todo list with JavaScript. The todo list should be responsive and have a good user experience. I used JavaScript to make the functionality and CSS to style the todo list.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: 
    },
  
   


] as const;

export const skillsData = [

    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "UX/UI Design",
    "Responsive Design",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "SaSS",
    "Rest API",
    "Node.js",
    "Express",
    "MongoDB",
    "Postman",
    "Git",
    "GitHub",
    "VS Code",
    "Trello",
    "Figma",
    "Discord",
    ] as const;



