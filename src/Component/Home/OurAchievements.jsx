import React from 'react'
import Decore from "../../assets/HomeIMG/Decore.png";
import Small from "../../assets/HomeIMG/Small.png";
import img from "../../assets/HomeIMG/img-52.jpg"
import { PlayCircle } from "lucide-react";

const OurAchievements = () => {
  return (
    <section
      className="relative w-full h-auto bg-white overflow-hidden object-cover font-family"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Section with Blue Background and Clip */}
        <div className="bg-[#003B73] md:rounded-br-[50px] sm:rounded-tr- text-white px-8 py-12 md:pl-16 md:pr-10 relative clip-slant z-20">
          {/* Decor Icon */}
          <img
            src={Decore}
            alt="Decor"
            className="absolute top-6 left-6 w-6 h-6"
          />

          <h2 className="text-3xl md:text-4xl font-bold mt-10">
            Our <br />
            <span className="text-white underline decoration-yellow-400">Achievements</span>
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-slate-100">
            Over the years, our charity has touched thousands of lives through dedicated service and impactful initiatives. From providing food and essential supplies to underprivileged families, to supporting the education of over 500 children, our efforts have created real change in communities across the region. We’ve successfully completed over 30 community projects, partnered with local organizations, and mobilized hundreds of volunteers to spread kindness and hope.
          </p>

          <a href="/contact"><button to="/conatct" className="cursor-pointer mt-6 px-5 py-2 bg-yellow-400 text-black font-semibold rounded">
            Contact Us
          </button></a>
        </div>

        {/* Right Side Empty to Preserve Grid */}
        <div className="hidden md:block"></div>
      </div>

      {/* Play Button Centered on Right 
      <div className="absolute inset-0 flex items-center justify-end pr-20 z-10">
        <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
          <PlayCircle className="text-white w-6 h-6" />
        </div>
      </div> */}

      {/* Custom Slant Style */}
      <style jsx>{`
        .clip-slant {
          clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  )
}

export default OurAchievements