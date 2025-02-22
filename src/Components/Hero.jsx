// src/components/Hero.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section className="relative h-screen flex items-center justify-center text-center overflow-hidden dark:bg-gray-900">
//       {/* Background Image with overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center" 
//         style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?fitness,workout')" }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50 dark:opacity-60"></div>
//       </div>
      
//       <div className="relative z-10 px-4">
//         {/* Animated Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-6xl font-bold text-white mb-4"
//         >
//           Transform Your Body with Expert Coaching
//         </motion.h1>
        
//         {/* Animated Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-lg md:text-2xl text-gray-200 mb-8"
//         >
//           Achieve your fitness goals with personalized training and nutrition plans.
//         </motion.p>
        
//         {/* Animated CTA Button */}
//         <motion.button
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: 1 }}
//           className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition"
//         >
//           Book a Free Consultation
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// mobile responsive
// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden dark:bg-gray-900">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('background1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 dark:opacity-60"></div>
      </div>
      
      <div className="relative z-10 px-4">
        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Transform Your Body with Expert Coaching
        </motion.h1>
        
        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-200 mb-8"
        >
          Achieve your fitness goals with personalized training and nutrition plans.
        </motion.p>
        
        {/* Animated CTA Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition"
        >
          Book a Free Consultation
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
