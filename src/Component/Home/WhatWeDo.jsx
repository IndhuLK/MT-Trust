import React, { useEffect, useState } from "react";
import Decore from "../../assets/HomeIMG/Decore.png";
import Small from "../../assets/HomeIMG/Small.png";
import img from "../../assets/HomeIMG/img-28.jpg";
import Decore2 from "../../assets/HomeIMG/Decore2.png";
import DonationPopup from "../../NavFot/DonationPopup";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatWeDo = () => {

  const [showPopup, setShowPopup] = useState(false); 
  useEffect(() => {
        AOS.init({
          duration: 1000,           
          easing: 'ease-in-out',    
          once: true,               
        });
      }, []);

  return (
    <section className="relative bg-white py-20 px-6 md:px-20 overflow-hidden font-family">
      {/* Top-left and bottom-right decor */}
      <img
        src={Decore}
        alt="decor"
        className="absolute top-5 left-0 w-10 z-0"
      />
      <img
        src={Small}
        alt="decor"
        className="absolute top-40 left-4 w-auto -rotate-60 z-0 mt-50"
      />
      {/* Bottom-right decor */}
      <img
        src={Decore2}
        alt="Decor"
        className="absolute bottom-6 right-6 w-10 z-0"
      />

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center "
          data-aos="fade-up">
            
            <span className="text-yellow-500 font-semibold text-xl">
              - What we do
            </span>
            <img src={Small} alt="icon" className="w-6 h-6 ml-50 rotate-60" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900"
          data-aos="fade-up">
            Your Kindness <br /> their
            <span className="underline decoration-yellow-400 underline-offset-10 transition-all">
              {" "}
              Tomorrow
            </span>
            !
          </h2>
          <p className="text-gray-700 leading-relaxed"
          data-aos="fade-right"
     data-aos-anchor-placement="top-center">
            The MTSSDS seeks to provide comprehensive and holistic development
            to rural and urban population according to sustainable development
            goals (SDG) with special focus to health care and environmental
            protection, advancement in sustainable organic agriculture through
            empowering women and farming community...
          </p>
          <button onClick={() => setShowPopup(true)}
          className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 text-sm font-semibold rounded text-blue-900">
            Donate Now
          </button>
        </div>

        {/* Right Image with Custom 3-Slice Style */}
        <div className=" w-auto h-auto mx-auto">
          {/* Slice 1 */}
          <div className="rounded-full "
          data-aos="fade-left"
     data-aos-anchor-placement="top-center">
            <img
              src={img}
              alt="Slice 1"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Slice 2 (center slice) 
          <div className="absolute w-24 h-60 rounded-full overflow-hidden rotate-[45deg] left-8 top-0 z-10">
            <img
              src={GirlImage}
              alt="Slice 2"
              className="object-cover w-[300px] h-[300px] -translate-x-16"
            />
          </div>*/}

          {/* Slice 3 
          <div className="absolute w-24 h-60 rounded-full overflow-hidden rotate-[45deg] left-16 top-5">
            <img
              src={GirlImage}
              alt="Slice 3"
              className="object-cover w-[300px] h-[300px] -translate-x-8"
            />
          </div>*/}
        </div>
      </div>
      {/* Conditional rendering of DonationPopup */}
      {showPopup && <DonationPopup onClose={() => setShowPopup(false)}/>}
    </section>
  );
};

export default WhatWeDo;
