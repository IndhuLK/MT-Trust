import React, { useState } from 'react'
import Image8 from "../../assets/HomeIMG/img-8.jpg";
import Image7 from "../../assets/HomeIMG/img-7.jpg";
import DonationPopup from "../../NavFot/DonationPopup";

const SupportPower = () => {
  const [showPopup, setShowPopup] = useState(false); 

  return (
    <div className="font-family max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
      
      {/* Left Side Images */}
      <div className="relative w-full h-auto max-w-[500px] mx-auto md:mx-0">
        {/* Main Image */}
        <img
          src={Image7}
          alt="Support Image 1"
          className="w-full h-auto md:h-[400px] rounded-md z-10 relative shadow-md object-cover"
        />

        {/* Inset Image */}
        <img
          src={Image8}
          alt="Support Image 2"
          className="
            rounded-md 
            border-8 border-[#83A6C4] shadow-md 
            mt-6 md:mt-0
            w-full md:w-[80%] 
            md:absolute md:-bottom-28 md:right-[-50px] 
            object-cover z-10
            "
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full mt-8 md:mt-0">
        <h4 className="text-gray-700 font-medium text-xl mb-2">About Us --------</h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Your Support Is Really Powerful.
        </h2>
        <p className="text-gray-600 mb-6">
          The secret to happiness lies in helping others. Never underestimate the
          difference YOU can make in the lives of the poor, the abused and the helpless.
        </p>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-yellow-500 transition cursor-pointer"
        >
          Donate Button
        </button>
      </div>

      {/* Conditional rendering of DonationPopup */}
      {showPopup && <DonationPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default SupportPower;
