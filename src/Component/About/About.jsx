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
      <div className="relative w-full h-[400px] font-family">
      {/* Background Image */}
      <img
        src={img}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Left Blue Overlay */}
      <div className="absolute top-0 left-0 w-[35%] h-full bg-[#06457A] z-10"></div>

      {/* Text aligned to the left inside the overlay */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 z-20 text-white text-left max-w-md">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">
          <Link to="/" className="hover:underline">Home</Link> /{" "}
          <Link to="/about" className="hover:underline">About</Link>
        </p>
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