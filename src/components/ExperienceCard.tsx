import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  year: string
  index: number
}

const fadeInAnimationVariantsLeft = {
  initial: {
    x: -10,
    opacity: 0
  },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * index
    },
  }),
};

const fadeInAnimationVariantsRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * index
    },
  }),
};


function ExperienceCard({ title, description, icon: Icon, year, index }: ExperienceCardProps) {
  return (
    <div className="flex gap-4">

      <motion.div
        variants={fadeInAnimationVariantsLeft}
        initial="initial"
        custom={index}
        whileInView="animate"
        viewport={{
          once: true
        }}
        className="flex gap-2">
        <p className="text-gray-400 hidden md:block transition">{year}</p>
        <div className="flex flex-col items-center gap-4">
          <Icon className="w-12 h-12"/>
          <div className="h-full w-1 bg-gray-50 rounded-full bg-opacity-20"></div>
        </div>
      </motion.div>  
      
      <motion.div
        variants={fadeInAnimationVariantsRight}
        initial="initial"
        custom={index}
        whileInView="animate"
        viewport={{
          once: true
        }}
        className="bg-gray-700 p-4 rounded-lg max-w-lg shadow-md">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{description}</p>
        <p className="pt-3 text-gray-400 md:hidden transition">{year}</p>
      </motion.div>

    </div>
  );
}

export default ExperienceCard;