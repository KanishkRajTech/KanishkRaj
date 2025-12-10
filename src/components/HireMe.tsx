import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Rocket } from 'lucide-react';

const HireMe = () => {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />
                    
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Want to build something with <br/>
                            <span className="text-neonBlue">Me?</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            I'm currently available for freelance projects, internships, and collaborations. 
                            Let's turn your ideas into a reality.
                        </p>
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={500}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform cursor-pointer"
                        >
                            Let's Work Together <Rocket size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HireMe;
