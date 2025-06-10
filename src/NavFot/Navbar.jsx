import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import DonationPopup from "./DonationPopup";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showDonationPopup, setShowDonationPopup] = useState(false);

  const menuOptions = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "News", path: "/newstittle" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="relative w-full flex items-center justify-between px-20 py-2 bg-[#06457A] z-10 font-family">
        <div className=" text-yellow-400 font-bold text-3xl">MTSSDS</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {menuOptions.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative text-white hover:text-yellow-400 font-semibold group"
            >
              {item.name}
              <span className="absolute left-0 top-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => setShowDonationPopup(true)}
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md shadow-md hover:scale-105 transition"
          >
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center ml-auto">
          {openMenu ? (
            <HiX
              size={30}
              className="text-white cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <HiOutlineBars3
              size={30}
              className="text-white cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {openMenu && (
        <div className="md:hidden fixed inset-0 bg-[#06457A] z-50 flex flex-col justify-center items-center px-4">
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <HiX />
          </button>

          <div className="absolute top-4 text-yellow-400 font-bold text-3xl">
            MTSSDS
          </div>

          <div className="flex flex-col space-y-9 text-white text-lg text-center">
            {menuOptions.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="hover:text-yellow-400"
                onClick={() => setOpenMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => {
              setOpenMenu(false);
              setShowDonationPopup(true);
            }}
            className="absolute bottom-10 bg-yellow-400 text-black px-6 py-2 rounded-md w-[30%] font-semibold"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* Donation Popup */}
      {showDonationPopup && (
        <DonationPopup onClose={() => setShowDonationPopup(false)} />
      )}
    </>
  );
};

export default Navbar;
