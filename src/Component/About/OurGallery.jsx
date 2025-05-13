import React from 'react'


const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
  ];

const OurGallery = () => {
  return (
    <section className="p-6 px-15 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Gallery</h2>

      <div className="grid grid-cols-12 gap-4">
        {/* Top row with custom widths */}
        <div className="col-span-12 md:col-span-4 h-40 bg-gray-300 rounded-lg overflow-hidden">
          <img src={images[0]} alt="Gallery" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-12 md:col-span-3 h-40 bg-gray-300 rounded-lg overflow-hidden">
          <img src={images[1]} alt="Gallery" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-12 md:col-span-5 h-40 bg-gray-300 rounded-lg overflow-hidden">
          <img src={images[2]} alt="Gallery" className="w-full h-full object-cover" />
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
  )
}

export default OurGallery