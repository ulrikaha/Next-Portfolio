'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {

    return (
        <motion.section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-5">Please contact me directly at{" "}
                <a className="underline"
                    href="mailto:ulrikahahn83@gmail.com">
                    ulrikahahn83@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col"
                action={async (formData) => {
                    await sendEmail(formData)
                }}
            >
                <input className="h-14 px-4 rounded-lg border border-black/10 "
                    type="email"
                    name="senderEmail"
                    required
                    placeholder="Your email"
                    maxLength={500}
                />
                <textarea className="h-52 my-3 rounded-lg border border-black/10 p-4"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={500}
                />
                <button type="submit"
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#DB2777] text-white rounded-full outline-none transition-allfocus:scale-110 hover:scale-110 active:scale-105"
                >
                    Submit <FaPaperPlane className="text-xs 
                opacity-70 transition-all
                group-hover:translate-x-1
                group-hover:-translate-y-1" /> {" "}
                </button>
            </form>
        </motion.section>
    )
}
