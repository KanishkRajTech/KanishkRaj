import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // keys
  const words = [
    'Web Developer',
    'MERN Stack Learner',
    'Problem Solver',
    'Freelance Developer'
  ];

  useEffect(() => {
    if (index >= words.length) {
        setIndex(0); // loop back
        return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 2000 : 150, Math.floor(Math.random() * 200)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonBlue/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-neonBlue font-semibold tracking-wider uppercase mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Kanishk <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Raj</span>
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-300 mb-6 h-12 flex items-center justify-center md:justify-start gap-2">
              I am a <span className="text-neonPurple font-bold">
                 {text}
                 <span className="w-1 h-8 bg-neonPurple inline-block ml-1 animate-blink">|</span>
              </span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
             A Web Developer passionate about crafting fast, modern and intelligent digital experiences. I love building real-world projects using React, Tailwind, JavaScript and exploring the world of AI & MERN development. My goal is to create clean UIs, smooth interactions, and products that truly solve problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500}
                className="group px-8 py-3 bg-neonBlue text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] cursor-pointer"
              >
                Hire Me <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="/resume.pdf" 
                download
                className="px-8 py-3 border border-neonPurple text-neonPurple font-bold rounded-full flex items-center justify-center gap-2 hover:bg-neonPurple hover:text-white transition-all shadow-[0_0_15px_rgba(191,0,255,0.2)]"
              >
                Download CV <Download size={20} />
              </a>
            </div>
            
            <div className="mt-10 flex gap-6 justify-center md:justify-start">
               <a href="https://github.com/KanishkRajTech" className="text-gray-400 hover:text-neonBlue transition-colors"><Github size={24}/></a>
               <a href="https://www.linkedin.com/in/kanishkrajtech/" className="text-gray-400 hover:text-neonBlue transition-colors"><Linkedin size={24}/></a>
               <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kanishkraj600@gmail.com" className="text-gray-400 hover:text-neonBlue transition-colors"><Mail size={24}/></a>
            </div>
          </motion.div>
        </div>

        {/* Visual / Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
            <div className="relative w-full h-[500px] flex items-center justify-center">
                 {/* Futuristic Decor */}
                 <div className="absolute inset-0 border-2 border-neonBlue/30 rounded-full animate-spin-slow border-dashed" />
                 <div className="absolute inset-4 border-2 border-neonPurple/30 rounded-full animate-reverse-spin border-dotted" />
                 
                 {/* Placeholder for code/tech image or illustration */}
                 <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-2xl relative z-20 w-80 rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"/>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                        <div className="w-3 h-3 rounded-full bg-green-500"/>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"/>
                        <div className="h-4 bg-gray-800 rounded w-1/2 animate-pulse"/>
                        <div className="h-4 bg-gray-800 rounded w-full animate-pulse"/>
                        <br/>
                        <div className="h-4 bg-neonBlue/20 rounded w-5/6"/>
                        <div className="h-4 bg-neonPurple/20 rounded w-4/6"/>
                    </div>
                    <div className="mt-8 text-center text-gray-500 text-sm font-mono">
                        Console.log("Kanishk Raj Tech");
                    </div>
                 </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
