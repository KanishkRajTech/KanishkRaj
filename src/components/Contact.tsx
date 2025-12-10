import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');

        const formData = new FormData(e.target as HTMLFormElement);

        try {
            const response = await fetch("https://formsubmit.co/ajax/kanishkraj600@gmail.com", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setFormStatus('sent');
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                console.error("Failed to send message");
                setFormStatus('idle');
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setFormStatus('idle');
            alert("Error sending message. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonPurple/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Let's Work <span className="text-neonBlue">Together</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? I'm open for freelance projects and internships.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-800 rounded-full text-neonBlue">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Location</p>
                                            <p className="text-white font-medium">Kolkata, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-800 rounded-full text-neonBlue">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Email</p>
                                            <p className="text-white font-medium">kanishkraj600@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-800">
                                    <p className="text-gray-400 mb-4">Connect with me</p>
                                    <div className="flex gap-4">
                                        <a href="https://github.com/KanishkRajTech" className="p-3 bg-gray-800 rounded-full hover:bg-neonBlue hover:text-black transition-colors"><Github size={20} /></a>
                                        <a href="https://www.linkedin.com/in/kanishkrajtech/" className="p-3 bg-gray-800 rounded-full hover:bg-neonBlue hover:text-black transition-colors"><Linkedin size={20} /></a>
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kanishkraj600@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-neonPurple hover:text-white transition-colors"><Mail size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                             {/* FormSubmit Configuration */}
                             <input type="hidden" name="_subject" value="New Contact Request from Portfolio" />
                             <input type="hidden" name="_captcha" value="false" />

                             <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                                    <input type="text" name="name" required className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-neonBlue focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                                    <input type="email" name="email" required className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-neonBlue focus:outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                             </div>

                             <div>
                                <label className="block text-gray-400 text-sm mb-2">Project Type</label>
                                <select name="projectType" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-neonBlue focus:outline-none transition-colors text-gray-300">
                                    <option>Freelance Project</option>
                                    <option>Internship Opportunity</option>
                                    <option>Collaboration</option>
                                    <option>Guidance / Doubt</option>
                                </select>
                             </div>

                             <div>
                                <label className="block text-gray-400 text-sm mb-2">Message</label>
                                <textarea name="message" required rows={4} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-neonBlue focus:outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
                             </div>

                             <button 
                                type="submit" 
                                disabled={formStatus === 'sending' || formStatus === 'sent'}
                                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                                    formStatus === 'sent' 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-white text-black hover:bg-neonBlue'
                                }`}
                             >
                                {formStatus === 'idle' && <>Send Request <Send size={20} /></>}
                                {formStatus === 'sending' && "Sending..."}
                                {formStatus === 'sent' && "Message Sent!"}
                             </button>
                        </form>
                    </div>
                </motion.div>
            </div>
            
            {/* Minimal Footer */}
            <div className="mt-20 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; 2025 Anti-Gravity AI • Built by Kanishk Raj</p>
            </div>
        </section>
    );
};

export default Contact;
