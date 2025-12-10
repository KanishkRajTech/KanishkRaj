import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Abishak Jaiswal",
            role: "Director of Hand Tools Supply",
            quote: "Kanishk paid incredible attention to every little detail. We only had a rough idea of what we wanted, and he turned it into something truly impressive and fully functional. We’re really grateful for the effort he put in."
        },
        {
            name: "RJ",
            role: "Founder of RJ Events",
            quote: "Kanishk not only finished the project much earlier than we expected, but he also brought our vision to life perfectly. The UI feels modern, smooth, and exactly the way we imagined. Working with him was genuinely a great experience."
        },
        {
            name: "Manish Gupta",
            role: "Founder of Bright Based",
            quote: "One of the best freelance developers I've worked with. His understanding is top-notch."
        }
    ];

    return (
        <section className="py-20 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        What <span className="text-neonPurple">People Say</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => (
                            <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 relative hover:border-neonBlue/30 transition-colors">
                                <Quote className="absolute top-6 right-6 text-gray-700" size={40} />
                                <p className="text-gray-300 mb-6 relative z-10 italic">"{t.quote}"</p>
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-sm text-neonBlue">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
