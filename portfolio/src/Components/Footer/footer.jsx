import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const footer = () => {
    return (
        <div
            id="Footer"
            className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
        >
            <div>
                <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
                <h3 className="text-sm md:text-2xl font-normal">
                    Feel Free To reach out!
                </h3>
                <a
                    href="../../assets/Koushik.pdf"
                    download="Your_CV.pdf"
                    className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
                >
                    Download CV
                </a>
            </div>
            <ul className="text-sm md:text-xl">
                <li className="flex gap-1 items-center">
                    <MdOutlineEmail size={20} />
                    koushik.use@gmail.com
                </li>
                <li className="flex gap-1 items-center">
                    <CiLinkedin />
                    linkdlin.com/koushik
                </li>
                <li className="flex gap-1 items-center">
                    <FaGithub />
                    github.com/10Koushik
                </li>
                <li className="flex gap-1 items-center">
                    <FiPhone size={20} />
                    +91-8210026543/6205085835
                </li>
            </ul>
        </div>
    )
}

export default footer