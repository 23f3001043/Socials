import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <motion.section 
      className="text-center max-w-md mx-auto"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p className="text-lg leading-relaxed">
        Hi, I'm Karan — a Data Science student at IIT Madras passionate about analytics, AI, and solving real-world problems with code.
      </p>
    </motion.section>
  );
};

export default Introduction;