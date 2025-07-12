import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUser, FiMessageSquare } = FiIcons;

const Guestbook = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Sarah Thompson-Miller',
      message: 'Mom and Dad, watching you two renew your vows fills my heart with so much joy. Your love story has been my greatest inspiration. Here\'s to many more years of your beautiful journey together.',
      date: 'September 10, 2024',
      relationship: 'Daughter'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      message: 'To the best parents a son could ask for - your love has been the foundation of our family. Congratulations on 40 amazing years!',
      date: 'September 8, 2024',
      relationship: 'Son'
    },
    {
      id: 3,
      name: 'Eleanor & James Wilson',
      message: 'Dear Margaret and Robert, we\'ve been blessed to witness your love story unfold over the decades. Your commitment to each other is truly inspiring.',
      date: 'September 5, 2024',
      relationship: 'Friends'
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    name: '',
    message: '',
    relationship: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        ...newMessage,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '', relationship: '' });
    }
  };

  const handleChange = (e) => {
    setNewMessage({
      ...newMessage,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-pearl-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-slate-800 dark:text-pearl-100 mb-4">
            Leave a Note of Celebration
          </h2>
          <p className="text-lg text-slate-600 dark:text-pearl-300 font-light max-w-2xl mx-auto">
            Share your wishes, memories, and blessings for Margaret and Robert as they celebrate this milestone.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-champagne-200 dark:border-slate-700 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={newMessage.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
              />
            </div>
            
            <div>
              <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
                Relationship (Optional)
              </label>
              <input
                type="text"
                name="relationship"
                value={newMessage.relationship}
                onChange={handleChange}
                placeholder="e.g., Friend, Colleague, Family"
                className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
              Your Message *
            </label>
            <textarea
              name="message"
              value={newMessage.message}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Share your congratulations, memories, or wishes..."
              className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-champagne-400 to-champagne-600 text-white py-3 px-6 rounded-lg font-medium hover:from-champagne-500 hover:to-champagne-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <SafeIcon icon={FiHeart} className="w-5 h-5" />
            <span>Add Your Message</span>
          </motion.button>
        </motion.form>

        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-champagne-200 dark:border-slate-700"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-champagne-400 dark:bg-champagne-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiUser} className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-medium text-slate-800 dark:text-pearl-100">
                      {message.name}
                    </h3>
                    {message.relationship && (
                      <span className="text-champagne-600 dark:text-champagne-400 text-sm">
                        • {message.relationship}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-pearl-300 font-light leading-relaxed mb-3">
                    {message.message}
                  </p>
                  <div className="text-slate-400 dark:text-pearl-500 text-sm">
                    {message.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;