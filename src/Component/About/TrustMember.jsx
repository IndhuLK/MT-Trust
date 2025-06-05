import React from "react";
import SubbuImage from "../../assets/HomeIMG/Subburaj.jpg";
import bala from "../../assets/HomeIMG/Bala.jpg";
import Kind from "../../assets/HomeIMG/Kindness.jpg";

const TrustMember = () => {
  return (
    <div className="flex bg-blue-50 px-15 py-10 gap-6">
      {/* Left Side - Text Blocks */}
      <div className="flex flex-col gap-6 flex-1">
        {/* First Block */}
        <div className="flex items-start gap-16">
          <div className="w-40">
            <img
              src={SubbuImage}
              alt="Mr. K. Subburaj"
              className="rounded-lg w-full object-cover h-[40vh]"
            />
          </div>
          <div className="flex-1 h-[40vh] flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#06457A] mb-2 mt-4">
                Mr. K. Subburaj
              </h1>
              <h2 className="text-lg font-semibold mb-2 mt-4">President</h2>
              <p className="text-gray-700 mb-2 mt-4">
                MOTHER THERASA SOCIAL <br /> SERVICE AND <br />
                DEVELOPMENT SERVICES
              </p>
            </div>
            <div className="space-y-1 text-gray-600">
              {/*<div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <span>www.motherterasa.com</span>
              </div>*/}
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.48.69.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.15.24 2.36.69 3.48.15.37.06.8-.21 1.11l-2.36 2.2z" />
                </svg>
                <span>+91 0123456789</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Subburaj@gmail.com</span>
              </div>*/}
            </div>
          </div>
        </div>

        {/* Second Block */}
        <div className="flex items-start gap-16">
          <div className="w-40">
            <img
              src={bala}
              alt="Mr. K. Subburaj"
              className="rounded-lg w-full object-cover h-[40vh]"
            />
          </div>
          <div className="flex-1 h-[30vh] flex flex-col justify-between mt-0">
            <div>
              <h1 className="text-2xl font-bold text-[#06457A] mb-2 mt-4">
                Mr.K.BALAKRISHNAN
              </h1>
              <h2 className="text-lg font-semibold mb-2 mt-4">
                Program officer
              </h2>
              <p className="text-gray-700 mb-2 mt-4">
                MOTHER THERASA SOCIAL <br /> SERVICE AND <br />
                DEVELOPMENT SERVICES
              </p>
            </div>
            {/*<div className="grid grid-cols-2 gap-x-0 gap-y-10 text-gray-700">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <span>www.trinityplus.org</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>trinityplussocial@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.48.69.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.15.24 2.36.69 3.48.15.37.06.8-.21 1.11l-2.36 2.2z" />
                </svg>
                <span>+91 8248933317</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <span>Tiruchirappalli, Tamil Nadu</span>
              </div>
            </div>*/}
          </div>
        </div>
      </div>

      {/* Right Side - Tall Image */}
      <div className="w-[40%]">
        <img
          src={Kind}
          alt="Bala"
          className="rounded-lg w-full object-cover h-[80vh]"
        />
      </div>
    </div>
  );
};

export default TrustMember;
