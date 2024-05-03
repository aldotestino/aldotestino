'use client';
import { motion } from 'framer-motion';

function VerticalSeparator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }} 
      className="h-16 w-1 rounded-full bg-secondary/20">
    </motion.div>
  );
}

export default VerticalSeparator;