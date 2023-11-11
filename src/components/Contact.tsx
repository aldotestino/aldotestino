import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

function Contact() {

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact" className="max-w-3xl flex flex-col items-center">
      <h2 className="text-3xl font-medium pb-6">Contact Me</h2>
      <p className="pb-4">Please contact me at <a className="underline" href="mailto:aldotestino4@gmail.com">aldotestino4@gmail.com</a> or through this form.</p>
      <ContactForm />
    </motion.section>
  );
}

export default Contact;