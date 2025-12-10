import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        "HTML5", "CSS3", "Bootstrap", "Tailwind CSS",
        "JavaScript", "React", "Next.js", 
        "Node.js", "Express.js", "MERN Stack",
        "MongoDB", "SQL", "phpMyAdmin",
        "Python", "NumPy", "PHP", 
        "C", "C++"
    ];

    const progress = [
        { name: "Frontend Development", value: 90, color: "bg-neonBlue" },
        { name: "JavaScript & React", value: 85, color: "bg-neonPurple" },
        { name: "Backend (Node/Express)", value: 75, color: "bg-green-400" },
        { name: "Problem Solving / DSA", value: 80, color: "bg-yellow-400" },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        Tech Stack & <span className="text-neonPurple">Skills</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Skills Cloud */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                <span className="w-2 h-8 bg-neonBlue rounded-full"></span>
                                Core Technologies
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 hover:border-neonBlue hover:text-neonBlue hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                <span className="w-2 h-8 bg-neonPurple rounded-full"></span>
                                Proficiency
                            </h3>
                            <div className="space-y-8">
                                {progress.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{item.name}</span>
                                            <span className="text-gray-400">{item.value}%</span>
                                        </div>
                                        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className={`h-full rounded-full ${item.color} shadow-[0_0_10px_currentColor]`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
