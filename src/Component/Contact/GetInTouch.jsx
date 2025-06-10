import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import avatar from "../../assets/Logo.png"; // Your image, not used currently but kept

const GetInTouch = () => {
  return (
    <section className="min-h-screen  relative flex items-center justify-center p-6">
      {/* Centered blue glow shadow behind content */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-96 h-96 rounded-full filter blur-3xl opacity-40 bg-gradient-to-r from-blue-500 via-cyan-800 to-green-400"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Info Panel */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 text-slate-700 animate-slide-left border border-white/30 shadow-lg">
          <h2 className="text-4xl font-extrabold mb-6">Let's Get In Touch</h2>
          <p className="mb-6 text-sm ">
            We'd love to hear from you! Reach out using any of the following:
          </p>

          <div className="space-y-10">
            <div className="flex items-start gap-4 shadow-xl px-4 py-4 rounded-lg bg-white/40">
              <Mail className="text-yellow-300 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-">mothertherasa@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 shadow-xl px-4 py-4 rounded-lg bg-white/40">
              <Phone className="text-yellow-300 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4 shadow-xl px-4 py-4 rounded-lg bg-white/40">
              <MapPin className="text-yellow-300 mt-1" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm">Tiruchirappalli, Tamilnadu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl shadow-lg p-8 animate-slide-right border border-white/30">
          <form className="space-y-6">
            <div>
              <label className="block text-slate-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 p-3 border border-white/40 rounded-xl bg-white/40 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-1 p-3 border border-white/40 rounded-xl bg-white/40 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full mt-1 p-3 border border-white/40 rounded-xl bg-white/20 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-slate-100 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
