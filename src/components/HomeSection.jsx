import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import PortfolioImage from "../assets/image/PortfolioImage.jpeg";

const quickLinks = [
  {
    title: "Projects",
    summary: "Browse a curated selection of my web development projects, demonstrating expertise in React, Node.js, and modern web technologies.",
    link: "http://localhost:5173/projects",
  },
  {
    title: "About Me",
    summary: "Discover my professional journey, technical background, and commitment to building impactful digital solutions.",
    link: "http://localhost:5173/about",
  },
  {
    title: "Skills",
    summary: "Explore my technical skill set, including frameworks, languages, and tools I use to deliver high-quality web applications.",
    link: "http://localhost:5173/skills",
  },
];

const HomeSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white font-sans overflow-hidden px-4 py-30">
        
        <motion.div
          className="absolute -top-[100px] -left-[100px] w-[220px] h-[220px] md:w-[300px] md:h-[300px] bg-white/5 rounded-full z-0"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.05, 0.8], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[80px] -right-[80px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-white/10 rounded-full z-0"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        
        <div className="z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-[1100px] gap-y-8 md:gap-12">
         
          <motion.div
            className="flex-1 text-left max-w-[540px] p-6 md:p-10 bg-[#1e3c72d9] rounded-3xl shadow-xl backdrop-blur-sm"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4 tracking-wide"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            >
              Hi, I'm <span className="text-yellow-400">Kartik</span>
            </motion.h1>
            <motion.h2
              className="text-lg md:text-2xl font-normal mb-6 text-blue-100"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
            >
              Beginner <span className="text-orange-300">Mern Stack Developer</span>
            </motion.h2>
            <motion.div
              className="mb-8 p-5 rounded-xl bg-gradient-to-br from-[#223a5f] to-[#2a5298] shadow-lg border-l-4 border-yellow-400"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
            >
              <p className="text-base md:text-lg leading-relaxed text-blue-50 font-medium">
                As a passionate web developer, I specialize in building dynamic, responsive, and user-centric applications using the MERN stack. My approach combines clean code, modern design, and a focus on delivering seamless digital experiences. Explore my portfolio to see how I turn ideas into impactful solutions.
              </p>
            </motion.div>
           
            <motion.div
              className="mb-8 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, type: "spring" }}
            >
              {[
                "HTML", "CSS", "React", "Node.js", "MongoDB", "Express",
                "JavaScript", "Tailwind CSS", "Git", "GitHub"
              ].map(skill => (
                <span key={skill} className="bg-blue-800/70 px-4 py-1 rounded-full text-xs md:text-sm font-semibold shadow">{skill}</span>
              ))}
            </motion.div>
            <motion.a
              href="http://localhost:5173/skills"
              className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-300 text-[#1e3c72] font-semibold rounded-full text-base md:text-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.08 }}
            >
              View My Skills
            </motion.a>
          </motion.div>

          
          <motion.div
            className="flex-1 flex items-center justify-center min-w-[180px] min-h-[240px] md:min-w-[260px] md:min-h-[340px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
          >
            <motion.div
              className="bg-gradient-to-br from-yellow-400 to-orange-300 p-1 md:p-2 rounded-full shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <motion.img
                src={PortfolioImage}
                alt="Portfolio"
                className="w-[180px] h-[240px] md:w-[260px] md:h-[340px] object-cover rounded-2xl shadow-2xl border-4 border-white bg-gray-200 transition-transform duration-300 hover:scale-105"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.7, type: "spring" }}
              />
            </motion.div>
          </motion.div>
        </div>

        
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <span className="text-blue-100 text-sm mb-1">Scroll Down</span>
          <motion.div
            className="w-6 h-10 border-2 border-blue-200 rounded-full flex items-start justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="w-2 h-2 bg-blue-200 rounded-full mt-1" />
          </motion.div>
        </motion.div>
      </section>

      
      <section className="flex flex-col items-center justify-center mt-14 px-4">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
        >
          My Resume
        </motion.h3>
        <motion.div
          className="relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#223a5f] to-[#2a5298] border-4 border-yellow-400"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <iframe
            src="/Kartik_Kumar_Resume_Enhanced (1).pdf"
            title="Kartik Kumar Resume"
            className="w-full h-[400px] md:h-[600px] bg-white"
            frameBorder="0"
          />
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/Kartik_Kumar_Resume_Enhanced.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full font-medium shadow hover:scale-105 transition-transform text-center"
          >
            View Fullscreen
          </a>
          <a
            href="/Kartik_Kumar_Resume_Enhanced.pdf"
            download
            className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-medium shadow hover:scale-105 transition-transform text-center"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

     
      <section className="flex flex-col items-center justify-space-between mt-14 px-4">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
        >
          Quick Links
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {quickLinks.map(({ title, summary, link }) => (
            <motion.div
              key={title}
              className="bg-gradient-to-br from-[#223a5f] to-[#2a5298] rounded-2xl shadow-xl p-7 flex flex-col items-start border-l-4 border-yellow-400 hover:scale-[1.03] transition-transform"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(34,58,95,0.25)" }}
            >
              <h4 className="text-xl font-bold text-yellow-300 mb-2">{title}</h4>
              <p className="text-blue-100 mb-4 font-medium">{summary}</p>
              <a
                href={link}
                className="mt-auto px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-300 text-[#1e3c72] rounded-full font-semibold shadow hover:scale-105 transition-transform"
              >
                Go to {title}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default HomeSection;
