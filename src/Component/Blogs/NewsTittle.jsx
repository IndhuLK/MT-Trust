import React from 'react'
import DonatePP from './DonatePP'
import ArticleSection from './ArticleSection'
import AchievementsImage from "../../assets/HomeIMG/Achievements.jpg";
import { Link } from 'react-router-dom';


const NewsTittle = () => {
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
        <h1 className="text-4xl font-bold">News Tittle</h1>
        <p className="text-lg mt-2">
           <Link to="/" className="hover:underline">Home</Link> / 
           <Link to="/newstittle" className="hover:underline"> News Tittle </Link></p>
      </div>
    </div>
        <DonatePP />
        <ArticleSection />
    </div>
  )
}

export default NewsTittle