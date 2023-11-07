import { skills } from '../lib/data';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {

  return (
    <section
      // ref={ref}
      id="skills" 
      className="max-w-3xl flex flex-col items-center">
      <h2 className="text-3xl font-medium pb-6">My Skills</h2>
      <ul className="text-lg flex flex-wrap gap-2 justify-center">
        {skills.map((s, i) => (
          <motion.li 
            variants={fadeInAnimationVariants}
            initial="initial"
            custom={i} 
            key={i} 
            whileInView="animate"
            viewport={{
              once: true
            }}
            className="px-5 py-3 bg-gray-700 rounded-lg shadow-md">
            {s}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;