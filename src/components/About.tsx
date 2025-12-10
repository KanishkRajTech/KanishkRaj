import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        About <span className="text-neonBlue">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image/Visual */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-neonBlue to-neonPurple rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                            <div className="relative bg-gray-900 border border-gray-800 p-2 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
                                <img 
                                    src="/kanishk_raj.jpg" 
                                    alt="Kanishk Raj" 
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                               I’m a web developer and 3rd year CSE student specializing in modern frontend technologies like React, Tailwind CSS, JavaScript, and UI engineering. I’m currently learning the <span className="text-neonBlue font-semibold"> MERN stack </span>, and experimenting with AI-driven development workflows.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I enjoy turning ideas into fully functional, user friendly digital products. From frontend development to freelance projects, I focus on building experiences that are clean, fast, and purposeful. I’m also involved in internships, tech communities, and continuous self learning to sharpen my skills and deliver better products every day.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-neonBlue/50 transition-colors">
                                    <span className="text-gray-400 text-sm block mb-1">Name</span>
                                    <span className="text-white font-medium">Kanishk Raj</span>
                                </div>
                                <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-neonBlue/50 transition-colors">
                                    <span className="text-gray-400 text-sm block mb-1">Role</span>
                                    <span className="text-white font-medium">AI/ML, Web Developer & Freelancer</span>
                                </div>
                                <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-neonBlue/50 transition-colors">
                                    <span className="text-gray-400 text-sm block mb-1">Education</span>
                                    <span className="text-white font-medium">B.Tech Computer Science & Engineering</span>
                                </div>
                                <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-neonBlue/50 transition-colors">
                                    <span className="text-gray-400 text-sm block mb-1">Languages</span>
                                    <span className="text-white font-medium">English, Hindi</span>
                                </div>
                            </div>

                            <div className="pt-6">
                                <a 
                                    href="/resume.pdf" 
                                    download
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neonBlue text-neonBlue font-bold rounded-full hover:bg-neonBlue hover:text-black transition-all group"
                                >
                                    Download Resume <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
