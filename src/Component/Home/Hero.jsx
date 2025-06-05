import React from "react";
import HeroIMG from "../../assets/HomeIMG/HeroIMG.jpg";
import Logo from "../../assets/Logo.png";
import CountUp from "react-countup";
import { FaAward, FaUsers, FaRegClock, FaBullseye } from "react-icons/fa";

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
const Hero = () => {
  return (
    <div className="font-Poppins relative bg-white text-[#03457B] min-h-screen overflow-visible">
      {/* Left side decorative image */}
      <img
        src={Logo}
        alt="decor"
        className="absolute top-0 left-15 z-0 w-36 h-36"
      />

      {/* Main Content */}
      <div className="relative top-10 z-10 container mx-auto px-4 md:px-12 py-30 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className=" text-3xl md:text-3xl lg:text-4xl font-bold leading-normal cursor-pointer">
            <span className="block relative group ">
              <span className="relative inline-block border-b-3 border-transparent group-hover:border-yellow-400 transition-all duration-300 ease-in-out">
                MOTHER THERASA
              </span>
            </span>
            <span className="block relative group ">
              <span className="relative inline-block border-b-3 border-transparent group-hover:border-yellow-400 transition-all duration-300 ease-in-outl">
                SOCIAL SERVICE AND
              </span>{" "}
            </span>
            <span className="block relative group ">
              <span className="relative inline-block border-b-3 border-transparent group-hover:border-yellow-400 transition-all duration-300 ease-in-out">
                DEVELOPMENT SERVICES
              </span>
            </span>
          </h1>
          <p className="text-slate-800 leading-relaxed ">
            Our organization has been working with under privilege, is advantage
            and downtrodden community and thus the staff has a good rapport with
            all the people like HIV affected community, single women,
            differently abled people, women victims of domestic violence etc...
          </p>
          <p className="text-slate-800 leading-relaxed">
            Comprehensive health care for disabled people, mentally retarded and
            for elderly improving public health in rural areas promotion and
            protection of rural arts & cultural heritage, provide education and
            training on climate change and biodiversity by creating modern
            community gardens.
          </p>
          {/* <button className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
            About Us
          </button>*/}
          <p className="font-bold">
            {" "}
            “INTENSE LOVE DOES NOT MEASURE, IT JUST GIVES”
          </p>
        </div>

        {/* Image Section with glass effect */}
        <div className="relative w-[250px] h-[250px] mx-auto rounded-full">
          {/* Glass-style circular background */}
          <div
            className="absolute -inset-13 w-[350px] h-[350px] rounded-full overflow-hidden z-0 border border-white/20 backdrop-blur-xl shadow-xl"
            style={{
              backgroundImage: `url(${HeroIMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.8,
            }}
          ></div>

          {/* Circular image */}
          <img
            src={HeroIMG}
            alt="Volunteers"
            className="relative w-full h-full object-cover rounded-full z-10"
          />

          {/* Contact Us Button */}
          {/*<div className="absolute -bottom-30 right-0 flex items-center space-x-2 z-20">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
              Contact Us
            </button>
            <span className="bg-yellow-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </div>*/}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-12 sm:py-6 md:py-12 relative font-Poppins">
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
    </div>
  );
};

export default Hero;
