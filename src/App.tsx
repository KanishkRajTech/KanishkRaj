import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutWork from './components/AboutWork';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import HireMe from './components/HireMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-neonBlue selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AboutWork />
        <Skills />
        <Projects />
        <Experience />
        <Stats />
        <Testimonials />
        <HireMe />
        <Contact />
      </main>
    </div>
  );
}

export default App;
