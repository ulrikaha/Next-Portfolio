'use client'

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        In May of 2024, Im graduating from KYH (Higher Vocational Education) where I've spent two years studying to become a &ensp;
        <span className="font-medium">Front End Developer</span>. Before starting my education, I had a long career in healthcare as a personal assistant and nursing assistant.
        I also ran my own business, operating an e-commerce store specializing in clothing and shoes for women. &ensp;
        <br></br>
        <br></br>
        <span>One of the things I</span>{' '}
        <span className="font-medium">love</span>{' '}
        <span>most about programming is the ability to bring various projects to life and witness them in action on the screen.</span>&ensp;
        I have experience with&ensp;
        <span className="font-medium">
          Html, Css, Javascript, Typescript, React, Next.js, TailwindCss, Node.js and MongoDB</span> for mentioned a few.
          &ensp;I've explored UX/UI design using Figma.
          &ensp;
        <span>I have gained practical experience through a recent internship. In this role, I worked on UX design, front-end and back-end development for a CMS handling job advertisements and applications, as well as a career page. </span>
        &ensp;
        I enjoy the diversity of the work and the fact that I am always learning something new. My goal is to become a full-stack developer in the future.
        <br></br>
        <br></br>
        <span> As a person, I'm known for my social personality, dedication, empathy, and collaborative spirit. I thrive in team environments and always strive to create a positive atmosphere while delivering exceptional results to my clients.{' '}</span>
        <span className="font-medium"> I am currently looking for a &ensp; full-time position</span> as a Front-end
        developer in Stockholm.&ensp;(or hybrid/remote work) I would love to work in a company where I can grow and learn from other developers, and contribute to the success of a diverse team.&ensp;
      </p>
      <br></br>
      <p>
        <span className="italic">When I'm not coding</span>, you'll find me either hitting the gym, or unwinding with a game of Mario Kart.
        And ofcourse spending quality time with my family.&ensp;
      </p>
      <br></br>
      <hr className="border-gray-300 my-8" />
      <SectionHeading>Current Learning</SectionHeading>
      <p className="mb-3">
        I'm currently expanding my skills by learning C#.&ensp;
        I'm excited to delve deeper into this technology and further enhance my capabilities as a developer.
      </p>
      <hr className="border-gray-300 my-8" />
    </motion.section>
  );
}