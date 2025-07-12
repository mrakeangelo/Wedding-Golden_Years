import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useAdmin } from '../contexts/AdminContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon, FiSettings, FiEye, FiEdit3, FiLogOut } = FiIcons;

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isAdmin, logout, isPreview, togglePreview, isDraft, toggleDraft } = useAdmin();
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-champagne-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-champagne-400 to-champagne-600 rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-sm">G</span>
            </div>
            <span className="font-serif text-xl font-medium text-slate-800 dark:text-pearl-100">
              Golden Years
            </span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-champagne-100 dark:bg-slate-800 text-slate-700 dark:text-pearl-200 hover:bg-champagne-200 dark:hover:bg-slate-700 transition-colors"
            >
              <SafeIcon icon={isDark ? FiSun : FiMoon} className="w-5 h-5" />
            </motion.button>

            {isAdmin && (
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAdminPanel(!showAdminPanel)}
                  className="p-2 rounded-full bg-champagne-100 dark:bg-slate-800 text-slate-700 dark:text-pearl-200 hover:bg-champagne-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <SafeIcon icon={FiSettings} className="w-5 h-5" />
                </motion.button>

                {showAdminPanel && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-champagne-200 dark:border-slate-700 py-2"
                  >
                    <button
                      onClick={togglePreview}
                      className="w-full px-4 py-2 text-left hover:bg-champagne-50 dark:hover:bg-slate-700 flex items-center space-x-2"
                    >
                      <SafeIcon icon={FiEye} className="w-4 h-4" />
                      <span>{isPreview ? 'Exit Preview' : 'Preview Mode'}</span>
                    </button>
                    <button
                      onClick={toggleDraft}
                      className="w-full px-4 py-2 text-left hover:bg-champagne-50 dark:hover:bg-slate-700 flex items-center space-x-2"
                    >
                      <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                      <span>{isDraft ? 'Publish' : 'Save as Draft'}</span>
                    </button>
                    <button
                      onClick={logout}
                      className="w-full px-4 py-2 text-left hover:bg-champagne-50 dark:hover:bg-slate-700 flex items-center space-x-2 text-red-600"
                    >
                      <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;