import React, { useEffect } from "react";
import HeroImg from "../../assets/HomeIMG/HeroIMG.jpg";
import HImg from "../../assets/HomeIMG/img-51.jpg";
import HImg2 from "../../assets/HomeIMG/img-49.jpg";
import HImg3 from "../../assets/HomeIMG/img-55.jpg";
import Logo from "../../assets/Logo.png";
import StatsSection from "./StatsSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

// 🔸 Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-4 bottom-8 md:bottom-1/2 z-10 p-2 bg-white rounded-full shadow cursor-pointer"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowLeft className="text-2xl text-[#03457B]" />
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-4 bottom-8 md:bottom-1/2 z-10 p-2 bg-white rounded-full shadow cursor-pointer"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowRight className="text-2xl text-[#03457B]" />
    </div>
  );
};

const slides = [
  {
    image: HImg,
    title1: "MOTHER THERASA SOCIAL SERVICE AND DEVELOPMENT SOCIETY",
    desc: "Serving with Love and Compassion",
    para: "INTENSE LOVE DOES NOT MEASURE, IT JUST GIVES.",
    button: "Know More",
  },
  {
    image: HImg2,
    title1: "Empowering the Downtrodden",
    title2: "With Kindness and Care",
    desc: "Transforming lives through education and healthcare.",
    para: "We Rise by Lifting Others with Heart and Hope.",
    button: "Our Services",
  },
  {
    image: HImg3,
    title1: "Join Our Mission",
    title2: "To Make a Better Tomorrow",
    desc: "Together we can build stronger communities.",
    para: "One Mission. Endless Possibilities. A Brighter Tomorrow.",
    button: "Join Us",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,           
      easing: 'ease-in-out',    
      once: true,               
    });
  }, []);

  return (
    <div className="relative text-[#03457B] overflow-hidden "
    data-aos="fade-up"
        data-aos-duration="1000"
  data-aos-easing="ease-in-out">
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-4 left-4 z-30 w-24 h-24"
      />

      {/* Slider */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <section
            key={index}
            className="relative w-screen h-screen overflow-hidden text-white"
          >
            {/* Image as background */}
            <img
              src={slide.image}
              alt="Hero Slide"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 sm:px-10 md:px-20 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span>{slide.title1}</span>
                <br />
                <span>{slide.title2}</span>
              </h2>
              <p className="text-xl font-semibold mt-4">{slide.desc}</p>
              <p className="text-md text-gray-200 mt-2 uppercase">
                {slide.para}
              </p>
              <button className="mt-6 bg-[#03457B] hover:bg-blue-900 px-6 py-2 rounded-md text-white font-medium">
                {slide.button}
              </button>
            </div>
          </section>
        ))}
      </Slider>

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
};

export default Hero;
