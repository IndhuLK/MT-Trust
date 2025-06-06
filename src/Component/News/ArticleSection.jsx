import React, { useState } from "react";

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
  const [selectedArchive, setSelectedArchive] = useState("November 2024");

  const archiveContent = {
    "November 2024": [
      {
        title: "Children’s day celebration 2024",
        content: [
          "Children’s day celebration 14-11–2024 conducted by MTSSDS at mill colony students nearly 60 students participated in the drawing competition.",
        ],
        images: [
          "/src/assets/HomeIMG/img-1.jpg",
          "/src/assets/HomeIMG/img-2.jpg",
          "/src/assets/HomeIMG/img-3.jpg",
          "/src/assets/HomeIMG/img-4.jpg",
          "/src/assets/HomeIMG/img-5.jpg",
          "/src/assets/HomeIMG/img-6.jpg",
        ],
      },
    ],
    "October 2024": [
      {
        title:
          "Social defence issues for social work educators  funded by NISD",
        content: [
          "Training attended by K.subburaj and K.Balakrishnan on 17th to 19th October 2024 at Madurai Institute of social sciences",
        ],
        images: [
          "/src/assets/HomeIMG/img-7.jpg",
          "/src/assets/HomeIMG/img-8.jpg",
          "/src/assets/HomeIMG/img-9.jpg",
          "/src/assets/HomeIMG/img-10.jpg",
          "/src/assets/HomeIMG/img-11.jpg",
        ],
      },
    ],
    "September 2024": [
      {
        title: "Nutrional project",
        content: [
          "Programme conducted by MTSSDS -nutrional project for pre natal mothers-distributed minor millets food for 45,nos of beneficiary Primary health centre kodumbalur  02-09-2024",
        ],
        images: [
          "/src/assets/HomeIMG/img-12.jpg",
          "/src/assets/HomeIMG/img-13.jpg",
          "/src/assets/HomeIMG/img-17.jpg",
          "/src/assets/HomeIMG/img-15.jpg",
          "/src/assets/HomeIMG/img-14.jpg",
        ],
      },
    ],
    "August 2024": [
      {
        title: "78th independence day celebration",
        content: [
          "78th independence day celebration at Govt Middle school Inamreddiapatty pudiur our organisation MTSSDS participated with lions club manapparai",
        ],
        images: ["/src/assets/HomeIMG/img-18.jpg"],
      },
      {
        title: "Livelihood development programme",
        content: [
          "Attended livelihood development programme through social enterprises training attended at KKID C Coimbatore president and project coordinator attended this training programme",
        ],
        images: ["/src/assets/HomeIMG/img-25.jpg"],
      },
      {
        title:
          "Livelihood development programme through social enterprises 12-08-2024",
        content: [""],
        images: ["/src/assets/HomeIMG/img-33.jpg"],
      },
    ],
    "April 2024": [
      {
        title: "Ayya Nammalvar 86th birthday function",
        content: [
          "K.subburaj president M .Selvaraj secratary K.Balakrishnan project director were participated 86th birthday function of Ayya Nammalvar at. Vanagam",
        ],
        images: [
          "/src/assets/HomeIMG/img-34.jpeg",
          "/src/assets/HomeIMG/img-35.jpeg",
        ],
      },
    ],
    "March 2024": [
      {
        title: "Educational support",
        content: [
          "Educational support to college students for their project work A.Rubin a blind student studied at Govt Arts college Nandanam chennai",
        ],
        images: ["/src/assets/HomeIMG/img-36.jpeg"],
      },
    ],
    "August 2022": [
      {
        title: "Educational support",
        content: [
          "Educational support to college students for their project work A.Rubin a blind student studied at Govt Arts college Nandanam chennai",
        ],
        images: ["/src/assets/HomeIMG/img-36.jpeg"],
      },
    ],
    "June 2022": [
      {
        title: "Founders day celebration",
        content: [
          "Founders day celebration Educational monetary support to poor student for her higher education",
        ],
        images: ["/src/assets/HomeIMG/img-19.jpg"],
      },
    ],
    "April 2022": [
      {
        title: "Founder’s day",
        content: ["Few Memorable snaps as follows"],
        images: [
          "/src/assets/HomeIMG/img-29.jpg",
          "/src/assets/HomeIMG/img-28.jpg",
        ],
      },
    ],
    "March 2022": [
      {
        title: "NGO Activities",
        content: [
          "Under RAWAE Programe SRS Institute of Agricultural Technology students along with MOTHER THERESA SOCIAL SERVICE AND DEVELOPMENT SOCIETY Manapparai explained NGO activities",
        ],
        images: [
          "/src/assets/HomeIMG/img-26.jpg",
          "/src/assets/HomeIMG/img-27.jpg",
        ],
      },
      {
        title: "World Water Day 22 March 2022",
        content: [
          "22 March 2022 Manapparai Mother Therasa Social Service and Development Society observed International Water Day in association with DDU- Kasul Kedndra & Department of Women Studies RUSA Social Sciences Bharathidasan University Trichy.Dr. N. Manimekalai Director & Head & Professor Department of Women Studies Bharathidasan University presided the function.Dr R. Ilangovan Former Chief Engineer Public Works Department & Former Vice – Chairman Tamilnadu Water Resources Department Cell WRD participated as Chief Guest and delivered speech among university students . 80 students and 10 NGOs were benefited",
        ],
        images: [
          "/src/assets/HomeIMG/img-38.jpg",
          "/src/assets/HomeIMG/img-39.jpg",
          "/src/assets/HomeIMG/img-40.jpg",
          "/src/assets/HomeIMG/img-41.jpg",
          "/src/assets/HomeIMG/img-31.jpg",
          "/src/assets/HomeIMG/img-32.jpg",
        ],
      },
      {
        title: "World Water Day March 22nd 2022",
        content: ["Few Memorable snaps as follows"],
        images: ["/src/assets/HomeIMG/img-42.jpeg"],
      },
    ],
    "January 2022": [
      {
        title: "Illam Thedi Kalvi -Reddiyapatti",
        content: [
          "07 Janyary 22 , Manapparai",
          "Mother Terasa Social Service & Development Society adopted and declared long term support for volunteer incentive to Mrs Abinaya in addition to the incentive given by the state government under Education at Door Step (Illam Thedi Kalvi) Inam Reddiyapatti Centre.",
          "Present :",
          "Mr.Subburaj President",
          "Mr.Selvaraj Secretary",
          "Mr.Balakrishnan Project Officer",
          "Mr.Kaliyaperumal School Headmaster and local VIPs",
        ],
        images: [
          "/src/assets/HomeIMG/img-42.jpg",
        ],
      },
      {
        content: [
          "Few Memorable snaps as follows :-)",
        ],
        images: [
          "/src/assets/HomeIMG/img-43.jpg",
          "/src/assets/HomeIMG/img-44.jpg",
          "/src/assets/HomeIMG/img-45.jpg",
          "/src/assets/HomeIMG/img-46.jpg",
          "/src/assets/HomeIMG/img-47.jpg",
        ],
      },
    ],
    "June 2021": [
      {
        title: "Covid 19 online Doctor Consultations",
        content: [""],
        images: [
          "/src/assets/HomeIMG/covid.jpg",
        ],
      },
    ],
  };

  const archives = [
    "November 2024",
    "October 2024",
    "September 2024",
    "August 2024",
    "April 2024",
    "March 2024",
  ];

  const olderArchives = [
    "August 2022",
    "June 2022",
    "April 2022",
    "March 2022",
    "January 2022",
    "June 2021",
  ];

  return (
    <div className="font-family max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {/* Left: Article Content */}
      <div className="md:col-span-2 space-y-8">
        {archiveContent[selectedArchive]?.map((item, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 leading-snug mb-2">
              {item.title}
            </h2>
            {item.content.map((para, i) => (
              <p key={i} className="text-md text-gray-600 leading-relaxed mt-3">
                {para}
              </p>
            ))}
            {item.images && item.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {item.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`image-${idx}`}
                    className="w-full h-auto rounded-md object-cover shadow"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="space-y-20">
        {/* Archives */}
        <div className="bg-blue-100 p-4 shadow-sm">
          <h3 className="text-md mb-10 text-3xl font-bold">Archives</h3>
          <div className="grid grid-cols-2 gap-4 text-blue-900">
            <ul className="space-y-2">
              {archives.map((date, index) => (
                <li
                  key={index}
                  className={`border-b border-blue-200 py-1 hover:underline cursor-pointer ${
                    selectedArchive === date ? "font-bold text-blue-800" : ""
                  }`}
                  onClick={() => setSelectedArchive(date)}
                >
                  {date}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {olderArchives.map((date, index) => (
                <li
                  key={index}
                  className={`border-b border-blue-200 py-1 hover:underline cursor-pointer ${
                    selectedArchive === date ? "font-bold text-blue-800" : ""
                  }`}
                  onClick={() => setSelectedArchive(date)}
                >
                  {date}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
                  className="w-20 h-20 rounded-md object-cover bg-gray-300"
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
      </div>
    </div>
  );
};

export default ArticleSection;
