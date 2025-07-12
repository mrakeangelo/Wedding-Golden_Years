import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { AdminProvider, useAdmin } from './contexts/AdminContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import CeremonyInfo from './components/CeremonyInfo';
import QuoteCarousel from './components/QuoteCarousel';
import Countdown from './components/Countdown';
import RSVP from './components/RSVP';
import Gallery from './components/Gallery';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import SafeIcon from './common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSettings } = FiIcons;

const AppContent = () => {
  const { isAdmin } = useAdmin();
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        <Timeline />
        <QuoteCarousel />
        <CeremonyInfo />
        <Countdown />
        <RSVP />
        <Gallery />
        <Guestbook />
      </main>

      <Footer />

      {!isAdmin && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAdminLogin(true)}
          className="fixed bottom-6 right-6 w-12 h-12 bg-champagne-400 dark:bg-champagne-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow z-40"
        >
          <SafeIcon icon={FiSettings} className="w-6 h-6" />
        </motion.button>
      )}

      {showAdminLogin && !isAdmin && (
        <AdminLogin onClose={() => setShowAdminLogin(false)} />
      )}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AdminProvider>
        <AppContent />
      </AdminProvider>
    </ThemeProvider>
  );
};

export default App;