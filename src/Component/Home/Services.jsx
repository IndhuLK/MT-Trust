import React from "react";
import Decore from "../../assets/HomeIMG/Decore.png";
import { FaTrophy } from "react-icons/fa";
import {
  FaAppleAlt,
  FaFirstAid,
  FaBook,
  FaFemale,
  FaTree,
  FaHandsHelping,
} from "react-icons/fa";

const services = [
  {
    title: "Healthy Food",
    description:
      "At Mother Therasa Social Service and Development Services, we promote health through our Healthy Food Service by providing fresh, balanced, and nutritious meals to children, elderly people, and underprivileged families. These meals are prepared using locally sourced ingredients to maintain hygiene, safety, and nutritional value. Our service helps prevent malnutrition and supports physical and mental development. By ensuring access to healthy food, we aim to improve overall well-being.",
    image: "/path/to/healthy-food-image.png",
    icon: <FaAppleAlt className="text-3xl" />,
  },
  {
    title: "Medical Support",
    description:
      "At Mother Therasa Social Service and Development Services, we provide accessible healthcare to underserved communities. We organize medical camps, health check-ups, and awareness programs in rural and remote areas. Our team collaborates with medical professionals to offer treatments and free medicines. We also promote hygiene and disease prevention. This service ensures no one is denied healthcare due to location or cost.",
    image: "/path/to/medical-support-image.png",
    icon: <FaFirstAid className="text-3xl" />,
  },
  {
    title: "Educational Programs",
    description:
      "At Mother Therasa Social Service and Development Services, we empower underprivileged children, youth, and adults through quality education. We run tuition centers, scholarships, digital literacy, and skill training programs in rural areas. Our focus is on bridging learning gaps with both academic and practical knowledge. This helps individuals build a better future and contribute to society.",
    image: "/path/to/education-image.png",
    icon: <FaBook className="text-3xl" />,
  },
  {
    title: "Women Empowerment",
    description:
      "At Mother Therasa Social Service and Development Services, Women Empowerment is at the heart of our mission. We provide skill development training, entrepreneurship support, and awareness programs to help women—especially those in rural and disadvantaged communities—gain confidence, financial independence, and leadership abilities. By creating opportunities for education, employment, and self-expression, we enable women to uplift themselves and contribute actively to their families and communities.",
    image: "/path/to/women-empowerment-image.png",
    icon: <FaFemale className="text-3xl" />,
  },
  {
    title: "Environmental Awareness",
    description:
      "At Mother Therasa Social Service and Development Services, we actively promote Environmental Awareness to build a sustainable future. Through tree plantation drives, clean-up campaigns, waste management workshops, and education on eco-friendly practices, we engage communities in protecting nature. Our mission is to instill a sense of responsibility in individuals to conserve resources, reduce pollution, and preserve biodiversity for future generations.",
    image: "/path/to/environment-image.png",
    icon: <FaTree className="text-3xl" />,
  },
  {
    title: "Disaster Relief",
    description:
      "During times of natural or man-made calamities, Mother Therasa Social Service and Development Services provides immediate and effective Disaster Relief. Our team works swiftly to distribute food, clean water, clothing, medical aid, and temporary shelter to affected families. We also offer emotional support and help communities rebuild their lives, ensuring no one is left behind in their most vulnerable moments.",
    image: "/path/to/disaster-relief-image.png",
    icon: <FaHandsHelping className="text-3xl" />,
  },
];

const Services = () => {
  return (
    <section className="relative py-10 px-20 bg-white font-family"
    data-aos="fade-up">
      {/* Wrapper for Decor and Services */}

      {/* Left Decor */}
      <img
        src={Decore}
        alt="decor"
        className="absolute top-4 left-0 w-12 h-20 md:w-12 md:h-20"
        data-aos="zoom-in"
        data-aos-delay="100"
      />
      {/* Right Decor */}
      <img
        src={Decore}
        alt="decor"
        className="absolute bottom-4 right-0 w-12 h-20 md:w-12 md:h-20"
        data-aos="zoom-in"
        data-aos-delay="200"
      />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10"
        data-aos="fade-up">
          Our services <br /> <span className="text-black">we Provide!</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-6 rounded shadow transition duration-300 cursor-pointer group hover:shadow-xl hover:scale-105
              ${
                service.active
                  ? "bg-[#03457B] text-white"
                  : "bg-white text-black hover:bg-[#03457B] hover:text-white"
              }`}
              
            >
              {/* Service Icon */}
              <div className="mb-4 ">{service.icon}</div>

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
  );
};

export default Services;
