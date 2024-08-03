// src/components/About.js

import React from "react";
import resume from "../assets/resume.pdf"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Brian.
                        <br className="hidden lg:inline-block" />An eager Computer Scientist.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a Computer Science student at UT Austin and I'm interested in both the applications of
                        computer science, as well as software engineering. I've held leadership roles, such as being
                        a student mentor and tutor, and have some experience with bioinformatics research. I'm aiming
                        to be more involved with computational research, continuing my leadership roles, and striving
                        to gain more experience in developing software.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                        <a
                            href={resume}
                            className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                            target="_blank"
                            rel="noopener noreferrer">
                            Resume
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./brian.jpg"
                    />
                </div>
            </div>
        </section>
    );
}