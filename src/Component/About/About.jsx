import React from 'react'
import SupportPower from './SupportPower'
import CharitySection from './CharitySection'
import OurFeature from './OurFeature'
import OurGallery from './OurGallery'
import AchievementsImage from "../../assets/HomeIMG/Achievements.jpg";
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div>
      <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <img
        src={AchievementsImage}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Left Blue Overlay */}
      <div className="absolute top-0 left-0 w-[35%] h-full bg-[#06457A] clip-left z-10"></div>

      {/* Right Blue Overlay */}
      <div className=""></div>

      {/* Center Text */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">
           <Link to="/" className="hover:underline">Home</Link> / 
           <Link to="/about" className="hover:underline"> About</Link></p>
      </div>
    </div>
      <SupportPower />
      <CharitySection />
      <OurFeature />
      <OurGallery />
    </div>
  )
}

export default About