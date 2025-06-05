import React from 'react'
import SupportPower from './SupportPower'
import CharitySection from './CharitySection'
import OurFeature from './OurFeature'
import OurGallery from './OurGallery'
import img from "../../assets/HomeIMG/img-18.jpg";
import { Link } from 'react-router-dom';
import TrustMember from './TrustMember'


const About = () => {
  
  return (
    <div>
      <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <img
        src={img}
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
           <Link to="/" className="hover:underline text-black font-bold hover:bg-white px-2 py-1">Home</Link> / 
           <Link to="/about" className="hover:underline"> About</Link></p>
      </div>
    </div>
      <SupportPower />
      <TrustMember />
      <CharitySection />
      <OurFeature />
      <OurGallery />
    </div>
  )
}

export default About