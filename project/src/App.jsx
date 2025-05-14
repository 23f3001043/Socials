import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import LinkButtons from './components/LinkButtons';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-8 max-w-2xl flex flex-col min-h-screen"
      >
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center py-8 space-y-8">
          <Introduction />
          <LinkButtons />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;