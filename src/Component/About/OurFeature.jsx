import React from "react";
import { FaHome } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaUsers, FaDove, FaGlobeAmericas } from "react-icons/fa";

const features = [
  {
    icon: <FaHandshake className="text-4xl text-blue-800" />,
    value: "4597+",
    label: "People Rised",
  },
  {
    icon: <FaUsers className="text-4xl text-blue-800" />,
    value: "8945+",
    label: "Volunteer",
  },
  {
    icon: <FaDove className="text-4xl text-blue-800" />,
    value: "10M+",
    label: "Poor People Saved",
  },
  {
    icon: <FaGlobeAmericas className="text-4xl text-blue-800" />,
    value: "100+",
    label: "Country Member",
  },
];
const OurFeature = () => {
  return (
    <div>
      <div className="px-15 py-10 bg-white">
        {/* Section Title */}
        <div className=" mb-10">
          <p className="ttext-gray-700 font-medium text-xl mb-1">
            About --------
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Features
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Tallest */}
          <div className="p-6 rounded-xl h-[300px] shadow-lg transition-all duration-300 group hover:bg-[#0E4C92] hover:text-white bg-[#F1FAFA]">
            <div className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 mb-4">
              <FaHome className="w-10 h-10 text-blue-800 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Food & Homeless Charity
            </h3>
            <p className="text-sm mb-4">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy.
            </p>
            <ul className="text-sm list-decimal pl-4 space-y-1">
              <li>Join Your Hand With Us For A Better Life</li>
              <li>Let’s Do The Right Thing Now</li>
            </ul>
          </div>

          {/* Card 2 - Medium */}
          <div className="p-6 rounded-xl h-[320px] shadow-lg transition-all duration-300 group hover:bg-[#0E4C92] hover:text-white bg-[#F1FAFA]">
            <div className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 mb-4">
              <FaHandHoldingDollar className="w-12 h-12 text-blue-800 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Make A Donation</h3>
            <p className="text-sm mb-4">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.
            </p>
            <ul className="text-sm list-decimal pl-4 space-y-1">
              <li>Join Your Hand With Us For A Better Life</li>
              <li>Let’s Do The Right Thing Now</li>
              <li>Lorem Ipsum Dolor Sit Amet</li>
            </ul>
          </div>

          {/* Card 3 - Shortest */}
          <div className="p-6 rounded-xl h-[340px] shadow-lg transition-all duration-300 group hover:bg-[#0E4C92] hover:text-white bg-[#F1FAFA]">
            <div className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 mb-4">
              <FaHandshake className="w-12 h-12 text-blue-800 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Non Profit NGO</h3>
            <p className="text-sm mb-4">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.
            </p>
            <ul className="text-sm list-decimal pl-4 space-y-1">
              <li>Join Your Hand With Us For A Better Life</li>
              <li>Let’s Do The Right Thing Now</li>
              <li>Lorem Ipsum Dolor Sit Amet</li>
              <li>Children Where We Are Able To Fulfill All</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-teal-50 rounded-2xl shadow-md w-70 p-6 text-center flex flex-col items-center"
          >
            <div className="flex items-center justify-center h-16 w-16 mb-4">
              {feature.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {feature.value}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeature;
