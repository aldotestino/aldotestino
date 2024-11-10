import About from '@/sections/about';
import Experiences from '@/sections/experiences';
import Footer from '@/sections/footer';
import Hero from '@/sections/hero';

export default function Home() {
  return (
    <main className="w-full max-w-screen-md mx-auto px-4 grid gap-20 py-20">
      <Hero />
      <About />
      <Experiences />
      <Footer />
    </main>
  );
}
