import React, { useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import avatar from "../../assets/Logo.png"; // Your image, not used currently but kept
import AOS from 'aos';
import 'aos/dist/aos.css';



const GetInTouch = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,           
    easing: 'ease-in-out',    
    once: true,               
  });
}, []);
  return (
    <div className="w-full mt-10 px-4">
      <section className="min-h-screen  relative flex items-center justify-center p-6 font-family">
        {/* Centered blue glow shadow behind content */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-96 h-96 rounded-full filter blur-3xl opacity-40 bg-gradient-to-r from-blue-500 via-cyan-800 to-green-400"></div>
        </div>

        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10">
          {/* Left Info Panel */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 text-slate-700 animate-slide-left border border-white/30 shadow-lg"
          data-aos="fade-right">
            <h2 className="text-4xl font-extrabold mb-6">Let's Get In Touch</h2>
            <p className="mb-6 text-sm ">
              We'd love to hear from you! Reach out using any of the following:
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-4 shadow-xl px-4 py-4 rounded-lg bg-white/40 hover:scale-105">
                <Mail className="text-yellow-500 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm">info@mtssds.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4 shadow-xl px-4 py-4 rounded-lg bg-white/40 hover:scale-105">
                <Phone className="text-yellow-500 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm">+91 99445 67984</p>
                </div>
              </div>
              <div className="flex items-start gap-4 shadow-xl px-4 py-4 rounded-lg bg-white/40 hover:scale-105">
                <MapPin className="text-yellow-500 mt-1" />
                <div>
                  <a
                    href="https://www.google.com/maps/place/Mother+Therasa+Social+Service+and+Development+Society+(MTSSDS)/@10.6072763,78.4279113,94m/data=!3m1!1e3!4m6!3m5!1s0x3baa6f6acb4d0d55:0x44ea74f1ce0c3a33!8m2!3d10.607244!4d78.4279582!16s%2Fg%2F11x72jfxnm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    <p className="font-semibold">Location</p>
                    Tiruchirappalli, Tamilnadu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl shadow-lg p-8 animate-slide-right border border-white/30"
          data-aos="fade-left">
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
                <label className="block text-slate-700 font-medium">
                  Email
                </label>
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
      <iframe
        title="MTSSDS Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15725.967207913338!2d78.4279113!3d10.6072763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa6f6acb4d0d55%3A0x44ea74f1ce0c3a33!2sMother%20Therasa%20Social%20Service%20and%20Development%20Society%20(MTSSDS)!5e0!3m2!1sen!2sin!4v1718634362226!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl shadow-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
  data-aos-easing="ease-in-out"
      ></iframe>
    </div>
  );
};

export default GetInTouch;
