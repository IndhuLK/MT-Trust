import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DonationPopup from '../../NavFot/DonationPopup';

const Environmental = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 font-family">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-900 mb-6">
        Plant Trees Initiative
      </h1>

      <p className="text-center text-green-700 font-semibold mb-10">
        Category: Environmental
      </p>

      {/* Container 1 */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">
          Join Hands in Greening Our Planet
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          The Plant Trees Initiative is a mission to combat climate change and environmental degradation by encouraging mass tree plantation. With rising levels of pollution and deforestation, it has become essential to protect and restore our green cover. Trees not only absorb harmful carbon dioxide but also cool the atmosphere, support wildlife, and promote biodiversity.
          <br /><br />
          By planting more trees in urban and rural areas, we can create greener spaces, improve air quality, and provide shelter for countless species. This initiative involves local communities, schools, and volunteers in planting and maintaining trees to ensure long-term impact. It also educates the public about the critical role trees play in sustaining life on Earth.
          <br /><br />
          Our vision is to inspire individuals, organizations, and governments to prioritize afforestation and reforestation. Every tree planted is a step towards a healthier future and a cleaner planet for the next generation.
        </p>
      </div>

      {/* Support Section – Revamped Design */}
      <div className="bg-green-100 rounded-xl shadow-inner p-8 md:p-10 mb-12">
        <div className="md:flex items-center gap-8">
          {/* Text Content */}
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Your Support Can Breathe Life into the Earth
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded hover:bg-green-600 transition"
            >
              Donate Now
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/3">
            <img
              src="/src/assets/HomeImg/img-24.jpg"
              alt="Plant Trees"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Donation Popup */}
      {showPopup && <DonationPopup onClose={() => setShowPopup(false)} />}

      {/* Container 2 */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">
          Long-Term Impact of Tree Plantation
        </h3>
        <p className="text-gray-700 text-md leading-relaxed space-y-3">
          Planting trees is not just a one-day event—it is a commitment to nurturing life. Over the years, these trees grow to form green belts, protect soil from erosion, regulate water cycles, and provide fruits, medicines, and shade. They serve as a natural remedy to many environmental challenges we face today.
          <br /><br />
          By participating in the Plant Trees Initiative, you are not just planting trees—you are planting hope, sustainability, and a future where humans coexist harmoniously with nature. This green movement is driven by volunteers like you who care about the planet and its future.
          <br /><br />
          Whether it's donating a sapling, volunteering at a plantation drive, or spreading awareness, your actions will inspire others and amplify the impact. Let’s build forests of change together.
        </p>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <button
          onClick={() => navigate('/services')}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          &larr; Back to Services
        </button>
      </div>
    </div>
  );
};

export default Environmental;
