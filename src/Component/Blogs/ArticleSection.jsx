import React from "react";

const posts = [
  {
    title: "Charity, Expectation Vs. Reality",
    category: "Homeless",
    image: "https://via.placeholder.com/80",
  },
  {
    title: "This Week’s Top Stories About.",
    category: "Medical",
    image: "https://via.placeholder.com/80",
  },
  {
    title: "Why You Should Focus On Charity",
    category: "Food",
    image: "https://via.placeholder.com/80",
  },
];

const ArticleSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {/* Left: Article Content */}
      <div className="md:col-span-2 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 leading-snug mb-2">
            Back To The Future: Quality Education Through Respect, Commitment
            And Accountability
          </h2>
          <p className="text-md text-gray-600 leading-relaxed">
            Flyingfish Kafue pike cow shark California smoothtongue golden loach
            temperate ocean-bass gulper Sailbearer kanyu porcupinefish Kafue
            pike opah sunfish gudgeon boga Asiatic glassfish tadpole fish!
            Alewife, poacher airbreathing catfish; zebra tilapia northern
            pearleye naked-back knifefish pupfish dojo loach, “snake mackerel
            bonytail chub arapaima horsefish weasel shark.”
          </p>

          <p className="text-md text-gray-600 leading-relaxed mt-3">
            Asian carps sailback scorpionfish; dragon goby lemon sole triplefin
            blenny hog sucker. Smelt sleeper shovelnose sturgeon merluccid hake
            cow shark herring smelt trout-perch barbeled houndshark. Shell-ear
            Asian carps blackfish Port Jackson shark Atlantic saury. Sacramento
            blackfish pricklefish, Atlantic cod, “driftwood catfish chimaera
            ribbonfish, marblefish worm eel smelt mora gray reef shark scabbard
            fish.”
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 leading-snug mb-2">
            Clean Water Helps Keep Kids In School, Especially Girls.
          </h2>
          <p className="text-md text-gray-600 leading-relaxed">
            Best quality only happens when you care enough to do your best.
            Steer companies away from risky denounce with righteous indignation
            who are so beguiled and demoralized by pleasure of the
          </p>

          <p className="text-md text-gray-600 leading-relaxed mt-3">
            Flyingfish Kafue pike cow shark California smoothtongue golden loach
            temperate ocean-bass gulper kanyu porcupinefish Kafue pike opah
            sunfish gudgeon boga Asiatic glassfish tadpole fish! Alewife
            airbreathing catfish; zebra tilapia northern pearleye naked-back
            knifefish pupfish dojo loach. mackerel bonytail chub arapaima
            horsefish weasel shark.”
          </p>

          <p className="text-md text-gray-600 leading-relaxed mt-3">
            Asian carps sailback scorpionfish; dragon goby lemon sole triplefin
            blenny hog sucker. Smelt sleeper sturgeon merluccid hake cow shark
            herring smelt trout-perch barbeled houndshark. Shell-ear Asian
            blackfish Port Jackson shark Atlantic saury. Sacramento blackfish
            pricklefish, Atlantic cod, “driftwood catfish chimaera ribbonfish,
            marblefish worm eel smelt mora gray reef shark scabbard fish.”
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 leading-snug mb-2">
            Trouble With The Law Since The Day
          </h2>
          <p className="text-md text-gray-600 leading-relaxed">
            Best quality only happens when you care enough to do your best.
            Steer companies away from risky denounce with righteous indignation
            who are so beguiled and demoralized by pleasure of the
          </p>

          <p className="text-md text-gray-600 leading-relaxed mt-3">
            Flyingfish Kafue pike cow shark California smoothtongue golden loach
            temperate ocean-bass gulper kanyu porcupinefish Kafue pike opah
            sunfish gudgeon boga Asiatic glassfish tadpole fish! Alewife
            airbreathing catfish; zebra tilapia northern pearleye naked-back
            knifefish pupfish dojo loach. mackerel bonytail chub arapaima
            horsefish weasel shark.”
          </p>

          <p className="text-md text-gray-600 leading-relaxed mt-3">
            Asian carps sailback scorpionfish; dragon goby lemon sole triplefin
            blenny hog sucker. Smelt sleeper sturgeon merluccid hake cow shark
            herring smelt trout-perch barbeled houndshark. Shell-ear Asian
            blackfish Port Jackson shark Atlantic saury. Sacramento blackfish
            pricklefish, Atlantic cod, “driftwood catfish chimaera ribbonfish,
            marblefish worm eel smelt mora gray reef shark scabbard fish.”
          </p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-20">
        {/* Recent Posts */}
        <div className="bg-blue-100 p-5 w-full">
          <h2 className="text-3xl font-bold text-gray-900 pb-2 mb-10 relative inline-block">
            Recent Posts
            <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-blue-800"></span>
          </h2>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="flex gap-3 items-start">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-30 h-30 rounded-md object-cover bg-gray-300"
                />
                <div>
                  <p className="text-xl font-medium text-gray-900 leading-snug">
                    {post.title}
                  </p>
                  <span className="text-md text-gray-600">{post.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Tags */}
        <div className="bg-blue-100 p-4 shadow-sm">
          <h3 className="text-md mb-10 text-3xl font-bold">Popular Tags</h3>
          <div className="flex flex-wrap gap-6">
            <span className="text-white  border bg-blue-500 px-3 py-1 text-sm">
              Education
            </span>
            <span className="bg-white text-blue-600 border border-blue-500 px-3 py-1 text-sm rounded-full">
              Water
            </span>
            <span className="bg-white text-blue-600 border border-blue-500 px-3 py-1 text-sm rounded-full">
              Medical
            </span>
            <span className="bg-white text-blue-600 border border-blue-500 px-3 py-1 text-sm rounded-full">
              Home
            </span>
            <span className="bg-white text-blue-600 border border-blue-500 px-3 py-1 text-sm rounded-full">
              Lifestyle
            </span>
            <span className="text-white  border bg-blue-500 px-3 py-1 text-sm">
              Food
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
