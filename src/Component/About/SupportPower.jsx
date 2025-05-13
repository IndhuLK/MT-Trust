import React from 'react'
import Image2 from "../../assets/HomeIMG/Image2.jpg";
import Image3 from "../../assets/HomeIMG/Image3.jpg";

const SupportPower = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-6">
      
      {/* Left Side Images */}
      <div className="relative w-full h-[350px]">
        {/* Main Image */}
        <img
          src={Image3}
          alt="Support Image 1"
          className="w-[70%] h-[100%] rounded border-10 border-[#83A6C4] shadow-lg z-10 relative object-cover"
        />

        {/* Inset Image */}
        <img
          src={Image2}
          alt="Support Image 2"
          className="w-[40%] h-[60%] rounded border-5 border-[#83A6C4] shadow-md absolute -bottom-20 left-52 z-20 object-cover"
        />
      </div>

      {/* Right Side Content */}
      <div>
        <h4 className="text-gray-700 font-medium text-xl mb-2">About Us --------</h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Your Support Is Really Powerful.
        </h2>
        <p className="text-gray-600 mb-6">
          The secret to happiness lies in helping others. Never underestimate the
          difference YOU can make in the lives of the poor, the abused and the helpless.
        </p>
        <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-yellow-500 transition">
          Read More
        </button>
      </div>
    </div>
  )
}

export default SupportPower