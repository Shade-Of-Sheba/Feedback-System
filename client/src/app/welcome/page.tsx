'use client'
import { motion } from 'framer-motion';

const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-blue-300 to-indigo-500 text-white">

      {/* Hero Section */}
      <motion.section
        className="flex flex-col justify-center items-center text-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Welcome to Kuriftu
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Experience luxury, comfort, and exceptional service like never before.
        </motion.p>
        
        {/* Buttons */}
        <div className="flex space-x-6 mt-8">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Feedback Form')}
          >
            Give Feedback
          </motion.button>

          <motion.button
            className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Chat with Us')}
          >
            Chat with Us
          </motion.button>
        </div>
      </motion.section>

      {/* Dynamic Testimonials */}
      <motion.section
        className="flex flex-col justify-center items-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-3xl font-bold mb-8">What Our Guests Say</h2>

        {/* Testimonials Cards */}
        <div className="flex space-x-6">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-xl max-w-xs"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
          >
            <p className="text-lg font-semibold mb-4">“The best hotel experience ever! Amazing service and beautiful rooms.”</p>
            <p className="text-sm text-gray-600">- John Doe</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-xl max-w-xs"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
          >
            <p className="text-lg font-semibold mb-4">“Absolutely loved it. The location, the food, the hospitality—everything was perfect.”</p>
            <p className="text-sm text-gray-600">- Jane Smith</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full text-center py-4 bg-blue-900 text-white">
        <p>&copy; 2025 [Hotel Name]. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default WelcomePage;
