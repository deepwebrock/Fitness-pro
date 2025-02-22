// // src/components/About.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section className="py-16 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//         {/* Trainer Image */}
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src="public\trainner.webp"
//             alt="Fitness Trainer"
//             className="rounded-lg shadow-lg"
//           />
//         </motion.div>

//         {/* About Text */}
//         <motion.div
//           className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
//             About Me
//           </h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Hi, I'm [Trainer's Name], a certified fitness trainer and coach with over [X] years of experience in transforming lives. I specialize in personalized workout plans, nutrition guidance, and motivational coaching.
//           </p>
//           <p className="text-lg text-gray-700 dark:text-gray-300">
//             My goal is to empower you to achieve your fitness goals and unlock your full potential. Let's work together to build a healthier, stronger you!
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;


// mobile responsiveness

// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Trainer Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="trainner.webp"
            alt="Fitness Trainer"
            className="w-3/4 md:w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Hi, I'm Fitness Pro, a certified fitness trainer and coach with over 11 years of experience in transforming lives. I specialize in personalized workout plans, nutrition guidance, and motivational coaching.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My goal is to empower you to achieve your fitness goals and unlock your full potential. Let's work together to build a healthier, stronger you!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
