import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonationPopup from "../../NavFot/DonationPopup";

const Education = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 font-family">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Sponsor a Child’s Education
      </h1>

      <p className="text-center text-blue-700 font-semibold mb-10">
        Category: Education
      </p>

      {/* Container 1 */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
          Help Children Build a Brighter Future
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          Education is the most powerful tool for breaking the cycle of poverty,
          yet millions of children across India are deprived of basic learning
          due to financial constraints. Many children from rural villages and
          slum areas are either forced to drop out or never attend school
          because their families cannot afford uniforms, books, school supplies,
          or fees. These children end up working as laborers, missing out on
          opportunities for growth, knowledge, and a better future.
          <br />
          <br />
          When you sponsor a child’s education, you provide them with a gateway
          to transform their life. Your contribution ensures that the child
          receives not only access to education but also emotional support,
          confidence, and motivation to chase their dreams. With regular
          schooling, mentorship, and basic nutrition, these students can develop
          the skills they need to create a promising future for themselves and
          their families.
          <br />
          <br />
          Our education sponsorship program carefully identifies children who
          are most in need. We collaborate with local schools, communities, and
          volunteers to monitor their progress and ensure that the support
          reaches the right hands. Each child receives guidance from experienced
          educators, and their journey is documented to help them stay on the
          path of learning.
        </p>
      </div>

      {/* Support Section – Revamped Design */}
      <div className="bg-yellow-100 rounded-xl shadow-inner p-8 md:p-10 mb-12">
        <div className="md:flex items-center gap-8">
          {/* Text Content */}
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4">
              Your Support Is Really Powerful.
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
              <br />
              <br />
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-600 transition"
            >
              Donate Now
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/3">
            <img
              src="/src/assets/HomeImg/img-36.jpeg"
              alt="Support Children"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Donation Popup */}
      {showPopup && <DonationPopup onClose={() => setShowPopup(false)} />}

      {/* Container 2 */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
          Your Support Makes All the Difference
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          Sponsoring a child's education does not require large sums of money.
          Even a modest monthly or yearly donation can cover school fees,
          transport, educational materials, and lunch programs. These small
          efforts have a massive impact on the child's life trajectory. With
          education, they gain the power to dream, to believe, and to become
          contributing members of society.
          <br />
          <br />
          Many of the children we support have gone on to become teachers,
          nurses, IT professionals, and small entrepreneurs in their localities.
          Their success stories stand as living proof of what compassion and
          collective responsibility can achieve. You are not just funding a
          student — you are nurturing an entire generation to rise with dignity
          and purpose.
          <br />
          <br />
          By partnering with us in this mission, you join a larger movement of
          transformation. Together, we are building a future where every child,
          no matter their background, has a seat in the classroom and a chance
          to learn. Education is not a privilege; it is a right, and with your
          help, we ensure that no child is left behind.
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

export default Education;
