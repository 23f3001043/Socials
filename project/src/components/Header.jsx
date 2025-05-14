import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="text-center py-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
        Karan Kumar
      </h1>
      <h2 className="text-xl text-blue-500 mt-2">
        Data & Analytics Portfolio
      </h2>
    </motion.header>
  );
};

export default Header;