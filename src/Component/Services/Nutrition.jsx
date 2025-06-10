import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DonationPopup from '../../NavFot/DonationPopup';
import { motion } from 'framer-motion';

const Nutrition = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 font-family">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-green-800 mb-6"
      >
        Nutrition for Healthier Lives
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center text-green-600 font-semibold mb-10"
      >
        Category: Nutrition
      </motion.p>

      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white shadow-lg rounded-xl p-6 mb-10"
      >
        <h3 className="text-2xl font-semibold mb-4 text-green-600">
          Combat Malnutrition and Hunger
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Millions of children suffer from malnutrition, lacking the basic nutrients required for proper growth and mental development. Our Nutrition initiative ensures vulnerable communities receive nutritious meals, vitamin supplements, and proper dietary education.
          <br /><br />
          By supporting this cause, you help us serve mid-day meals in schools, distribute essential grocery kits to families, and organize community health and nutrition camps.
        </p>
      </motion.div>

      {/* Image 
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        src="/src/assets/HomeImg/img-33.jpg"
        alt="Nutrition Support"
        className="w-full h-96 object-cover rounded-xl mb-10 shadow-lg"
      />*/}

      {/* Support Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-green-100 rounded-xl shadow-inner p-8 md:p-10 mb-12"
      >
        <div className="md:flex items-center gap-8">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Your Support Nourishes Lives
            </h2>
            <p className="text-gray-700 mb-6">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded hover:bg-green-600 transition"
            >
              Donate Now
            </button>
          </div>
          <div className="md:w-1/3">
            <img
              src="/src/assets/HomeImg/img-13.jpg"
              alt="Healthy Food Support"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </motion.div>

      {/* Donation Popup */}
      {showPopup && <DonationPopup onClose={() => setShowPopup(false)} />}

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white shadow-md rounded-xl p-6 mb-10"
      >
        <h3 className="text-2xl font-semibold mb-4 text-green-600">
          Healthier Kids, Brighter Future
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Well-nourished children are more likely to attend school regularly, perform well in academics, and grow into healthy adults. Our mission is to build a generation that is both physically and mentally fit through proper nutrition. Join us in creating a sustainable impact, one meal at a time.
        </p>
      </motion.div>

      {/* Back Button */}
      <div className="text-center">
        <button
          onClick={() => navigate('/services')}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          &larr; Back to Services
        </button>
      </div>
    </div>
  );
};

export default Nutrition;
