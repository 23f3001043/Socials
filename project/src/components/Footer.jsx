import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="text-center py-6 text-sm text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <p>Powered by Karan. Last updated May 2025.</p>
    </motion.footer>
  );
};

export default Footer;