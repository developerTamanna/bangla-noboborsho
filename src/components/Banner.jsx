import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.h1
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, type: 'spring' }}
      className="text-4xl md:text-6xl text-red-600 font-extrabold mb-8 text-center"
    >
      🎉 শুভ নববর্ষ ১৪৩২ 🎉
    </motion.h1>
  );
};

export default Banner;
