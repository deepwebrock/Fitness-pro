// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: "Personal Training",
    description: "Customized workout plans tailored to your goals.",
    icon: "💪",
  },
  {
    title: "Online Coaching",
    description: "Virtual coaching sessions to keep you on track.",
    icon: "📱",
  },
  {
    title: "Nutrition Plans",
    description: "Personalized diet plans for optimal performance.",
    icon: "🥗",
  },
  {
    title: "Group Sessions",
    description: "Motivational group workouts for a fun fitness experience.",
    icon: "👥",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div className="text-4xl mb-4 text-center text-gray-800 dark:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
