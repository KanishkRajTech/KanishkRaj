import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';

const Experience = () => {
    const experiences = [
    {
        role: "React Intern",
        company: "QuickStay",
        period: "Aug 2025 – Nov 2025",
        desc: "Developed scalable React components, optimized frontend performance, and collaborated with mentors to deliver a smoother and more intuitive user experience across the platform.",
        icon: <Award size={20} />
    },
    {
        role: "Frontend Developer",
        company: "Brainzima Innovation",
        period: "Project Based",
        desc: "Developed responsive frontend modules and collaborated with the Brainzima team to deliver clean, modern, and user-friendly interfaces.",
        icon: <Briefcase size={20} />
    }
];


    return (
        <section id="experience" className="py-20 bg-gray-900/30">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        Experience & <span className="text-neonBlue">Involvement</span>
                    </h2>

                    <div className="relative border-l border-gray-800 ml-4 md:ml-0 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-900 border-2 border-neonBlue rounded-full flex items-center justify-center text-neonBlue z-10">
                                    <div className="w-2 h-2 bg-neonBlue rounded-full animate-pulse" />
                                </div>
                                
                                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-white/20 transition-colors">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                {exp.role} 
                                            </h3>
                                            <p className="text-neonBlue font-medium">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 md:mt-0">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                    </div>
                                    <p className="text-gray-400">
                                        {exp.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
