// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-900 text-center">
      <div className="container mx-auto text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} FitnessPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
