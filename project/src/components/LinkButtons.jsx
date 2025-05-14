import React from 'react';
import { motion } from 'framer-motion';

const links = [
  {
    id: 'portfolio',
    icon: '🌐',
    label: 'Portfolio',
    url: 'https://karanverse.netlify.app',
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    id: 'github',
    icon: '💻',
    label: 'GitHub',
    url: 'https://github.com/23f3001043',
    color: 'bg-gray-800 hover:bg-gray-900',
  },
  {
    id: 'linkedin',
    icon: '🔗',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/karan-kumar-4360a82b4/',
    color: 'bg-blue-500 hover:bg-blue-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const LinkButtons = () => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {links.map((link) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 ${link.color} text-white py-3 px-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg text-center`}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="block text-xl mb-1">{link.icon}</span>
          <span className="font-medium">{link.label}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default LinkButtons;