'use client';

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";

export default function Experience() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 text-center">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="white">
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            {(showMore && index < 9) || (!showMore && index < 6) ? (
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
            ) : null}
          </React.Fragment>
        ))}
      </VerticalTimeline>
      <button onClick={() => setShowMore(!showMore)}
        className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-full mt-6 transition duration-300 ease-in-out">
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
}