// src/components/Testimonials.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialsData = [
  {
    name: "Alice",
    feedback: "I've seen incredible changes in my body and energy levels. Truly life-changing coaching!",
    image: "test02.jpg",
  },
  {
    name: "Bob",
    feedback: "The personalized approach to fitness and nutrition was exactly what I needed.",
    image: "testi01.jpeg",
  },
  {
    name: "Catherine",
    feedback: "I love the motivational support and practical advice. Highly recommend!",
    image: "testi03.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          What Clients Say
        </h2>
        <div className="relative max-w-xl mx-auto">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
            >
              <img
                src={testimonialsData[current].image}
                alt={testimonialsData[current].name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "{testimonialsData[current].feedback}"
              </p>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {testimonialsData[current].name}
              </h3>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-l hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Prev
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-r hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
