'use client';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopBtn() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-4 right-4 flex justify-end"> 
            <div className="bg-[#DB2777] bg-opacity-30 p-4 text-gray-700 hover:text-gray-950 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack">
                <button onClick={scrollToTop}>
                <FaArrowUp />
                </button>
            </div>
        </div>
    );
}
