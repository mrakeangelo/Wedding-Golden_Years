import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../contexts/AdminContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiUser, FiEye, FiEyeOff } = FiIcons;

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAdmin();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (login(email, password)) {
      setEmail('');
      setPassword('');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl border border-champagne-200 dark:border-slate-700 w-full max-w-md"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-champagne-400 dark:bg-champagne-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiLock} className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-serif font-light text-slate-800 dark:text-pearl-100 mb-2">
            Admin Access
          </h2>
          <p className="text-slate-600 dark:text-pearl-300 font-light">
            Enter your credentials to access admin features
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
              Email
            </label>
            <div className="relative">
              <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@goldendays.com"
                className="w-full pl-10 pr-4 py-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 dark:text-pearl-200 font-light mb-2">
              Password
            </label>
            <div className="relative">
              <SafeIcon icon={FiLock} className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-10 pr-12 py-3 border border-champagne-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-pearl-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 dark:focus:ring-champagne-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-pearl-300"
              >
                <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
              </button>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-champagne-400 to-champagne-600 text-white py-3 px-6 rounded-lg font-medium hover:from-champagne-500 hover:to-champagne-700 transition-all duration-300"
          >
            Login
          </motion.button>
        </form>

        <div className="mt-4 text-center text-xs text-slate-500 dark:text-pearl-400">
          Demo credentials: admin@goldendays.com / golden2024
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;