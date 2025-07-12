import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
  {
    year: '1984',
    title: 'We Met',
    description: 'A chance encounter at the university library that changed everything.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '1986',
    title: 'First Home',
    description: 'Our little apartment on Maple Street, where we learned to build a life together.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '1988',
    title: 'Sarah Arrives',
    description: 'Our first blessing, bringing light and laughter into our world.',
    image: 'https://images.unsplash.com/photo-1544776527-59c5a8b0f3a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '1991',
    title: 'Michael Joins Us',
    description: 'Our family grows with another beautiful soul to love and cherish.',
    image: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '1995',
    title: 'Dream House',
    description: 'Building our forever home on Willow Creek, where memories would flourish.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2010',
    title: 'Empty Nesters',
    description: 'Rediscovering each other as our children began their own journeys.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2018',
    title: 'Grandparents',
    description: 'Little Emma brings new joy and reminds us love multiplies infinitely.',
    image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2024',
    title: 'Golden Renewal',
    description: 'Celebrating 40 years of love with hearts full of gratitude.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-champagne-200 dark:border-slate-700">
          <div className="text-2xl font-serif font-medium text-champagne-600 dark:text-champagne-400 mb-2">
            {item.year}
          </div>
          <h3 className="text-xl font-serif font-medium text-slate-800 dark:text-pearl-100 mb-3">
            {item.title}
          </h3>
          <p className="text-slate-600 dark:text-pearl-300 font-light leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
      
      <div className="w-16 h-16 bg-champagne-400 dark:bg-champagne-500 rounded-full flex items-center justify-center relative z-10 shadow-lg">
        <div className="w-8 h-8 bg-white dark:bg-slate-800 rounded-full"></div>
      </div>
      
      <div className={`w-1/2 ${isEven ? 'pl-8' : 'pr-8'}`}>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="py-20 bg-pearl-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-slate-800 dark:text-pearl-100 mb-4">
            Our Love Through the Years
          </h2>
          <p className="text-lg text-slate-600 dark:text-pearl-300 font-light max-w-2xl mx-auto">
            Every year has brought new chapters to our story, each one more beautiful than the last.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-champagne-400 via-champagne-300 to-champagne-400 dark:from-champagne-500 dark:via-champagne-400 dark:to-champagne-500"></div>
          
          {timelineData.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;