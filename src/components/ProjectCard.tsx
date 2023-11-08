import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { projects } from '../lib/data';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';


function ProjectCard({ title, description, tags, image, deploy, github }: (typeof projects)[number]) {

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="bg-gray-700 overflow-hidden p-4 sm:pr-80 rounded-lg max-w-2xl w-full shadow-md transition hover:bg-gray-600 relative">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-300">{description}</p>
          <div className='mt-2 flex gap-2'>
            {deploy && <Link href={deploy} target="_blank" className="px-3 py-1 cursor-pointer text-md bg-violet-400 rounded-full flex gap-1 items-center transition hover:bg-violet-500">
              <span>Go to app</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>}
            {github && <Link href={github} target="_blank" className="px-3 py-1 cursor-pointer text-md bg-white text-gray-900 rounded-full flex gap-1 items-center transition hover:bg-gray-200">
              <span>Repository</span>
              <FaGithub className="w-4 h-4" />
            </Link>}
          </div>
          <ul className="mt-10 flex flex-wrap gap-2 text-md">
            {tags.map((tag, i) => (
              <li className="rounded-full px-3 py-1 tracking-wider text-xs uppercase text-gray-300 bg-black/70" key={i}>{tag}</li>
            ))}
          </ul>
        </div>
        <Image
          src={image}
          alt="Project I worked on"
          quality={95}
          className="hidden sm:block rounded-2xl shadow-2xl absolute top-8 -right-10 w-80 transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
        />
      </div>
    </motion.div>
  );
}

export default ProjectCard;