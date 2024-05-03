import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { Toaster } from '@/components/ui/toaster';
import VerticalSeparator from '@/components/vertical-separator';

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-screen-md mx-auto flex flex-col items-center gap-32 px-4 pt-20 sm:pt-40 pb-10">
      <Hero />
      <VerticalSeparator />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
