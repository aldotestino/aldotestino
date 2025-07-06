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
      <main className="z-10 mx-auto grid w-full max-w-screen-md gap-20 overflow-x-hidden px-4 py-20">
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <GridPattern
        className="h-[420px] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"
        height={20}
        width={20}
      />
      <div
        className="-z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full bg-red-200/40 blur-[10rem] sm:w-[68.75rem] dark:bg-red-950/40"
        style={{ transform: 'translate3d(0,0,0)' }}
      />
      <div
        className="-z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full bg-indigo-200/40 blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-indigo-950/40"
        style={{ transform: 'translate3d(0,0,0)' }}
      />
    </div>
  );
}
