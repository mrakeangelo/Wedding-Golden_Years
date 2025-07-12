import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pearl-50 via-champagne-50 to-dusty-50 dark:from-slate-900 dark:via-slate-800 dark:to-lavender-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full mb-6">
            <span className="text-6xl sm:text-8xl font-serif font-light text-champagne-600 dark:text-champagne-400">
              40
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-slate-800 dark:text-pearl-100 mb-4">
            Years of Love
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-slate-600 dark:text-pearl-300 mb-6">
            Margaret & Robert Thompson
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 dark:text-pearl-400 font-light max-w-2xl mx-auto leading-relaxed">
            Join us as we celebrate four decades of love, laughter, and cherished memories. 
            Our journey together continues with renewed vows and grateful hearts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="text-champagne-600 dark:text-champagne-400 font-serif text-lg">
            Vow Renewal Ceremony
          </div>
          <div className="text-slate-600 dark:text-pearl-300 font-light">
            <div className="text-xl">September 15, 2024</div>
            <div className="text-lg">Sunset Garden, Napa Valley</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-champagne-400 to-dusty-400 mx-auto"></div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-champagne-400 to-transparent rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Hero;