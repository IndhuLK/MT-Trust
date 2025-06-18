import React, { useEffect, useState } from "react";
import Decore from "../../assets/HomeIMG/Decore.png";
import Image4 from "../../assets/HomeIMG/Image4.jpg";
import Image2 from "../../assets/HomeIMG/Image2.jpg";
import Image3 from "../../assets/HomeIMG/Image3.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const slides = [
  {
    image: Image4, 
    title: "Raise Fund for specific campaigns",
    description:
      "The MTSSDS seeks to provide comprehensive and holistic development to rural and urban population according to sustainable development goals (SDG) with special focus to health care and environmental protection, advancement in sustainable organic agriculture through empowering women and farming community. The ways and means to attain the vision are campaigns, trainings and education, action researches in the relevant sectors and subsectors across all states of India. The resultant will be the communal peace and the equitable society.",
      
  },
  {
    image: Image2,
    title: "Empowering Women through Skill Development",
    description:
      "MTSSDS believes that empowering women is essential for building stronger families and communities. Through various skill development programs, vocational training, and entrepreneurship workshops, the organization equips women—especially in rural areas—with the knowledge and tools they need to become self-reliant. These initiatives not only create employment opportunities but also boost self-confidence and contribute to gender equality across India.",
  },
  {
    image: Image3,
    title: "Promoting Eco-Friendly and Sustainable Living",
    description:
      "With an urgent need to address climate change and environmental degradation, MTSSDS promotes eco-friendly practices through community-based initiatives. The organization conducts awareness campaigns, tree planting drives, waste management training, and organic farming sessions. These programs help communities transition to a more sustainable lifestyle, ensuring a greener and healthier future for the coming generations.",
  },
];

const ExclusiveEvents = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  
  useEffect(() => {
      AOS.init({
        duration: 1000,           
        easing: 'ease-in-out',    
        once: true,               
      });
    }, []);

  return (
    <section className="font-Poppins relative bg-[#004987] text-white px-6 py-10 overflow-hidden">
      {/* Top-left decor */}
      <img
        src={Decore}
        alt="Decor"
        className="absolute top-6 left-6 w-8 h-8 md:w-10 md:h-10"
      />
      {/* Bottom-right decor */}
      <img
        src={Decore}
        alt="Decor"
        className="absolute bottom-6 right-6 w-8 h-8 md:w-10 md:h-10"
      />

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold px-20 mb-6"
      data-aos="fade-down-right">
        Our <span className="text-yellow-300">Exclusive Events</span>
        <br />
        we are always Provide!
      </h2>

      {/* Arrows above image */}
      <div className="flex justify-end items-center max-w-6xl mx-auto mb-4 gap-2">
        <button
          onClick={prevSlide}
          className="bg-white text-[#004987] p-2 rounded-full hover:bg-yellow-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-[#004987] p-2 rounded-full hover:bg-yellow-300"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Main Image */}
      <div className="max-w-6xl mx-auto mb-6"
      data-aos="fade-up-right">
        <img
          src={slides[current].image}
          alt="Event"
          className="object-cover rounded-md shadow-xl mx-auto w-full h-[450px]"
      
        />
      </div>

      {/* Bottom Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="max-w-2xl"
        data-aos="zoom-in-up">
          <h3 className="text-xl font-semibold mb-2">
            {slides[current].title}
          </h3>
          <p className="text-sm text-gray-200 mb-2">
            {slides[current].description}
          </p>
          <button className="text-yellow-400 hover:underline cursor-pointer hover:text-yellow-300">
            Read more
          </button>
        </div>
        {/* Page Number */}
        <div className="text-4xl font-bold text-white/80">
          {String(current + 1).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveEvents;
