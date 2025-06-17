import React, { useEffect } from "react";
import { FaAward, FaUsers, FaRegClock, FaBullseye } from "react-icons/fa";
import CountUp from "react-countup";
import AOS from 'aos';
import 'aos/dist/aos.css';

const StatsSection = () => {
  const stats = [
    {
      icon: <FaRegClock size={30} />,
      value: 35,
      label: "Years Of Success",
      suffix: "+",
    },
    {
      icon: <FaBullseye size={30} />,
      value: 88,
      label: "Project Complete",
      suffix: "K",
    },
    { icon: <FaUsers size={30} />, value: 10, label: "Health Care", suffix: "M" },
    {
      icon: <FaAward size={30} />,
      value: 32,
      label: "Winning Awards",
      suffix: "+",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,           
      easing: 'ease-in-out',    
      once: true,               
    });
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 sm:py-6 md:py-12 relative font-Poppins"
    data-aos="fade-up"
        data-aos-duration="1000"
  data-aos-easing="ease-in-out">
        {/* White background container */}
        <div className="mx-auto w-full sm:w-[90%] md:w-[85%] bg-white rounded-2xl shadow-2xl py-6 px-4 md:px-8 z-10 relative">
          {/* Stats Cards in one row on desktop and stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white  p-4 relative"
              >
                {/* Icon */}
                <div className="bg-[#03457B] p-3 rounded-full text-white flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="ml-3">
                  <h2 className="text-lg font-bold text-[#03457B]">
                    <CountUp
                      end={item.value}
                      duration={5}
                      suffix={item.suffix || ""}
                    />
                  </h2>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default StatsSection;
