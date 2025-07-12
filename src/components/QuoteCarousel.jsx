import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart } = FiIcons;

const quotes = [
  {
    text: "Love deepens with time, like fine wine that grows richer with each passing year.",
    author: "Unknown"
  },
  {
    text: "The best love is the kind that awakens the soul and makes us reach for more.",
    author: "Nicholas Sparks"
  },
  {
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu"
  },
  {
    text: "A successful marriage requires falling in love many times, always with the same person.",
    author: "Mignon McLaughlin"
  },
  {
    text: "Love is not about how many days, months, or years you have been together. It's about how much you love each other every single day.",
    author: "Unknown"
  }
];

const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-champagne-50 via-pearl-50 to-dusty-50 dark:from-slate-800 dark:via-slate-700 dark:to-lavender-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-16 h-16 bg-champagne-400 dark:bg-champagne-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiHeart} className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <div className="relative h-48 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <blockquote className="text-2xl sm:text-3xl font-serif font-light text-slate-800 dark:text-pearl-100 mb-6 leading-relaxed">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <cite className="text-champagne-600 dark:text-champagne-400 font-medium">
                  — {quotes[currentQuote].author}
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentQuote
                    ? 'bg-champagne-400 dark:bg-champagne-500'
                    : 'bg-champagne-200 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;