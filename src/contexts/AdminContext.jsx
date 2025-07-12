import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isDraft, setIsDraft] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const login = (email, password) => {
    // Simple demo authentication
    if (email === 'admin@goldendays.com' && password === 'golden2024') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  const toggleDraft = () => {
    setIsDraft(!isDraft);
  };

  return (
    <AdminContext.Provider value={{
      isAdmin,
      isPreview,
      isDraft,
      login,
      logout,
      togglePreview,
      toggleDraft
    }}>
      {children}
    </AdminContext.Provider>
  );
};