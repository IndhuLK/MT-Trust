import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white  border-t border-gray-200 font-family">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3">
        {/* Logo + Text */}
        <div className="flex items-start gap-2 text-blue-900">
          <img src={Logo} alt="Logo" className="w-40 h-40 " />
          <p className="font-semibold leading-snug text-lg mt-8">
            MOTHER THERASA <br />
            SOCIAL SERVICE AND <br />
            DEVELOPMENT SERVICES
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Links</h4>
          <ul className="space-y-2 text-md text-blue-900">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services"> Services</a>
            </li>
            <li>
              <a href="/newstittle">News</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact us</h4>
          <p className="text-md mb-2 text-blue-900 leading-relaxed">
            We’d Love to Hear from You! Whether you have a question, want to
            volunteer, or wish to support our cause, feel free to reach out.
            Your message matters to us, and we’re here to help in any way we
            can.
          </p>
          <p className="text-md font-semibold text-blue-900 mt-10">
            +91 99445 67984
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-end items-center gap-4 px-6 pb-6">
        <a
          href="#"
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 shadow-md hover:shadow-lg transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 shadow-md hover:shadow-lg transition"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 shadow-md hover:shadow-lg transition"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 shadow-md hover:shadow-lg transition"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} Copyright by MTSSDS. Developed by Tekno Spot.
      </div>
    </footer>
  );
};

export default Footer;
