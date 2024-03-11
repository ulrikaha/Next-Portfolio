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
      <p className="mb-3">In May of 2024, I&apos;m graduating from KYH (Higher Vocational Education) where I&apos;ve spent two years studying to become a
        <span className="font-medium">Front End Developer</span>. Before starting my education, I had a long career in healthcare as a personal assistant and nursing assistant.
        I also ran my own business, operating an e-commerce store specializing in clothing and shoes for women. {'\u00A0'}
        <br></br>
        <br></br>
        <span>One of the things I</span>
        <span className="font-medium">love</span>
        <span>most about programming is the ability to bring various projects to life and witness them in action on the screen.</span>
        I have experience with
        <span className="font-medium">
          Html, Css, Javascript, Typescript, React, Next.js, TailwindCss, Node.js and MongoDB</span> for mentioned a few.
        {'\u00A0'}I&apos;ve explored UX/UI design using Figma.
        {'\u00A0'}
        <span>I have gained practical experience through my recent internship at Seemli. I worked on UX design, front-end and back-end development for a CMS handling job advertisements and applications, as well as a career page. </span>
        {'\u00A0'}
        I enjoy the diversity of the work and the fact that I am always learning something new. My goal is to become a full-stack developer in the future.
        <br></br>
        <br></br>
        <span> As a person, I&apos;m known for my social personality, dedication, empathy, and collaborative spirit. I thrive in team environments and always strive to create a positive atmosphere while delivering exceptional results to my clients.</span>
        <span className="font-medium"> I am currently looking for a  full-time position</span> as a Front-end
        developer in Stockholm. Or hybrid/remote work, I would love to work in a company where I can grow and learn from other developers, and contribute to the success of a diverse team.
      </p>
      <br></br>
      <p>
        <span className="italic">When I&apos;m not coding</span>, you&apos;ll find me either hitting the gym, or unwinding with a game of Mario Kart.
        And of course spending quality time with my family.
      </p>
      <br></br>
      <hr className="border-gray-300 my-8" />
      <SectionHeading>Current Learning</SectionHeading>
      <p className="mb-3">
        I&apos;m currently expanding my skills by learning C# and getting a certification.
        I&apos;m also working on two projects, one is a website for adoption of cats and the other is the final project for my education. 
        I will be using React, Next.js, TailwindCss, Node.js and MongoDB for both projects. They will be added to my portfolio when they are finished.
      </p>
      <hr className="border-gray-300 my-8" />
    </motion.section>
  );
}
     