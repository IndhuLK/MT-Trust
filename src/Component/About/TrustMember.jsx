import React from "react";
import SubbuImage from "../../assets/HomeIMG/Subburaj.jpg";
import bala from "../../assets/HomeIMG/Bala.jpg";
import Kind from "../../assets/HomeIMG/img-57.jpg";

const TrustMember = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-blue-50 px-4 md:px-10 py-8 md:py-12 gap-6 font-family">
      {/* Left Side - Text Blocks */}
      <div className="flex flex-col gap-6 flex-1">
        {/* First Block */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-16">
          <div className="w-full md:w-40">
            <img
              src={SubbuImage}
              alt="Mr. K. Subburaj"
              className="rounded-lg w-full object-cover h-64 md:h-[40vh]"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between h-auto md:h-[40vh]">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#06457A] mb-2 mt-4">
                Mr. K. Subburaj
              </h1>
              <h2 className="text-md md:text-lg font-semibold text-gray-600 mb-2 mt-2">
                B.Sc (Agriculture) PG DIP.RD
              </h2>
              <h2 className="text-md md:text-lg font-semibold text-gray-600 mb-2 mt-2">
                President
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.48.69.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.15.24 2.36.69 3.48.15.37.06.8-.21 1.11l-2.36 2.2z" />
                </svg>
                <span className="font-semibold text-gray-600">+91 99445 67984</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Block */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-16">
          <div className="w-full md:w-40">
            <img
              src={bala}
              alt="Mr. K. Balakrishnan"
              className="rounded-lg w-full object-cover h-64 md:h-[30vh]"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between h-auto md:h-[30vh]">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#06457A] mb-2 mt-4">
                Mr.K.BALAKRISHNAN
              </h1>
              <h2 className="text-md md:text-lg font-semibold mb-2 mt-2 text-gray-600">
                Program officer
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Tall Image */}
      <div className="w-full lg:w-[40%] mt-6 lg:mt-0">
        <img
          src={Kind}
          alt="Kindness"
          className=" w-full object-contain h-64 md:h-[80vh] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default TrustMember;
