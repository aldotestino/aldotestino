import { FileDown, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import memoji from '@/assets/memoji.png';
import { buttonVariants } from '@/components/ui/button';
import { InView } from '@/components/ui/in-view';
import { TextScramble } from '@/components/ui/text-scramble';
import { cn } from '@/lib/utils';

function Hero() {
  return (
    <InView viewOptions={{ once: true }}>
      <section className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-24">
        <div className="flex flex-col gap-4">
          <TextScramble className="bg-gradient-to-b from-black to-zinc-500 bg-clip-text text-center font-extrabold text-5xl text-transparent sm:text-left md:text-6xl dark:from-white dark:to-zinc-500">
            Aldo Testino
          </TextScramble>
          <p className="prose-xl text-center leading-normal sm:text-left">
            I'm a software engineer passionate about crafting elegant solutions
            and building impactful applications that solve real-world problems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link className={buttonVariants({ size: 'lg' })} href="#contact">
              <MessageCircle className="mr-2 size-4" />
              Contact Me
            </Link>
            <Link
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="/CV_Aldo_Testino.pdf"
              target="_blank"
            >
              <FileDown className="mr-2 size-4" />
              Download CV
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                'size-10'
              )}
              href="https://linkedin.com/in/aldotestino"
              target="_blank"
            >
              <FaLinkedin className="size-4" />
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                'size-10'
              )}
              href="https://github.com/aldotestino"
              target="_blank"
            >
              <FaGithub className="size-4" />
            </Link>
          </div>
        </div>
        <Image
          alt="Aldo Testino"
          className="object-cover"
          height={160}
          priority
          quality={80}
          src={memoji}
          width={160}
        />
      </section>
    </InView>
  );
}

export default Hero;
