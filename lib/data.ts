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
        title: "Food App",
        subtitle: "School Project, UX-design course",
        description: "This is a project I did on my own. The task was to make the ux-design a food app for ordering food. The app should be responsive and have a good user experience. I used Figma to make the design and prototyping.",
        //icon:
        date: "2022",
    },
    {
        title: "Real Estate Website",
        subtitle: "School Project, Html and CSS course",
        description: "This is a project I did on my own. The task was to come up with a pretend company that needed a corporate website. The website should be responsive. This was my first time making a website with multiple subpages and my first time using Sass.",
        //icon: 
        date: "2022",
    },
    {
        title: "Todo List",
        subtitle: "School Project",
        // icon:
        date: "2022-2023",
    },
    {
        title: "Validation Form",
        subtitle: "School Project",
        // icon: 
        date: "2022",
    },
    { 
        title: "Random Quote Generator",
        subtitle: "School Project",
        // icon:
        date: "2022",

    },
    {
        title: "Number Guessing Game",
        subtitle: "School Project",
        // icon:
        date: "2022",
    },
{
    title: "Recipe Website",
    subtitle: "School Project",


    // icon:
    date: "2022",
}
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



