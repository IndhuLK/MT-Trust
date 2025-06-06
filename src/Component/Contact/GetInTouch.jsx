import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import avatar from "../../assets/Logo.png"; // Add your image here

const GetInTouch = () => {
  return (
    <section className="px-6 py-5 md:px-20 bg-white font-sans ">
      {/* Heading */}
      <div className="text-center mb-10 text-black">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        {/*<p className="mt-2">
          Thank you for your interest in our services. Please fill out <br />
          the form below or e-mail us at <a href="mailto:hello@demoemail.com" className="underline">hello@demoemail.com</a>
        </p>*/}
      </div>

      <div className="bg-white rounded-lg shadow-2xl drop-shadow-xl shadow-blue-600/40 p-6 grid md:grid-cols-2 gap-10 items-center mb-10">
        {/* Contact info with avatar */}
        <div className="text-gray-700 space-y-6">
          <div className="flex justify-center">
            <img
              src={avatar}
              alt="hi"
              className="w-34 h-34 rounded-full shadow"
            />
          </div>

          <div className="space-y-4 text-center md:text-left text-gray-700">
            <h3 className="text-2xl font-bold text-black">President</h3>
            <h4 className="text-xl font-bold text-blue-700">K. SUBBURAJ</h4>
            <p className="font-semibold text-sm">
              B.Sc (Agriculture) PG DIP.RD
            </p>

            <div className="flex items-start justify-center md:justify-start gap-3 mt-4">
              <MapPin className="text-green-500 mt-1" size={30} />
              <span>
                <span className="font-semibold">Location</span> : 10/190 North
                Lakshmipuram, Viralimalai Road, Manapparai, Trichy (Dt),
                Tamilnadu (State), India - 621306
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="text-green-500" size={18} />
              <span>
                <span className="font-semibold">Phone</span> : +91 98745 61230
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="text-green-500" size={18} />
              <span>
                <span className="font-semibold">Email</span> : info@mtssds.org
              </span>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form className="space-y-4">
          <h1 className="text-2xl font-bold">Send Me a Meassage</h1>
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full p-3 border border-gray-300 rounded outline-none"
          />
          <input
            type="tel"
            placeholder="Phone*"
            className="w-full p-3 border border-gray-300 rounded outline-none"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 border border-gray-300 rounded outline-none"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#06457A] hover:bg-black hover:text-amber-300 text-white py-2 rounded font-semibold"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
