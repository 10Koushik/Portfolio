import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const footer = () => {
    return (
        <div
            id="Footer"
            className="flex justify-around p-10 md:p-12 items-center bg-[#1E3A8A]"
        >
            <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white">Get in Touch</h2>
                <p className="text-sm md:text-xl font-normal text-indigo-200">Interested in collaborating or just want to chat?  Feel free to reach out!</p>
            </div>
            <ul className="text-sm md:text-xl text-indigo-200">
                <li className="flex gap-1 items-center ">
                    <MdOutlineEmail size={20} />
                    <a href="mailto:koushik.use@gmail.com" className="hover:underline">
                        koushik.use@gmail.com
                    </a>
                </li>
                <li className="flex gap-1 items-center">
                    <CiLinkedin />
                    <a href="https://www.linkedin.com/in/koushik" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        linkedin.com/koushik
                    </a>
                </li>
                <li className="flex gap-1 items-center">
                    <a href="https://github.com/10Koushik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <FaGithub />
                        github.com/10Koushik
                    </a>
                </li>
                <li className="flex gap-1 items-center">
                    <a href="tel:+918210026543" className="flex items-center gap-1">
                        <FiPhone size={20} />
                        +91-8210026543
                    </a>
                    <span className="mx-1">/</span>
                    <a href="tel:+916205085835" className="flex items-center gap-1">
                        6205085835
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default footer