import React from 'react'
import Decore from "../../assets/HomeIMG/Decore.png";
import { FaTrophy } from "react-icons/fa";
import { FaAppleAlt, FaFirstAid, FaBook, FaFemale, FaTree, FaHandsHelping } from 'react-icons/fa';

const services = [
{
    title: "Healthy Food",
    description:
      "Comprehensive health care for disabled people, mentally retarded and for elderly improving public health in rural areas promotion and protection of rural arts & cultural heritage provide education and training on climate change and biodiversity by creating modern community gardens.",
    image: "/path/to/healthy-food-image.png",
    icon: <FaAppleAlt className="text-3xl" />
  },
  {
    title: "Medical Support",
    description:
      "Comprehensive health care for disabled people, mentally retarded and for elderly improving public health in rural areas promotion and protection of rural arts & cultural heritage provide education and training on climate change and biodiversity by creating modern community gardens.",
    image: "/path/to/medical-support-image.png",
    icon: <FaFirstAid className="text-3xl" />
  },
  {
    title: "Educational Programs",
    description:
      "Comprehensive health care for disabled people, mentally retarded and for elderly improving public health in rural areas promotion and protection of rural arts & cultural heritage provide education and training on climate change and biodiversity by creating modern community gardens.",
    image: "/path/to/education-image.png",
    icon: <FaBook className="text-3xl" />
  },
  {
    title: "Women Empowerment",
    description:
      "Comprehensive health care for disabled people, mentally retarded and for elderly improving public health in rural areas promotion and protection of rural arts & cultural heritage provide education and training on climate change and biodiversity by creating modern community gardens.",
    image: "/path/to/women-empowerment-image.png",
    icon: <FaFemale className="text-3xl" />
  },
  {
    title: "Environmental Awareness",
    description:
      "Comprehensive health care for disabled people, mentally retarded and for elderly improving public health in rural areas promotion and protection of rural arts & cultural heritage provide education and training on climate change and biodiversity by creating modern community gardens.",
    image: "/path/to/environment-image.png",
    icon: <FaTree className="text-3xl" />
  },
  {
    title: "Disaster Relief",
    description:
      "Comprehensive health care for disabled people, mentally retarded and for elderly improving public health in rural areas promotion and protection of rural arts & cultural heritage provide education and training on climate change and biodiversity by creating modern community gardens.",
    image: "/path/to/disaster-relief-image.png",
    icon: <FaHandsHelping className="text-3xl" />
  },
];

const Services = () => {
  return (
    <section className="relative py-10 px-20 bg-white">
    {/* Wrapper for Decor and Services */}
    
      {/* Left Decor */}
      <img
        src={Decore}
        alt="decor"
        className="absolute top-4 left-0 w-12 h-20 md:w-12 md:h-20"
      />
      {/* Right Decor */}
      <img
        src={Decore}
        alt="decor"
        className="absolute bottom-4 right-0 w-12 h-20 md:w-12 md:h-20"
      />

      <div className="relative max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Our services <br /> <span className="text-black">we Provide!</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`p-6 rounded shadow transition duration-300 cursor-pointer group hover:shadow-xl hover:scale-105
              ${service.active
                  ? "bg-[#03457B] text-white"
                  : "bg-white text-black hover:bg-[#03457B] hover:text-white"
              }`}
          >
            {/* Service Icon */}
            <div className="mb-4">
              {service.icon}
            </div>

            {/* Service Image 
            <div className="mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded"
              />
            </div>*/}

            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Services