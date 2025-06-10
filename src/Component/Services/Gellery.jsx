import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    category: "Women Empowerment",
    title: "Skill Training for Women",
    description: "Enable women to become financially independent through tailoring and crafts.",
    image: "/src/assets/HomeImg/img-22.jpg",
    link: "/services/women",
  },
  {
    category: "Education",
    title: "Sponsor a Child’s Education",
    description: "Help underprivileged children access school supplies and tuition.",
    image: "/src/assets/HomeImg/img-36.jpeg",
    link: "/services/education",
  },
  {
    category: "Child Welfare",
    title: "Rescue Street Children",
    description: "Support shelter and rehab for children living on streets.",
    image: "/src/assets/HomeImg/img-30.jpg",
    link: "/services/child",
  },
  {
    category: "Environmental",
    title: "Plant Trees Initiative",
    description: "Join hands in greening our cities and reducing pollution.",
    image: "/src/assets/HomeImg/img-24.jpg",
    link: "/services/environmental",
  },
  {
    category: "Water Access",
    title: "Build Clean Water Wells",
    description: "Bring fresh water to villages with no access to clean sources.",
    image: "/src/assets/HomeImg/img-31.jpg",
    link: "/services/water",
  },
  {
    category: "Nutrition",
    title: "Feed the Malnourished",
    description: "Contribute to meal programs for children in slums and remote areas.",
    image: "/src/assets/HomeImg/img-13.jpg",
    link: "/services/nutrition",
  },
];

const Gellery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-family">
      <p className="text-md text-gray-500 mb-1">Latest Services________</p>
      <h2 className="text-4xl font-semibold mb-10 leading-relaxed">
        Find The Popular Services
        <br />
        And Donate Them
      </h2>

      {/* Top 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            data-aos={index === 0 ? "fade-up" : index === 1 ? "fade-down" : "zoom-in"}
            className="bg-white rounded shadow-md group"
          >
            <div className="relative h-48 overflow-hidden rounded-t">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => navigate(service.link)}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </div>
            <div className="p-4">
              <p className="text-blue-800 text-sm font-bold">{service.category}</p>
              <h3 className="text-lg font-semibold mt-1">{service.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.slice(3).map((service, index) => (
          <div
            key={index + 3}
            data-aos={index === 0 ? "flip-left" : index === 1 ? "fade-up-right" : "zoom-in-up"}
            className="bg-white rounded shadow-md group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden rounded-t">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => navigate(service.link)}
                className="cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn More
              </button>
            </div>
            <div className="p-4">
              <p className="text-blue-800 text-sm font-bold">{service.category}</p>
              <h3 className="text-lg font-semibold mt-1">{service.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gellery;
