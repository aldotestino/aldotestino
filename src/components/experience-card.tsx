import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string
  description: string
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
        <p className="hidden md:block text-muted-foreground">{year}</p>
        <div className="flex flex-col items-center gap-4">
          <Icon className="w-12 h-12"/>
          <div className="h-full w-1 rounded-full bg-muted"></div>
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
        className="p-4 rounded-lg max-w-lg border shadow-md">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="mt-2">{description}</p>
        <p className="pt-3 md:hidden text-muted-foreground">{year}</p>
      </motion.div>

    </div>
  );
}

export default ExperienceCard;