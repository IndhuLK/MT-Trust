import React from "react";
import img1 from "../../assets/HomeIMG/img-11.jpg";
import img2 from "../../assets/HomeIMG/img-8.jpg";
import img3 from "../../assets/HomeIMG/img-20.jpg";
import img4 from "../../assets/HomeIMG/img-7.jpg";
import img5 from "../../assets/HomeIMG/img-15.jpg";
import img6 from "../../assets/HomeIMG/img-19.jpg";
import img7 from "../../assets/HomeIMG/img-17.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const OurGallery = () => {
  return (
    <section className="p-6 px-15 bg-white font-family">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Some of Our Activities
      </h2>

      <div className="grid grid-cols-12 gap-4">
        {/* Top row with custom widths */}
        <div className="col-span-12 md:col-span-4 h-40 bg-gray-300 rounded-lg overflow-hidden">
          <img
            src={images[0]}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-3 h-40 bg-gray-300 rounded-lg overflow-hidden">
          <img
            src={images[1]}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-5 h-40 bg-gray-300 rounded-lg overflow-hidden">
          <img
            src={images[2]}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom row - 4 equal images */}
        {images.slice(3).map((src, index) => (
          <div
            key={index}
            className="col-span-12 md:col-span-3 h-36 bg-gray-300 rounded-lg overflow-hidden"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 4}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurGallery;
