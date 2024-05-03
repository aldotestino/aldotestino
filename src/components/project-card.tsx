import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { projects } from '../lib/data';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge, badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';


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
      className="group"
    >
      <div className="overflow-hidden bg-card h-80 p-4 sm:pr-80 rounded-lg max-w-2xl w-full border shadow-md relative">
        <div className='flex flex-col justify-between h-full'>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-card-foreground">{description}</p>
            <div className='flex gap-2'>
              {deploy && 
                <Link href={deploy} target="_blank" className={cn(badgeVariants(), 'text-md space-x-1')}>
                  <span>Go to app</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              }
              {github && 
                <Link href={github} target="_blank" className={cn(badgeVariants({ variant: 'secondary' }), 'text-md space-x-1')}>
                  <span>Repository</span>
                  <FaGithub className="w-4 h-4" />
                </Link>
              }
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, i) => (
              <Badge variant="outline" className="tracking-wide uppercase bg-background" key={i}>{tag}</Badge>
            ))}
          </div>
        </div>
        <Image
          src={image}
          alt={title}
          quality={95}
          className="hidden sm:block rounded-2xl shadow-2xl absolute top-8 -right-10 w-80 transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
        />
      </div>
    </motion.div>
  );
}

export default ProjectCard;