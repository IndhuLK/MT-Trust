import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Image1 from "../../assets/HomeIMG/Image1.jpg";
import { GiNotebook } from "react-icons/gi";

const CharitySection = () => {
  return (
    
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <div>
        {/* Heading */}
        <h4 className="text-gray-700 font-medium text-xl mb-5">
          Welcome To Charity -----------
        </h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Let Us Come Together To Make A Difference
        </h2>
        <p className="text-gray-600 mb-6">
          The MTSSDS seeks to provide comprehensive and holistic development to
          rural and urban population according to Sustainable Development Goals
          (SDG) with special focus to health care and environmental protection.
        </p>

        {/* Mission & Vision */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-md flex-1 flex items-start gap-3">
            <IoShieldCheckmarkSharp className="text-blue-600 mt-1 w-10 h-auto" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                Our Mission
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Content Content Content. Content Content Content xfb Content
                contentcontent.
              </p>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-md flex-1 flex items-start gap-3">
            <GiNotebook  className="text-blue-600 mt-1 w-10 h-auto" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                Our Vision
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Content Content Content. Content Content Content xfb Content
                contentcontent.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Donations</span>
              <span>75%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-400 h-3 rounded-full w-[75%]"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Medical Help</span>
              <span>90%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-400 h-3 rounded-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side with Images and List */}
      <div className="relative w-full max-w-[500px] mx-auto md:mx-0">
        {/* Base Image */}
        <img
          src={Image1}
          alt="Main Image"
          className="w-full h-auto md:h-[400px] rounded-md z-10 relative border-[8px] border-[#83A6C4] shadow-md object-cover"
        />

        {/* Inset Box with Points */}
        <div className="md:absolute md:-bottom-20 md:right-[-50px] bg-white p-5 rounded-md w-full md:w-[80%] z-20 border-[8px] border-[#83A6C4] shadow-md mt-6 md:mt-0">
          <ul className="list-disc pl-5 text-gray-800 space-y-2 text-sm md:text-base">
            <li>Together, we’re going to make the future</li>
            <li>Children where we are able to fulfill all</li>
            <li>Their requirements to keep them safe from withered world</li>
            <li>We have already stepped out and started changing the world</li>
            <li>Keeping safe them from war, inhumanity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharitySection;
