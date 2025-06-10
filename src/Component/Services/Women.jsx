import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonationPopup from "../../NavFot/DonationPopup"; // Make sure the path is correct

const Women = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 font-family">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Skill Training for Women
      </h1>

      <p className="text-center text-blue-700 font-semibold mb-10">
        Category: Women Empowerment
      </p>

      {/* Container 1 */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
          Empowering Women through Skills
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          Women Empowerment is a vital initiative aimed at providing women with
          the skills, resources, and opportunities they need to achieve
          financial independence and self-confidence. Through specialized
          training programs in tailoring, arts, crafts, food processing, and
          entrepreneurship, women are given a chance to break societal barriers
          and support their families with dignity.
          <br />
          <br />
          These programs also offer soft skill development, digital literacy,
          and awareness on health and hygiene. With proper mentorship and
          training, women begin to believe in themselves, explore untapped
          potentials, and unlock new ways to build careers or run home-based
          businesses. This initiative uplifts not just individuals but entire
          households.
          <br />
          <br />
          Skill training centers are set up in rural and urban slum areas,
          making it accessible for all. With flexible timings, women can learn
          at their convenience without disturbing their daily responsibilities.
          Many participants have gone on to start small boutiques, handmade
          product lines, and catering services, becoming symbols of change in
          their communities.
        </p>
      </div>

      {/* Image 
      <img
        src="/src/assets/HomeImg/img-22.jpg"
        alt="Women Empowerment"
        className="w-full h-96 object-cover rounded-xl mb-10"
      />*/}

      {/* Support Section – Revamped Design */}
      <div className="flex flex-col md:flex-row items-center bg-yellow-100 rounded-xl p-6 md:p-10 mb-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/src/assets/HomeImg/img-14.jpg" // Replace with your own
            alt="Support Women"
            className="rounded-xl shadow-md w-full h-80 object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Your Support Is Really Powerful.
          </h2>
          <p className="text-gray-700 mb-4">
            The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make in the lives of the poor, the abused and
            the helpless.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-yellow-500 transition cursor-pointer"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Conditional Popup */}
      {showPopup && <DonationPopup onClose={() => setShowPopup(false)} />}

      {/* Container 2 */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
          Building Confidence and Community
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          These programs focus on building women’s capacities by fostering
          education, awareness, and leadership skills. Participants gain
          confidence, communication skills, and exposure to opportunities they
          never imagined possible. Each woman trained becomes a beacon of hope
          and encouragement to other women around her.
          <br />
          <br />
          The impact goes far beyond economic independence. Empowered women
          often become mentors, educators, and volunteers in their own
          neighborhoods. They lead savings groups, community awareness drives,
          and parenting workshops. Some even step into local governance roles,
          raising their voices on important social issues.
          <br />
          <br />
          By investing in women, we invest in the whole family, and eventually
          the whole society. This transformation leads to better child
          education, improved family health, and a safer and more inclusive
          world for future generations. Supporting women's empowerment is not
          just an act of kindness—it's a strategic choice for sustainable
          development.
        </p>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <button
          onClick={() => navigate("/services")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          &larr; Back to Services
        </button>
      </div>
    </div>
  );
};

export default Women;
