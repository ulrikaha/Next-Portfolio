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
      <SectionHeading>About Me</SectionHeading>
      <div className="flex justify-center">
        <div className="max-w-5xl text-left">
          <p className="mb-3">
            I graduated in May 2024 from KYH (Higher Vocational Education) with a specialization in
            <br></br>
            <span className="font-medium">Front End Development</span>. Prior to my education, I worked as a personal assistant and nursing assistant. I have also operated my own e-commerce business focusing on women's clothing and shoes.
            <br /><br />
            <span className="font-medium">Programming is my passion</span> because it allows me to bring projects to life and see them in action. I have experience with {'\u00A0'}
            <span className="font-medium">HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, and MongoDB</span>, among others. I have also explored UX/UI design using Figma.
            <br /><br />
            Recently, I completed an internship at Seemli where I gained hands-on experience in full-stack development and UX design, for a CMS managing job advertisements and applications, as well as a career page. This diverse work experience has reinforced my love for continuous learning and tackling new challenges.
            <br /><br />
            My goal is to evolve into a full-stack developer. I am known for my social personality, dedication, empathy and teamwork. I thrive in collaborative environments and aim to create a positive atmosphere while delivering exceptional results.
            <br /><br />
            <span className="font-medium">I am currently seeking a full-time position</span> as a Frontend Developer in Stockholm, with openness to hybrid or remote work. I am eager to join a company where I can grow, learn from other developers and contribute to the success of a diverse team.
          </p>
          <br />
          <p>
            <span className="italic">When I'm not coding</span>, you’ll find me at the gym, enjoying a game of Mario Kart, or spending quality time with my family.
          </p>
        </div>
      </div>
      <br></br>
      <hr className="border-gray-300 my-8" />
    </motion.section>
  );
}
