import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import LinkWithIcon from './LinkWithIcon';
import { links, statuses } from '../lib/data';
import Link from 'next/link';
import { useSectionInView } from '../lib/hooks';
import { useActiveSectionContext } from '../context/active-section-context';
import { useEffect, useState } from 'react';

function Hero() {

  const [randomStatus, setRandomStatus] = useState<string | null>(null);

  useEffect(() => {
    setRandomStatus(statuses[Math.floor(Math.random() * statuses.length)]);
  }, []);

  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="flex pt-20 sm:pt-40 flex-col gap-8 items-center max-w-3xl relative">

      <div style={{ transform: 'translate3d(0,0,0)' }} className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#946263]"></div>
      <div style={{ transform: 'translate3d(0,0,0)' }} className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#676394]"></div>
        
      <div className="relative">
        {/* <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
          className='rounded-full w-36 h-36 object-cover border-4 border-white' 
          src="https://media.licdn.com/dms/image/D4D03AQF02D9diNNmTA/profile-displayphoto-shrink_200_200/0/1693302061859?e=1700697600&v=beta&t=3EHZG0BLvE8AXxWvnj6IJIrwk_bgVV10_ieZRIFVrrg" 
        /> */}
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
          className='w-36 h-36' 
          src="/memoji.png" 
        />
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
          {randomStatus}
        </motion.span>
      </div>
        
      <motion.h1 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl z-[999] text-center leading-snug">
        <span className="font-bold">Hello, I'm Aldo.</span> I'm a <span className="text-violet-400 font-bold">full-stack developer</span> with <span className="font-bold">4 years</span> of experience. I turn ideas into reality using the power of <span className="underline">modern web technologies</span>.
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col items-center sm:flex-row z-[999] gap-4 text-gray-900">

        <Link href="#contact" onClick={() => {
          setActiveSection('Contact');
          setTimeOfLastClick(Date.now());
        }} className="px-6 py-3 cursor-pointer text-xl bg-white rounded-full flex gap-2 items-center transition hover:bg-gray-200 hover:scale-105">
          <span>Contact me!</span>
          <ArrowRightIcon className="w-6 h-6" />
        </Link>
        <div className="flex gap-4">
          {links.map(l => <LinkWithIcon key={l.link} {...l} />)}
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;