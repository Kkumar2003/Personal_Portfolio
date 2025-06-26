import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


import Portfolio from "../assets/image/Portfolio.png";
import CarWebsite from "../assets/image/CarWebsite.png";
import Weather from "../assets/image/Weather.png";
import Calculator from "../assets/image/calculator.png";
import TodoList from "../assets/image/Todo-list.png";
import TicTac from "../assets/image/TicTac.png";

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with React and Tailwind CSS showcasing my work and skills.",
        tech: ["React", "Tailwind CSS"],
        link: "",
        image: Portfolio,
    },
    {
        title: "Responsive Car Website",
        description: "A responsive car showcase website built with HTML and CSS.",
        tech: ["HTML", "CSS"],
        link: "https://responsive-car-website-nine.vercel.app/",
        image: CarWebsite,
    },
    {
        title: "Weather Webpage",
        description: "A weather app displaying real-time weather data for any city.",
        tech: ["JavaScript", "API"],
        link: "https://weather-check-murex.vercel.app/",
        image: Weather,
    },
    {
        title: "Calculator",
        description: "A simple calculator built with JavaScript.",
        tech: ["JavaScript", "HTML", "CSS"],
        link: "https://calculator-one-blue-34.vercel.app/",
        image: Calculator,
    },
    {
        title: "Todo List",
        description: "A todo list app built with React and styled using Tailwind CSS.",
        tech: ["React", "Tailwind CSS"],
        link: "https://todo-list-psi-pearl.vercel.app/",
        image: TodoList,
    },
    {
        title: "Tic Tac Toe",
        description: "A classic Tic Tac Toe game built with JavaScript, HTML, and CSS.",
        tech: ["JavaScript", "HTML", "CSS"],
        link: "https://tic-tac-game-iota.vercel.app/",
        image: TicTac,
    },
];

const cardVariants = {
    hover: { scale: 1.04, y: -6, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" },
    initial: { scale: 1, y: 0, boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.10)" },
};

export default function ProjectSection() {
    return (
        <section className="w-full min-h-screen bg-gradient-to-tr from-[#0f2027] via-[#2c5364] to-[#232526] py-28 px-4 flex flex-col items-center relative overflow-hidden">
            <div className="mb-20 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 mb-4 tracking-tight drop-shadow-xl">
                    <span className="text-white">Projects</span> Gallery
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                    Dive into my featured works, blending modern web tech with creative, interactive design.
                </p>
            </div>
            <div className="relative w-full max-w-6xl z-10">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full flex flex-col items-center pointer-events-none z-0">
                    <div className="relative h-full w-8 flex items-center">
                        <span className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-cyan-400 via-purple-400 to-transparent rounded-full animate-pulse shadow-[0_0_80px_20px_rgba(34,211,238,0.35)]" />
                        <span className="absolute left-1/2 top-0 -translate-x-1/2 w-16 h-16 bg-gradient-to-tr from-cyan-400 via-purple-400 to-transparent rounded-full blur-2xl opacity-80 animate-bounce-slow" />
                    </div>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-36 gap-x-20 relative">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            className={`
                                group flex flex-col items-center
                                ${idx % 2 === 0 ? "md:justify-self-end pr-10 md:pr-20" : "md:justify-self-start pl-10 md:pl-20"}
                                relative
                            `}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover="hover"
                            variants={cardVariants}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ type: "spring", stiffness: 120, damping: 18, delay: idx * 0.15 }}
                            style={{
                                zIndex: projects.length - idx,
                                marginTop: idx === 0 ? 0 : idx * 36,
                            }}
                        >
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="overflow-hidden rounded-3xl shadow-2xl border-2 border-cyan-400/30 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-[#232526] to-[#0f2027] relative">
                                  
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full aspect-video object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ minHeight: 220, background: "#232526" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-3xl" />
                                </div>
                            </motion.div>
                           
                            <motion.div
                                className={`
                                    w-full bg-gradient-to-br from-[#232526]/90 to-[#0f2027]/80
                                    rounded-3xl shadow-xl border border-cyan-400/20 p-10 flex flex-col justify-center mt-8
                                    ${idx % 2 === 0 ? "items-end text-right" : "items-start text-left"}
                                `}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-tr from-cyan-400/30 to-purple-400/30 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-2xl text-cyan-300 font-bold">{idx + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white drop-shadow">{project.title}</h3>
                                </div>
                                <p className="text-gray-200 mb-5 text-base">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-7 justify-end md:justify-start">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-cyan-600/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-cyan-300 hover:text-purple-300 hover:underline font-semibold transition-colors duration-200"
                                >
                                    View Project &rarr;
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
           
            <style>
                {`
                @keyframes bounce-slow {
                    0%, 100% { transform: translate(-50%, 0); }
                    50% { transform: translate(-50%, 80vh); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 6s cubic-bezier(.6,0,.4,1) infinite;
                }
                `}
            </style>
        </section>
    );
}
