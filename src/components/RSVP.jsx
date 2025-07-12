import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiPhone, FiUsers, FiHeart, FiCheck } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    honorific: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    attendance: '',
    guestCount: '1',
    dietaryRestrictions: '',
    memory: '',
    specialRequests: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-pearl-50 dark:bg-slate-900 relative overflow-hidden">
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-champagne-400 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -10,
                  opacity: 1
                }}
                animate={{
                  y: window.innerHeight + 10,
                  opacity: 0
                }}
                transition={{
                  duration: 3,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-800 p-12 rounded-lg shadow-lg border border-champagne-200 dark:border-slate-700"
          >
            <div className="w-16 h-16 bg-champagne-400 dark:bg-champagne-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiCheck} className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-serif font-light text-slate-800 dark:text-pearl-100 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-slate-600 dark:text-pearl-300 font-light mb-6">
              Your RSVP has been received. We're thrilled you'll be joining us for this special celebration.
            </p>
            <div className="text-champagne-600 dark:text-champagne-400 font-light">
              We'll send you additional details closer to the date.
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-pearl-50 dark:bg-slate-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-slate-800 dark:text-pearl-100 mb-4">
            RSVP
          </h2>
          <p className="text-lg text-slate-600 dark:text-pearl-300 font-light">
            Please let us know if you'll be joining us for our special day.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-champagne-200 dark:border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
                Title
              </label>
              <select
                name="honorific"
                value={formData.honorific}
                onChange={handleChange}
                className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
              >
                <option value="">Select</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
              </select>
            </div>
            
            <div>
              <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
              />
            </div>
            
            <div>
              <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
              />
            </div>
            
            <div>
              <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
                Will you attend? *
              </label>
              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                required
                className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
              >
                <option value="">Please select</option>
                <option value="yes">Yes, with joy!</option>
                <option value="no">Regretfully, no</option>
              </select>
            </div>
            
            <div>
              <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
                Number of Guests
              </label>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
              Dietary Restrictions
            </label>
            <input
              type="text"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              placeholder="Please let us know of any dietary needs"
              className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
              Will you share a memory? (Optional)
            </label>
            <textarea
              name="memory"
              value={formData.memory}
              onChange={handleChange}
              rows="4"
              placeholder="Share a favorite memory of Margaret & Robert..."
              className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
            />
          </div>

          <div className="mb-8">
            <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="3"
              placeholder="Any special accommodations needed?"
              className="w-full p-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-champagne-400 to-champagne-600 text-white py-4 px-6 rounded-lg font-medium hover:from-champagne-500 hover:to-champagne-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <SafeIcon icon={FiHeart} className="w-5 h-5" />
            <span>Send RSVP</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVP;