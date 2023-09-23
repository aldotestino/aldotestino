import { useSectionInView } from '../lib/hooks';
import { motion } from 'framer-motion';

function About() {

  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about" 
      className="max-w-3xl flex flex-col items-center">
      <h2 className="text-3xl font-medium pb-6">About Me</h2>
      <div className="text-lg text-center space-y-10">
        <p>After completing my bachelor's degree in Computer and Automation Engineering with an experimental thesis in collaboration with the startup Leaf s.r.l., I decided to further my education by pursuing a master's degree in Computer Engineering with a specialization in the Cyberphysical Systems curriculum.</p>
        <p>My academic and professional path has instilled in me a passion for researching and developing advanced computer systems, particularly in the field of cyberphysical systems. I am always on the lookout for new challenges and opportunities to contribute to technology's evolution.</p>
      </div>
    </motion.section>
  );
}

export default About;