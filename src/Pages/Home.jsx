// src/pages/Home.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';
import Pricing from '../Components/Pricing';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    // This wrapper div sets the background and text colors based on dark mode
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 ">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
