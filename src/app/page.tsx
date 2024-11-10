import About from '@/sections/about';
import Contact from '@/sections/contact';
import Experiences from '@/sections/experiences';
import Footer from '@/sections/footer';
import Hero from '@/sections/hero';
import Projects from '@/sections/projects';
import Skills from '@/sections/skills';

export default function Home() {
  return (
    <main className="w-full max-w-screen-md mx-auto px-4 grid gap-20 py-20">
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
