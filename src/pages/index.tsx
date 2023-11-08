import Hero from '../components/Hero';
import SEO from '../components/SEO';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';

export default function Index() {

  return (
    <>
      <SEO />

      <main className="min-h-screen pb-10 px-4 flex gap-32 flex-col items-center">
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }} 
          className="h-16 w-1 bg-gray-50 rounded-full bg-opacity-20"></motion.div>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}


