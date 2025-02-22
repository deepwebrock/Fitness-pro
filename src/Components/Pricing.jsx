// src/components/Pricing.jsx
import React from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Starter Plan',
    price: '₹699',
    period: 'per month',
    features: [
      '1 Personal Training Session',
      'Basic Nutrition Advice',
      'Access to Group Sessions',
    ],
  },
  {
    name: 'Standard Plan',
    price: '₹999',
    period: 'per month',
    features: [
      '3 Personal Training Sessions',
      'Customized Nutrition Plan',
      'Access to All Group Sessions',
      'Monthly Progress Check',
    ],
  },
  {
    name: 'Premium Plan',
    price: '₹2999',
    period: 'per month',
    features: [
      'Unlimited Personal Training Sessions',
      'Fully Customized Nutrition & Meal Plan',
      'Exclusive Coaching & Support',
      'Weekly Progress Analysis',
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-12 text-gray-800 dark:text-white"
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">
                {plan.price}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {plan.period}
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
