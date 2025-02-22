// src/components/Contact.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
      
    e.target.reset();
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-gray-800 dark:text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-gray-800 dark:text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 dark:text-gray-200 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
