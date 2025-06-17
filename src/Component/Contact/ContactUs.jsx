import React, { useEffect } from "react";
import AchievementsImage from "../../assets/HomeIMG/Achievements.jpg";
import GetInTouch from "./GetInTouch";
import { Link } from "react-router-dom";
import img from "../../assets/HomeIMG/img-22.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => { 
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <div className="relative w-full h-auto md:h-[400px] font-family flex flex-col md:flex-row">
        {/* Left Side - Blue Background with Text */}
        <div className="w-full md:w-[35%] bg-[#06457A] text-white flex items-center justify-center px-6 py-8 md:py-0"
        data-aos="fade-up"
     data-aos-duration="3000">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
            <p className="text-base md:text-lg mt-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Full Image (On top in mobile view) */}
        <div className="w-full md:w-[65%] h-[200px] md:h-full"
        data-aos="fade-up"
     data-aos-duration="3000">
          <img src={img} alt="Banner" className="w-full h-full object-cover" />
        </div>
      </div>
      <GetInTouch />
    </div>
  );
};

export default ContactUs;
