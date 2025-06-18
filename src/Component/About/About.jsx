import React from "react";
import SupportPower from "./SupportPower";
import CharitySection from "./CharitySection";
import OurFeature from "./OurFeature";
import OurGallery from "./OurGallery";
import img from "../../assets/HomeIMG/img-24.jpg";
import { Link } from "react-router-dom";
import TrustMember from "./TrustMember";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div>
      <div className="relative w-full font-family flex flex-col md:flex-row h-auto md:h-[500px]">
        {/* Left Side - Blue Background with Text */}
        <div
          className="w-full md:w-[35%] bg-[#06457A] text-white flex items-center justify-center px-6 py-8 md:py-0"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">About</h1>
            <p className="text-base md:text-lg mt-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Full Image (On top in mobile view) */}
        <div
          className="w-full md:w-[65%] h-[200px] md:h-auto overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img src={img} alt="Banner" className="w-full  h-auto object-contain" />
        </div>
      </div>
      <SupportPower />
      <TrustMember />
      <CharitySection />
      <OurFeature />
      <OurGallery />
    </div>
  );
};

export default About;
