import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import uxdesign from "@/public/uxdesign.png";
import dreamestate from "@/public/dreamestate.png"
import todolist from "@/public/todolist.png";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiBootstrap, SiSass, SiMongodb, SiGit, SiGithub, SiVisualstudiocode, SiFigma, SiNextdotjs, SiTrello, SiDiscord, SiCsharp, } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbUxCircle } from "react-icons/tb";

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
        description: "I did my LIA (Lärande i arbete) at Seemli, where I worked as a frontend developer. I worked with React, Next.js, and TailwindCSS. I also worked with Figma for UI/UX design.",
        icon: React.createElement(CgWorkAlt),
        date: "2023-2024, 5 months",
    },
    {
        title: "Frontend Developer",
        subtitle: "KYH Stockholm",
        description: "I am currently studying to become a frontend developer at KYH Stockholm. I am learning about web development, UX/UI design, and programming. I am also learning about project management and agile methodologies.",
        icon: React.createElement(LuGraduationCap),
        date: "2022-2024",
    },
    {
        title: "Frontend Engineer Career Path Certificate",
        subtitle: "Codecademy",
        description: "I completed the Frontend Engineer Career Path Certificate at Codecademy. I learned about HTML, CSS, JavaScript",
        icon: React.createElement(LuGraduationCap),
        date: "2021-2022",
    },
    {
        title: "Programmering 1 Java", "Sociologi": "Personaladministration",
        subtitle: "Komvux",
        description: "I studied Java programming and sociology at Komvux. I also studied personal administration.",
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

] as const;


