import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { label: "Happy Clients", value: "3+" },
        { label: "Projects Done", value: "10+" },
        { label: "Hackathons", value: "2+" },
        { label: "Years Coding", value: "3+" },
    ];

    return (
        <section className="py-12 bg-neonBlue/5 border-y border-neonBlue/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 neon-text">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
