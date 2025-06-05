import React from 'react';

const GetInTouch = () => {
  return (
    <>
      <section className="px-6 py-10 md:px-20 bg-white">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-medium text-gray-500">Get In Touch</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-1">
            Send Me A Message
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Contact info box */}
          <div className="bg-blue-200 p-6 rounded-md">
            <h3 className="text-2xl font-bold text-black">President</h3>
            <h4 className="text-lg font-bold text-blue-700 mt-1">
              K. SUBBURAJ
            </h4>
            <p className="text-sm text-gray-700 mb-4 font-bold">
              B.Sc (Agriculture) PG DIP.RD
            </p>

            <p className="text-gray-800">
              <span className="font-semibold text-md">Location</span> : 10/90 North
              Lakshmipuram, Viralimalai Road, Manapparai, Trichy (Dt),
              Tamilnadu, India – 621306
            </p>

            <p className="text-sm text-gray-800 mt-2">
              <span className="font-semibold text-md">Phone</span> : +91 98745 61230
            </p>
            <p className="text-sm text-gray-800">
              <span className="font-semibold text-md">Email</span> : info@mtssds.org
            </p>
          </div>

          {/* Contact form */}
          <form className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your First Name"
                className="bg-blue-100 p-3 rounded outline-none"
              />
              <input
                type="text"
                placeholder="Name"
                className="bg-blue-100 p-3 rounded outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-blue-100 p-3 rounded outline-none "
              />
              <input
                type="tel"
                placeholder="+880"
                className="bg-blue-100 p-3 rounded outline-none"
              />
            </div>
            <textarea
              placeholder="Type Your Message Here..."
              rows="5"
              className="bg-blue-100 p-3 rounded w-full outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-800 px-6 py-2 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Google Map Section */}
      <section className="mt-10 px-6 md:px-20">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.281465511425!2d78.433056!3d10.584167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baae7f888ec741b%3A0xdeadbeef12345678!2sManapparai%2C%20Tamil%20Nadu%20621306%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md shadow-md"
        ></iframe>
      </section>
    </>
  );
};

export default GetInTouch;
