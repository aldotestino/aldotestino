'use client';
import { ArrowRight, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { links, statuses } from '@/lib/data';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import memojiPc from '@/assets/memojipc.png';
import Image from 'next/image';

function Hero() {

  return (
    <section id="home" className="flex  flex-col gap-8 items-center relative">

      <div style={{ transform: 'translate3d(0,0,0)' }} className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#946263]/40"></div>
      <div style={{ transform: 'translate3d(0,0,0)' }} className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#676394]/40"></div>
        
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
          className='w-36 h-36' 
        >
          <Image quality={95} priority src={memojiPc} alt='me' className='object-cover' />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }} 
          className="absolute bottom-0 right-0 text-4xl">
          {statuses[6]}
        </motion.span>
      </div>
        
      <motion.h1 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 pb-1 text-4xl text-transparent bg-clip-text bg-gradient-to-b from-slate-50 to-slate-400 text-center font-bold">
        Hey, I&apos;m Aldo, a Full Stack Dev turning ideas into reality using the power of modern web technologies.
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col items-center sm:flex-row z-[999] gap-4">

        <Link href="#contact" className={cn(buttonVariants({ size: 'lg' }), 'text-lg space-x-2 hover:scale-105 transition-all rounded-full')}>
          <span>Contact me</span>
          <ArrowRight className="w-6 h-6" />
        </Link>

        <Link href="/resume_Testino_Aldo.pdf" target="_blank" className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'text-lg space-x-2 hover:scale-105 transition-all rounded-full')}>
          <span>Download CV</span>
          <FileDown className="w-6 h-6" />
        </Link>

        <div className="flex gap-4">
          {links.map((l, i) => 
            <Link key={i} href={l.link} target="_blank" className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'hover:scale-105 transition-all rounded-full')}>
              <l.icon className="w-6 h-6" />
            </Link>
          )}
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;