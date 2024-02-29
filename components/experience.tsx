'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";



export default function Experience() {

        return (
            <section id="education" className="scroll-mt-28 mb-28 sm:mb-40 text-center">
                <SectionHeading>My education & experience</SectionHeading>
                <VerticalTimeline>
                    {educationData.map((item, index) => (
                        <React.Fragment key={index}>
                         <VerticalTimelineElement
                          visible={true}
              contentStyle={{
                background: "rgba(255, 0, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 230, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0 text-gray-800">{item.subtitle}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

   


      






