import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Globe, Zap } from 'lucide-react';

const AboutWork = () => {
    return (
        <section className="py-20 bg-black relative top-0 z-10">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-neonBlue/5 skew-x-12 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                        About My <span className="text-neonBlue">Work</span>
                    </h2>
                    <p className="text-neonPurple text-center uppercase tracking-widest font-bold mb-16 text-sm">
                        Freelancing-Focused
                    </p>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Alongside my journey as a web developer, I work as a freelancer helping individuals, small businesses, and startups build <span className="text-white font-semibold">clean, modern, and functional digital products</span>. Use my expertise to deliver websites that not only look great but also perform smoothly, load fast, and feel intuitive for users.
                            </p>
                            <p>
                                I specialize in creating responsive landing pages, portfolios, event/competition platforms, business websites, dashboards, and custom web solutions using <span className="text-neonBlue">React, JavaScript, Tailwind CSS, PHP</span>, and modern UI frameworks.
                            </p>
                            <p>
                                Every project I take on is built with clear communication, professional workflow, and attention to detail. Whether you're starting something new or upgrading an existing product, I aim to bring your ideas to life with a mix of creativity, technical skill, and reliability.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-neonBlue/50 transition-all hover:-translate-y-1">
                                <Layout className="text-neonBlue mb-4" size={32} />
                                <h3 className="text-white font-bold text-xl mb-2">Modern UI/UX</h3>
                                <p className="text-gray-400 text-sm">Clean, aesthetic, and user-centric designs.</p>
                            </div>
                            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-neonPurple/50 transition-all hover:-translate-y-1">
                                <Globe className="text-neonPurple mb-4" size={32} />
                                <h3 className="text-white font-bold text-xl mb-2">Responsive Web</h3>
                                <p className="text-gray-400 text-sm">Works perfectly on all devices, mobile to desktop.</p>
                            </div>
                            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-400/50 transition-all hover:-translate-y-1">
                                <Zap className="text-green-400 mb-4" size={32} />
                                <h3 className="text-white font-bold text-xl mb-2">Performance</h3>
                                <p className="text-gray-400 text-sm">Optimized for speed, SEO, and smooth interactions.</p>
                            </div>
                            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-yellow-400/50 transition-all hover:-translate-y-1">
                                <Code className="text-yellow-400 mb-4" size={32} />
                                <h3 className="text-white font-bold text-xl mb-2">Clean Code</h3>
                                <p className="text-gray-400 text-sm">Maintainable, scalable, and industry-standard code.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutWork;
