import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { img } from 'framer-motion/client';

const Projects = () => {
    const projects = [
    {
        title: "BrightBased",
        desc: "A professional and responsive business website built for BrightBased. This platform provides home tutors for students, offering a clean UI and smooth user experience for finding and booking tuitions.",
        tech: ["HTML", "Tailwind", "PHP", "SQL", "JavaScript", "Responsive UI"],
        live: "https://www.brightbased.com/",
        code: "#",
        img: "/brightbased.png"
    },
    {
        title: "QuickStay",
        desc: "A modern and intuitive room-booking platform developed during my internship. It provides seamless navigation, smooth interactions, and real-time data handling for users.",
        tech: ["NestJS", "Tailwind", "Firestore"],
        live: "https://quickstayapp-yv4w.vercel.app/",
        code: "https://github.com/KanishkRajTech/quickstayapp",
        img: "/quickstay.png"
    },
    {
        title: "Food Recipe App",
        desc: "A full-stack recipe application focused on CRUD operations, allowing users to create, browse, update, and delete recipes with a clean and interactive interface.",
        tech: ["React.js", "Tailwind", "Express", "Node.js", "MongoDB" ,  "jwt", "mern-stack"],
        live: "https://github.com/KanishkRajTech/Food-app",
        code: "#",
        img:"/food.png"
        
    },
    {
        title: "DriveEasy",
        desc: "A vehicle rental concept website that allows users to browse available cars and bikes. Built with a simple, clean flow and structured backend integration.",
        tech: ["HTML", "PHP", "Tailwind", "SQL", "javascript", "leafletjs", "razorpay-php", "open-street-map"],
        live: "https://github.com/KanishkRajTech/DRIVEEASY",
        code: "#",
        img:"/driveeasy.jpg"
    },
    {
        title: "GitInsight",
        desc: "A lightweight GitHub analytics tool that fetches user details, repositories, and activity using GitHub’s API. Designed with a minimal and developer-friendly interface.",
        tech: ["React", "Tailwind", "API Integration"],
        live: "https://git-insight-theta.vercel.app/",
        code: "https://github.com/KanishkRajTech/GitInsight",
        img: "/gitinsight.png"
    }
];


    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        Featured <span className="text-neonBlue">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neonPurple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(191,0,255,0.15)] flex flex-col h-full"
                            >
                                {/* Project Preview Image Placeholder */}
                                <div className="h-60 bg-gray-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    {project.img ? (
                                        <img 
                                            src={project.img} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                            [Project Preview]
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a href={project.live} className="p-2 bg-neonBlue rounded-full text-black hover:scale-110 transition-transform" title="View Live">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.code} className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform" title="View Code">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neonPurple transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-neonBlue rounded border border-gray-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
