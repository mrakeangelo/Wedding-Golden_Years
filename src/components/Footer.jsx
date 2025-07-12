import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-pearl-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-champagne-400 to-champagne-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">G</span>
              </div>
              <span className="font-serif text-xl font-medium">Golden Years</span>
            </div>
            <p className="text-pearl-300 font-light leading-relaxed">
              Celebrating 40 years of love, laughter, and cherished memories. 
              Join us as we renew our vows and embark on the next chapter of our journey together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="font-serif text-lg font-medium mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-champagne-400" />
                <span className="text-pearl-300 font-light">margaret.robert@email.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-4 h-4 text-champagne-400" />
                <span className="text-pearl-300 font-light">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 text-champagne-400" />
                <span className="text-pearl-300 font-light">Napa Valley, CA</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="font-serif text-lg font-medium mb-4">Special Thanks</h3>
            <p className="text-pearl-300 font-light leading-relaxed">
              To our children, grandchildren, and dear friends who have been part of our journey. 
              Your love and support have made these 40 years truly golden.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-2 text-pearl-300 font-light"
            >
              <SafeIcon icon={FiHeart} className="w-4 h-4 text-champagne-400" />
              <span>Made with love for our golden celebration</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-pearl-400 font-light text-sm"
            >
              Golden Years – A Vow Renewal Wedding Template by Mrake Agency
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;