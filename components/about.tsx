'use client'

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
//import { useSectionInView } from "@/lib/hooks";

export default function About() {
  return (

    <motion.section
    //ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
     <SectionHeading>About me</SectionHeading> 
    <p className="mb-3">
      In May of 2024 Im graduatiing from KYH, where I studied for 2 years to become a {" "}
      <span className="font-medium">Front End Developer</span>, I worked many years with people as  but I always had an itrest in computers. decided to pursue my
      passion for programming. I enrolled in a coding programming 1 java at komvux and took codecademy course.{" "}
      <span className="font-medium">front end development</span>.{" "}
      <br></br>
      <br></br>
      <span className="italic">My favorite part of programming</span> is to create and see how the code make things come alive on the screen.
      I <span className="underline">love</span> the
      feeling of finally figuring out a solution to a problem and see the result. My core stack
      is{" "}
      <span className="font-medium">
        React, Next.js, Node.js, and MongoDB
      </span>
      . I am also familiar with TypeScript, Tailwind css and the process of UX/UI design. I am always looking to
      learn new technologies. 
      <br></br>
      <br></br>
     
      <span className="font-medium"> I am currently looking for a{" "}full-time position</span> as a software
      developer in Stockholm. I would love to work in a company where I can grow and learn from other developers and contribute to a great diverse team.    {" "}
    </p>
<br></br>
    <p>
      <span className="italic">When I'm not coding</span>, I enjoy gooing to the gym, travel playing
      Mario Kart, watching movies, and beeing with my family. I also like{" "}
      <span className="font-medium">learning new things</span>. I am currently
      learning about{" "}
      <span className="font-medium">E-commers platform Litium and getting my a certificate in learning how to code with C#</span>.
      
    </p>
  </motion.section>
);
}