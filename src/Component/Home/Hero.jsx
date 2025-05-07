import React from "react";
import HeroIMG from "../../assets/HomeIMG/HeroIMG.jpg";

const Hero = () => {
  return (
    <div className="relative bg-[#03457B] text-white min-h-screen overflow-visible">
      {/* Left side decorative image */}
      <img
        src="/assets/left-decor.png"
        alt="decor"
        className="absolute top-0 left-0 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-normal cursor-pointer">
            <span className="block relative group ">
              <span className="hover:underline hover:decoration-yellow-400 hover:underline-offset-4 transition-all">
                MOTHER THERASA
              </span>
            </span>
            <span className="hover:underline hover:decoration-yellow-400 hover:underline-offset-4 transition-all">SOCIAL SERVICE AND</span> <br />
            <span className="hover:underline hover:decoration-yellow-400 hover:underline-offset-4 transition-all">DEVELOPMENT SERVICES</span>
          </h1>
          <p className="text-gray-200 leading-relaxed font-semibold">
            Our organization has been working with under privilege, is advantage
            and downtrodden community and thus the staff has a good rapport with
            all the people like HIV affected community, single women,
            differently abled people, women victims of domestic violence etc...
          </p>
          <p className="text-gray-200 leading-relaxed font-semibold">
            Comprehensive health care for disabled people, mentally retarded and
            for elderly improving public health in rural areas promotion and
            protection of rural arts & cultural heritage, provide education and
            training on climate change and biodiversity by creating modern
            community gardens.
          </p>
          <button className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
            About Us
          </button>
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
          <div className="absolute -bottom-30 right-0 flex items-center space-x-2 z-20">
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
          </div>
        </div>
      </div>

      {/* Bottom Center White Rectangle Box */}
      <div className="p-5 m-2">
      <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[80%] md:w-[70%] h-[80px] bg-white rounded-2xl shadow-lg z-20"></div>
    </div>
    </div>
  );
};

export default Hero;
