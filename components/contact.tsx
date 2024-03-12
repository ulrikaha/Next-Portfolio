'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

    return (
        <motion.section
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
            {/* <p className="text-gray-700 -mt-5">Please contact me directly at{" "}
                <a className="underline"
                    href="mailto:ulrikahahn83@gmail.com">
                    ulrikahahn83@gmail.com
                </a>{" "}
                or through this form.
            </p> */}

            <div className="flex justify-between mt-5">
                <div className="flex-1 mr-2">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-2">E-mail</h2>
                        <p className="text-gray-700">
                            <a className="underline" href="mailto:ulrikahahn83@gmail.com">
                                ulrikahahn83@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="flex-1 ml-2">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-2">Phone</h2>
                        <p className="text-gray-700">
                            +46 760 060 179
                        </p>
                    </div>
                </div>
            </div>
            <p className="mt-10">Or contact me through the form below.</p>
            <form
                className="mt-10 flex flex-col"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData)

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Your message has been sent! I'll get back to you as soon as possible.")
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
                <SubmitBtn />
            </form>
        </motion.section>
    )
}