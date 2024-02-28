import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import uxdesign from "@/public/uxdesign.png";
import dreamestate from "@/public/dreamestate.png"
import todolist from "@/public/todolist.png";


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
        title: "Ux-Design & research for Food App",
        description: 
        "In this project, I did UX research and designed a food ordering app. The objective was to create a responsive application with a seamless user experience. I used Figma for this.",
        tags: ["Figma", "UX/UI Design"],
        imageUrl: uxdesign,
    },
    {
        title: "Real Estate Website",
        description: 
        "For a school HTML/CSS project, I created a responsive corporate website for a fictional real estate company. It was my first time building a multi-page site and using Sass.",
        tags: ["HTML", "CSS", "Sass"],
        imageUrl: dreamestate,
    },
    {
        title: "Todo List",
        description: "A responsive todo list application using JavaScript. This involved implementing functionalities such as adding, deleting, and marking items as done. CSS was applied for styling to enhance the user interface.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: todolist,
    },
  ] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "UX/UI - Design",
    "Responsive Design",
    "React",
    "Next.js",
    "TailwindCSS",
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



