import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import letsUpgradeLogo from "../assets/image/letsupgrade.png";
import hackerRankLogo from "../assets/image/hackerrank.png";
import simplilearnLogo from "../assets/image/simplilearn.png";
import freeCodeCampLogo from "../assets/image/freecode.jpg";

const educations = [
    {
        degree: "B.Tech in Computer Science",
        institution: "IEC University Baddi (H.P.)",
        year: "2021 - 2025",
    },
    {
        degree: "Senior Secondary Education",
        institution: "RockFord Public School, Una",
        year: "2020 - 2021",
    },
];

const certificates = [
    {
        title: "Tailwind CSS Bootcamp",
        issuer: "LetsUpgrade",
        logo: letsUpgradeLogo,
        issued: "Jun 2025",
        credential: "kkumar2003-rwd",
        skills: ["Tailwind CSS"],
        link: "https://verify.letsupgrade.in/certificate/LUETCJUN125134",
    },
    {
        title: "JavaScript (Basic) – HackerRank Skill Certification",
        issuer: "HackerRank",
        logo: hackerRankLogo,
        issued: "May 2025",
        credential: "kkumar2003-rwd",
        skills: ["JavaScript"],
        link: "https://www.hackerrank.com/certificates/adebe5d2b85b",
    },
    {
        title: "JavaScript for Beginners – Simplilearn SkillUp",
        issuer: "Simplilearn",
        logo: simplilearnLogo,
        issued: "May 2025",
        credential: "kkumar2003-rwd",
        skills: ["JavaScript"],
        link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODQxMzIwOF8xODE0MDg0MTc0ODcwODI1OTc1OS5wbmciLCJ1c2VybmFtZSI6IkthcnRpayBLdW1hciJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4212%2FJavaScript-for-Beginners%2F%28certificate%2Fdownload-skillup%2F%2Fcertificate%3Acertificate-locked-new%29&%24web_only=true&_branch_match_id=1466503983057064576&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVTwu2KEj1yzbxD0myrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDABrPtr5BAAAA",
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        logo: freeCodeCampLogo,
        issued: "May 2025",
        credential: "kkumar2003-rwd",
        skills: ["HTML5", "CSS"],
        link: "https://www.freecodecamp.org/certification/kkumar2003/responsive-web-design",
    },
];

const hobbies = [
    "Coding",
    "Reading Tech Blogs",
    "Playing online games",
    "Traveling",
];

const futureGoals = [
    "Become a Full Stack Developer",
    "Contribute to Open Source",
    "Build Scalable Web Apps",
    "Learn Cloud Technologies",
];

export default function Aboutus() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-40 px-2 flex flex-col items-center">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-6 flex flex-col items-center mb-8"
            >
                <img
                    src="https://th.bing.com/th/id/OIP.1Em94uYJAcJWRC8oz4HMgwHaHa?r=0&rs=1&pid=ImgDetMain"
                    alt="Kartik Kumar"
                    className="w-28 h-28 rounded-full border-4 border-purple-200 shadow-lg object-cover mb-3"
                />
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-600 to-pink-500 drop-shadow-lg">
                    Kartik Kumar
                </h1>
                <p className="text-lg text-gray-700 mt-1 text-center">
                    MERN Stack Developer | Tech Enthusiast | Lifelong Learner
                </p>
                <div className="flex gap-4 mt-4">
                    <a href="mailto:Kartikkumar7453@gmail.com" className="text-blue-600 underline hover:text-purple-700 text-sm">Email</a>
                    <a href="https://github.com/Kkumar2003" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-sm">GitHub</a>
                    <a href="https://www.linkedin.com/in/kartik-kumar-719748264/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-sm">LinkedIn</a>
                </div>
            </motion.div>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col gap-3"
                >
                    <h2 className="text-xl font-bold text-purple-700 mb-2">About Me</h2>
                    <p className="text-gray-700">
                        Hi, I'm <span className="font-bold text-purple-700">Kartik Kumar</span>, a developer passionate about building interactive and user-friendly web applications. I love learning new technologies and collaborating on exciting projects.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>
                            Focused on mastering the <span className="font-semibold text-blue-700">MERN Stack</span>.
                        </li>
                        <li>
                            Interested in front-end development with <span className="font-semibold text-blue-700">React</span>.
                        </li>
                        <li>
                            Open to new opportunities and challenges in web development.
                        </li>
                    </ul>
                    <div className="text-gray-700 text-sm mt-2">
                        <span className="font-semibold">Pronouns:</span> he/him<br />
                        <span className="font-semibold">Fun fact:</span> I enjoy learning new languages and exploring emerging technologies.
                    </div>
                </motion.section>

                
                <motion.section
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/90 rounded-2xl shadow-xl p-6"
                >
                    <h2 className="text-xl font-bold text-blue-600 mb-2">Education</h2>
                    <ul className="space-y-4">
                        {educations.map((edu, idx) => (
                            <li key={idx} className="border-l-4 border-purple-400 pl-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-md shadow hover:scale-105 hover:bg-purple-100/60 transition-all duration-300">
                                <span className="font-bold text-purple-700">{edu.degree}</span> <br />
                                <span className="text-gray-600">{edu.institution}</span> <br />
                                <span className="text-sm text-gray-400">{edu.year}</span>
                            </li>
                        ))}
                    </ul>
                </motion.section>

                
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/90 rounded-2xl shadow-xl p-6"
                >
                    <h2 className="text-xl font-bold text-pink-600 mb-2">Experience</h2>
                    <p className="text-gray-700">
                        Currently working as a <span className="font-semibold text-purple-600">Trainee</span> at <span className="font-semibold text-blue-700">Sensational Solution Pvt. Ltd.</span>, focusing on the MERN stack and developing projects to enhance my skills and career growth.
                    </p>
                </motion.section>

                
                <div className="flex flex-col gap-6">
                
                    <motion.section
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white/90 rounded-2xl shadow-xl p-6"
                    >
                        <h2 className="text-xl font-bold text-cyan-600 mb-2">Hobbies</h2>
                        <ul className="flex flex-wrap gap-3">
                            {hobbies.map((hobby, idx) => (
                                <li
                                    key={idx}
                                    className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-1 rounded-full shadow hover:bg-purple-200 hover:text-purple-900 transition-all duration-300 cursor-pointer text-sm"
                                >
                                    {hobby}
                                </li>
                            ))}
                        </ul>
                    </motion.section>

                    
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white/90 rounded-2xl shadow-xl p-6"
                    >
                        <h2 className="text-xl font-bold text-green-600 mb-2">Future Goals</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {futureGoals.map((goal, idx) => (
                                <li
                                    key={idx}
                                    className="text-gray-700 text-base transition-colors duration-300 hover:text-purple-600 cursor-pointer"
                                >
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </motion.section>
                </div>
            </div>

            
            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-2xl p-6 mt-8"
            >
                <h2 className="text-xl font-bold text-yellow-600 mb-4 text-center">Licenses &amp; Certifications</h2>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {certificates.map((cert, idx) => (
                        <div
                            key={idx}
                            className="min-w-[220px] flex-shrink-0 flex flex-col items-center bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow p-4 border hover:shadow-lg transition-all duration-300"
                        >
                            <img src={cert.logo} alt={cert.issuer} className="w-12 h-12 mb-2 object-contain" />
                            <div className="text-center">
                                <div className="font-semibold text-gray-800">{cert.title}</div>
                                <div className="text-xs text-gray-500">{cert.issuer}</div>
                                <div className="text-xs text-gray-400">Issued {cert.issued}</div>
                                <div className="text-xs text-gray-400 mb-1">Credential ID: {cert.credential}</div>
                                <div className="flex flex-wrap gap-1 justify-center mb-1">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i} className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">{skill}</span>
                                    ))}
                                </div>
                                {cert.link && (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-xs hover:text-purple-700">
                                        Show credential
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            
            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(97, 255, 197, 0.15)" }}
                className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-6 mt-8"
            >
                <h2 className="text-xl font-bold text-blue-600 mb-5 text-center">Connect with Me</h2>
                <div className="flex flex-wrap gap-8 justify-center">
                
                    <motion.a
                        href="https://github.com/Kkumar2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.18, rotate: -8, backgroundColor: "#f3e8ff" }}
                        className="flex flex-col items-center text-gray-700 hover:text-black transition-colors px-4 py-2 rounded-xl"
                    >
                        <svg width="32" height="32" fill="currentColor" className="mb-1">
                            <path d="M16 2C8.27 2 2 8.27 2 16c0 6.08 3.94 11.24 9.41 13.07.69.13.94-.3.94-.67v-2.36c-3.83.83-4.63-1.84-4.63-1.84-.63-1.6-1.54-2.03-1.54-2.03-1.26-.86.1-.84.1-.84 1.39.1 2.12 1.43 2.12 1.43 1.24 2.13 3.26 1.52 4.06 1.16.13-.9.49-1.52.89-1.87-3.06-.35-6.28-1.53-6.28-6.8 0-1.5.54-2.73 1.43-3.7-.14-.36-.62-1.8.13-3.76 0 0 1.17-.38 3.83 1.42a13.3 13.3 0 0 1 3.49-.47c1.18.01 2.37.16 3.49.47 2.66-1.8 3.83-1.42 3.83-1.42.75 1.96.27 3.4.13 3.76.89.97 1.43 2.2 1.43 3.7 0 5.29-3.23 6.45-6.3 6.79.5.43.94 1.28.94 2.58v3.83c0 .37.25.81.95.67C28.06 27.24 32 22.08 32 16c0-7.73-6.27-14-14-14z"/>
                        </svg>
                        <span className="text-sm">GitHub</span>
                    </motion.a>
                    
                    <motion.a
                        href="https://www.linkedin.com/in/kartik-kumar-719748264/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.18, rotate: 8, backgroundColor: "#dbeafe" }}
                        className="flex flex-col items-center text-blue-700 hover:text-blue-900 transition-colors px-4 py-2 rounded-xl"
                    >
                        <svg width="32" height="32" fill="currentColor" className="mb-1">
                            <path d="M29 0H3C1.35 0 0 1.35 0 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM9.34 27H5.67V12.34h3.67V27zM7.5 10.67a2.13 2.13 0 1 1 0-4.26 2.13 2.13 0 0 1 0 4.26zm19.5 16.33h-3.67v-6.67c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.52V27h-3.67V12.34h3.52v2h.05c.49-.93 1.68-1.91 3.46-1.91 3.7 0 4.38 2.44 4.38 5.62V27z"/>
                        </svg>
                        <span className="text-sm">LinkedIn</span>
                    </motion.a>
                    {/* Vercel */}
                    <motion.a
                        href="https://vercel.com/kartik-kumars-projects-7e1bcd7c"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.18, rotate: -8, backgroundColor: "#ede9fe" }}
                        className="flex flex-col items-center text-gray-700 hover:text-purple-700 transition-colors px-4 py-2 rounded-xl"
                    >
                        <svg width="32" height="32" fill="currentColor" className="mb-1">
                            <polygon points="16,5 29,27 3,27" />
                        </svg>
                        <span className="text-sm">Vercel</span>
                    </motion.a>
                    {/* Email */}
                    <motion.a
                        href="mailto:Kartikkumar7453@gmail.com"
                        whileHover={{ scale: 1.18, rotate: 8, backgroundColor: "#fee2e2" }}
                        className="flex flex-col items-center text-red-600 hover:text-red-800 transition-colors px-4 py-2 rounded-xl"
                    >
                        <svg width="32" height="32" fill="currentColor" className="mb-1">
                            <path d="M27 6H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h22c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 2v.01L16 15.13 5 8.01V8h22zm0 16H5V10.25l10.47 7.02c.33.22.73.22 1.06 0L27 10.25V24z"/>
                        </svg>
                        <span className="text-sm">Email</span>
                    </motion.a>
                </div>
            </motion.section>
        </div>
    );
}
