import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiEjs } from "react-icons/si";

const skills = [
    {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500 text-3xl sm:text-4xl mb-2" />,
        description: "The standard markup language for creating web pages. HTML5 introduces new elements and APIs for better structure and multimedia support.",
        info: [
            "Semantic elements (header, footer, article, etc.)",
            "Audio and video support",
            "Canvas and SVG for graphics",
            "Form enhancements",
        ],
        code: `<!-- Example HTML5 code -->
<section>
  <header>
    <h1>Welcome to My Portfolio</h1>
  </header>
  <article>
    <p>This is a sample HTML5 structure.</p>
  </article>
</section>`,
    },
    {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500 text-3xl sm:text-4xl mb-2" />,
        description: "A style sheet language used for describing the look and formatting of a document written in HTML. CSS3 brings advanced features for animations, layouts, and responsiveness.",
        info: [
            "Flexbox and Grid layouts",
            "Transitions and animations",
            "Media queries for responsiveness",
            "Custom properties (CSS variables)",
        ],
        code: `/* Example CSS3 code */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    },
    {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400 text-3xl sm:text-4xl mb-2" />,
        description: "A versatile scripting language used to create dynamic and interactive web applications. JavaScript is essential for front-end development and widely used with frameworks like React and Node.js.",
        info: [
            "ES6+ syntax",
            "Asynchronous programming (Promises, async/await)",
            "DOM manipulation",
            "Popular libraries: React, Redux, Express",
            "HTML5 integration",
            "CSS3 manipulation",
        ],
        code: `// Example JavaScript code
const greet = (name) => {
  console.log(\`Hello, \${name}!\`);
};
greet("World");`,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-3xl sm:text-4xl mb-2" />,
        description: "A utility-first CSS framework for rapidly building custom user interfaces. Tailwind CSS provides low-level utility classes to style elements directly in your markup.",
        info: [
            "Responsive design utilities",
            "Custom themes and configuration",
            "Dark mode support",
            "Integration with React and other frameworks",
            "Utility classes for HTML elements",
        ],
        code: `<!-- Example Tailwind CSS usage -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>`,
    },
    {
        name: "React",
        icon: <FaReact className="text-blue-300 text-3xl sm:text-4xl mb-2" />,
        description: "A powerful JavaScript library for building user interfaces. React enables the creation of reusable components and efficient rendering of dynamic data.",
        info: [
            "Component-based architecture",
            "Hooks (useState, useEffect, etc.)",
            "State management",
            "React Router for navigation",
            "JSX (JavaScript + HTML syntax)",
        ],
        code: `// Example React component
import React from "react";
function Hello() {
  return <h1>Hello, React!</h1>;
}
export default Hello;`,
    },
    {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-3xl sm:text-4xl mb-2" />,
        description: "A runtime environment that allows JavaScript to be run on the server side. Node.js is used for building scalable backend services and APIs.",
        info: [
            "Event-driven architecture",
            "Express.js for REST APIs",
            "Real-time applications with Socket.io",
            "NPM ecosystem",
            "Serving HTML/CSS/JS files",
        ],
        code: `// Example Node.js with Express
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello Node.js!"));
app.listen(3000);`,
    },
    {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300 text-3xl sm:text-4xl mb-2" />,
        description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        info: [
            "Middleware support",
            "Routing",
            "RESTful APIs",
            "Template engines",
            "Error handling",
        ],
        code: `// Example Express.js route
const express = require("express");
const app = express();
app.get("/api", (req, res) => res.json({ message: "Hello Express!" }));
app.listen(4000);`,
    },
    {
        name: "Redux Toolkit (RTK)",
        icon: <SiRedux className="text-purple-400 text-3xl sm:text-4xl mb-2" />,
        description: "The official, opinionated, batteries-included toolset for efficient Redux development.",
        info: [
            "Simplified Redux logic",
            "createSlice and createAsyncThunk",
            "Immutability with Immer",
            "Redux DevTools integration",
        ],
        code: `// Example RTK slice
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});
export const { increment, decrement } = counterSlice.actions;`,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400 text-3xl sm:text-4xl mb-2" />,
        description: "A NoSQL database program that uses JSON-like documents with optional schemas. MongoDB is designed for scalability and flexibility.",
        info: [
            "Document-oriented storage",
            "Flexible schema",
            "Aggregation framework",
            "Scalable and distributed",
        ],
        code: `// Example MongoDB usage with Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb");
const User = mongoose.model("User", { name: String });
const user = new User({ name: "Alice" });
user.save();`,
    },
    {
        name: "Embedded JavaScript (EJS)",
        icon: <SiEjs className="text-yellow-500 text-3xl sm:text-4xl mb-2" />,
        description: "A simple templating language that lets you generate HTML markup with plain JavaScript.",
        info: [
            "Server-side rendering",
            "Template inheritance",
            "Easy integration with Express",
            "Includes and partials",
        ],
        code: `<% /* Example EJS template */ %>
<ul>
  <% users.forEach(function(user){ %>
    <li><%= user.name %></li>
  <% }); %>
</ul>`,
    },
    {
        name: "Git",
        icon: <FaGitAlt className="text-red-500 text-3xl sm:text-4xl mb-2" />,
        description: "A distributed version control system for tracking changes in source code during software development.",
        info: [
            "Branching and merging",
            "Staging and committing changes",
            "Viewing history and diffs",
            "Collaboration workflows",
        ],
        code: `# Example Git commands
git init
git add .
git commit -m "Initial commit"
git branch feature-branch
git checkout feature-branch`,
    },
    {
        name: "GitHub",
        icon: <FaGithub className="text-white text-3xl sm:text-4xl mb-2" />,
        description: "A web-based platform for version control and collaboration using Git. GitHub hosts repositories and provides tools for issue tracking, code review, and CI/CD.",
        info: [
            "Remote repositories",
            "Pull requests and code reviews",
            "Issues and project boards",
            "Actions for CI/CD",
        ],
        code: `# Example GitHub workflow
# 1. Push local repo to GitHub
git remote add origin https://github.com/username/repo.git
git push -u origin main

# 2. Create a pull request on GitHub website`,
    },
];

const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
    }),
    hover: {
        scale: 1.05,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
        transition: { duration: 0.3 },
    },
};

export default function SkillSection() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-30 px-2 sm:px-4">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center"
                >
                    My Skills
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            className="bg-gray-800 rounded-xl shadow-lg p-5 sm:p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300 cursor-pointer group"
                            custom={i}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            variants={cardVariants}
                        >
                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                {skill.icon}
                                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                                    {skill.name}
                                </h3>
                            </div>
                            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{skill.description}</p>
                            <ul className="list-disc list-inside space-y-1">
                                {skill.info.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="text-gray-400 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                            {skill.code && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-3 sm:mt-4 bg-gray-900 rounded-lg p-3 sm:p-4 text-xs sm:text-sm font-mono text-gray-200 overflow-x-auto"
                                >
                                    <pre>{skill.code}</pre>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
