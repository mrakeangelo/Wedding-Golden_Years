import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiClock, FiUsers, FiHeart } = FiIcons;

const CeremonyInfo = () => {
  const ceremonyDetails = [
    {
      icon: FiMapPin,
      title: 'Location',
      primary: 'Sunset Garden Vineyard',
      secondary: '1234 Vine Street, Napa Valley, CA 94558',
      description: 'A romantic vineyard setting overlooking the valley'
    },
    {
      icon: FiClock,
      title: 'Ceremony Time',
      primary: 'September 15, 2024',
      secondary: '5:00 PM - 9:00 PM',
      description: 'Ceremony at 5:30 PM followed by dinner and dancing'
    },
    {
      icon: FiUsers,
      title: 'Dress Code',
      primary: 'Garden Party Elegant',
      secondary: 'Semi-formal attire',
      description: 'Think garden party meets celebration of love'
    },
    {
      icon: FiHeart,
      title: 'Special Request',
      primary: 'Your Presence',
      secondary: 'No gifts necessary',
      description: 'Your love and memories are all we need'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-slate-800 dark:text-pearl-100 mb-4">
            Ceremony Details
          </h2>
          <p className="text-lg text-slate-600 dark:text-pearl-300 font-light max-w-2xl mx-auto">
            We invite you to join us for an intimate celebration of enduring love and renewed promises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ceremonyDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-pearl-50 dark:bg-slate-700 p-8 rounded-lg border border-champagne-200 dark:border-slate-600 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-champagne-400 dark:bg-champagne-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={detail.icon} className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-medium text-slate-800 dark:text-pearl-100 mb-2">
                    {detail.title}
                  </h3>
                  <div className="text-champagne-600 dark:text-champagne-400 font-medium mb-1">
                    {detail.primary}
                  </div>
                  <div className="text-slate-600 dark:text-pearl-300 font-light mb-3">
                    {detail.secondary}
                  </div>
                  <p className="text-slate-500 dark:text-pearl-400 font-light text-sm">
                    {detail.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-champagne-50 to-dusty-50 dark:from-slate-700 dark:to-lavender-900 p-8 rounded-lg border border-champagne-200 dark:border-slate-600">
            <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-pearl-100 mb-4">
              Transportation & Accommodations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-slate-700 dark:text-pearl-200 mb-2">Recommended Hotels</h4>
                <ul className="text-slate-600 dark:text-pearl-300 font-light space-y-1">
                  <li>• Napa Valley Lodge - (707) 555-0123</li>
                  <li>• Vintage Inn - (707) 555-0456</li>
                  <li>• Maison Fleurie - (707) 555-0789</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-700 dark:text-pearl-200 mb-2">Getting There</h4>
                <ul className="text-slate-600 dark:text-pearl-300 font-light space-y-1">
                  <li>• Valet parking available</li>
                  <li>• Shuttle from downtown hotels</li>
                  <li>• Uber/Lyft readily available</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeremonyInfo;