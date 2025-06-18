import React from "react";
import Decore from "../../assets/HomeIMG/Decore.png";
import img from "../../assets/HomeIMG/img-52.jpg";
import { PlayCircle } from "lucide-react";

const OurAchievements = () => {
  return (
    <section
      className="relative w-full h-auto bg-white overflow-hidden font-family"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="relative z-20">
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-blue-900/80 md:rounded-br-[50px] clip-slant md:clip-slant z-10"></div>

          {/* Content Layer */}
          <div
            className="relative z-20 text-white px-6 py-10 md:px-16 md:py-12"
            data-aos="fade-right"
          >
            {/* Decor Icon */}
            <img
              src={Decore}
              alt="Decor"
              className="absolute top-6 left-6 w-6 h-6"
              data-aos="zoom-in"
            />

            <h2
              className="text-3xl md:text-4xl font-bold mt-10"
              data-aos="fade-up"
            >
              Our <br />
              <span className="text-white underline decoration-yellow-400">
                Achievements
              </span>
            </h2>

            <p
              className="mt-6 text-base leading-relaxed text-slate-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Over the years, our charity has touched thousands of lives through
              dedicated service and impactful initiatives. From providing food
              and essential supplies to underprivileged families, to supporting
              the education of over 500 children, our efforts have created real
              change in communities across the region. We’ve successfully
              completed over 30 community projects, partnered with local
              organizations, and mobilized hundreds of volunteers to spread
              kindness and hope.
            </p>

            <a href="/contact">
              <button
                className="cursor-pointer mt-6 px-5 py-2 bg-yellow-400 text-black font-semibold rounded"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Contact Us
              </button>
            </a>
          </div>
        </div>

        {/* Right Column (blank) */}
        <div className="hidden md:block" data-aos="fade-left"></div>
      </div>

      {/* Custom Slant Style */}
      <style jsx>{`
        @media (min-width: 768px) {
          .clip-slant {
            clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default OurAchievements;
