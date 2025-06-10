import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonationPopup from "../../NavFot/DonationPopup";

const Child = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 font-family">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Uplift a Child’s Life
      </h1>

      <p className="text-center text-blue-700 font-semibold mb-10">
        Category: Child Welfare
      </p>

      {/* Container 1 */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
          Nurture, Protect, and Empower Children
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          Every child deserves a safe, healthy, and happy childhood.
          Unfortunately, countless children across India face neglect, abuse,
          malnutrition, and a lack of emotional care. These conditions not only
          rob them of their childhood but also hinder their physical, mental,
          and emotional development.
          <br />
          <br />
          Our Child Welfare Program focuses on protecting and nurturing
          underprivileged children. We provide basic necessities like food,
          shelter, medical care, counseling, and emotional support. These
          services ensure they grow in a safe environment that fosters learning,
          healing, and happiness.
          <br />
          <br />
          Through community centers, safe homes, and outreach activities, we
          reach abandoned, orphaned, and at-risk children. With the help of
          volunteers and experts, we create child-friendly spaces where they can
          recover, learn, and dream again. Our goal is not just to rescue
          children—but to rehabilitate and reintegrate them into a life of
          dignity and hope.
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
              src="/src/assets/HomeImg/img-30.jpg" // Replace with a child welfare-related image
              alt="Child Welfare Support"
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
          Your Support Can Transform a Life
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          Supporting child welfare is not about charity—it’s about justice. A
          small act of kindness from you can offer a child meals, medicine,
          education, and mental well-being. We ensure every contribution
          directly benefits the children through structured programs and ongoing
          monitoring.
          <br />
          <br />
          Children from our welfare programs have shown tremendous growth—from
          overcoming trauma to becoming confident students, athletes, and young
          leaders. They are living proof that love, care, and opportunity can
          reverse even the darkest childhoods.
          <br />
          <br />
          When you donate, you become part of their journey—part of the healing,
          the rebuilding, and the celebration of every milestone they achieve.
          Help us raise a generation that knows they matter and that the world
          believes in them.
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

export default Child;
