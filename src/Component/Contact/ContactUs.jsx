import React from "react";
import AchievementsImage from "../../assets/HomeIMG/Achievements.jpg";
import GetInTouch from "./GetInTouch";

const ContactUs = () => {
  return (
    <div>
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image Full Width */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${AchievementsImage})` }}
      />

      {/* Centered Diagonal Blue Shape */}
      <div className="absolute inset-0 flex z-10">
        <div className="bg-[#003B73] md:rounded-br-[50px] text-white px-8 py-12 md:pl-6 md:pr-10 relative clip-slant w-[50%] max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-sm md:text-base opacity-90">Home / Contact</p>
        </div>
      </div>
    </section>
    <GetInTouch />
    </div>
  );
};

export default ContactUs;
