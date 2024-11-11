import GridPattern from '@/components/ui/grid-pattern';
import About from '@/sections/about';
import Contact from '@/sections/contact';
import Experiences from '@/sections/experiences';
import Footer from '@/sections/footer';
import Hero from '@/sections/hero';
import Projects from '@/sections/projects';
import Skills from '@/sections/skills';

export default function Home() {
  return (
    <div className="relative flex">
      <main className="z-10 w-full max-w-screen-md mx-auto px-4 grid gap-20 py-20 overflow-x-hidden">
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <GridPattern
        width={20}
        height={20}
        className="h-[420px] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"
      />
      <div style={{ transform: 'translate3d(0,0,0)' }} className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-red-200/40 dark:bg-red-950/40"></div>
      <div style={{ transform: 'translate3d(0,0,0)' }} className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-indigo-200/40 dark:bg-indigo-950/40"></div>
    </div>
  );
}
