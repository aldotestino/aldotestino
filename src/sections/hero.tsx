import memoji from '@/assets/memoji.png';
import { buttonVariants } from '@/components/ui/button';
import { InView } from '@/components/ui/in-view';
import { TextScramble } from '@/components/ui/text-scramble';
import { cn } from '@/lib/utils';
import { FileDown, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
  return (
    <InView viewOptions={{ once: true }}>
      <section className="flex flex-col-reverse gap-4 justify-between items-center md:flex-row md:gap-24">
        <div className="flex flex-col gap-4">
          <TextScramble className="text-center sm:text-left text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-black to-zinc-500 dark:from-white dark:to-zinc-500">
            Aldo Testino
          </TextScramble>
          <p className="text-center sm:text-left prose-xl leading-normal">I'm a software engineer passionate about crafting elegant solutions and building impactful applications that solve real-world problems.</p>
          <div className="flex items-center flex-wrap gap-4 justify-center md:justify-start">
            <Link href="#contact" className={buttonVariants({ size: 'lg' })}>
              <MessageCircle className="size-4 mr-2" />
              Contact Me
            </Link>
            <Link href="/CV_Aldo_Testino.pdf" target="_blank" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              <FileDown className="size-4 mr-2" />
              Download CV
            </Link>
            <Link href="https://linkedin.com/in/aldotestino" target="_blank" className={cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'size-10')}>
              <FaLinkedin className="size-4" />
            </Link>
            <Link href="https://github.com/aldotestino" target="_blank" className={cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'size-10')}>
              <FaGithub className="size-4" />
            </Link>
          </div>
        </div>
        <Image quality={80} priority src={memoji} height={160} width={160} alt="Aldo Testino" className="object-cover" />
      </section>
    </InView>
  );
}

export default Hero;
