import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonationPopup from "../../NavFot/DonationPopup";

const Water = () => {

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
  <div className="max-w-6xl mx-auto p-6 md:p-10 font-family">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Build Clean Water Wells
      </h1>

      <p className="text-center text-blue-700 font-semibold mb-10">
        Category: Water Access
      </p>

      {/* Container 1 */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">
          Bring Fresh Water to Every Village
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          Access to clean and safe drinking water is a basic human right. Yet, in many remote and underdeveloped areas, communities struggle daily to find water that’s free from contamination. Women and children often walk miles to fetch water from unsafe sources, risking their health and wasting valuable time that could be spent on education or work.
          <br /><br />
          The "Build Clean Water Wells" initiative focuses on constructing deep bore wells and hand pumps in water-scarce villages. These wells provide a sustainable source of clean drinking water, reducing the prevalence of waterborne diseases and improving the overall quality of life for entire communities.
          <br /><br />
          Every well built transforms lives—helping children stay in school, supporting better hygiene, and uplifting the dignity of people who no longer need to struggle for this essential resource.
        </p>
      </div>

      {/* Support Section – Revamped Design */}
      <div className="bg-blue-100 rounded-xl shadow-inner p-8 md:p-10 mb-12">
        <div className="md:flex items-center gap-8">
          {/* Text Content */}
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Water is Life – Make it Reachable
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Donate Now
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/3">
            <img
              src="/src/assets/HomeImg/img-32.jpg"
              alt="Water Well Project"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Donation Popup */}
      {showPopup && <DonationPopup onClose={() => setShowPopup(false)} />}

      {/* Container 2 */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">
          The Ripple Effect of Clean Water
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          A clean water well serves as a lifeline to hundreds of people. With easy access to water, communities see significant improvements in hygiene, agricultural productivity, and children’s school attendance. Health clinics can offer safer conditions, and local economies begin to flourish.
          <br /><br />
          Your donation not only builds a well — it builds hope. These wells are strategically located and maintained in collaboration with local residents to ensure long-term sustainability. Community training is provided on hygiene practices and well maintenance.
          <br /><br />
          Let’s work together to ensure no child has to drink from a dirty pond. A single act of kindness can change hundreds of lives. Be the reason a village wakes up tomorrow with safe, clean water.
        </p>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <button
          onClick={() => navigate('/services')}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          &larr; Back to Services
        </button>
      </div>
    </div>
  )
};

export default Water;
