import React from "react";
import Image1 from "../../assets/HomeIMG/Image1.jpg";
import Image2 from "../../assets/HomeIMG/Image2.jpg";
import Image3 from "../../assets/HomeIMG/Image3.jpg";
import Image4 from "../../assets/HomeIMG/Image4.jpg";
import Decore from "../../assets/HomeIMG/Decore.png";
import Small from "../../assets/HomeIMG/Small.png";
import Dot from "../../assets/HomeIMG/Dot.png";

const AboutUS = () => {
  return (
    <section className="relative px-4 md:px-20 py-20 bg-white overflow-hidden font-Poppins">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left-side decorative image */}
        <img
          src={Decore}
          alt="Decor"
          className="absolute top-20 left-0 w-10 opacity-100 z-0 "
        />

        <img
          src={Small}
          alt="Decor"
          className="absolute top-70 left-10 w-6 h-6 opacity-200 z-0 rotate-45"
        />

        {/* Left Content */}
        <div className="space-y-6 relative z-10">
          <h3 className="text-blue-800 font-semibold text-lg">About Us</h3>

          {/* Heading with Icon */}
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold leading-tight relative z-10">
              We done with <br />
              your{" "}
              <span className="underline decoration-yellow-400 underline-offset-8 transition-all">
                {" "}
                help!
              </span>
            </h2>
            <img
              src={Small}
              alt="Decor"
              className="absolute -top-1 -right-20 w-6 h-6 z-0 -rotate-160"
            />
          </div>

          <p className="text-slate-800">
            The Mother Therasa Social Service and Development Society [MTSSDS]
            Team comprises of development professionals and social activists
            presently Chaired by Mr. K. SUBBURAJ the retired Assistant Director
            of State Agriculture Government of Tamilnadu who has a vast
            experience for the development of small and marginal farmers. His 36
            years of experience at various levels in various regions has been
            helpful to form strategies for the development of farming community.
            The present Secretary Mr. M. SELVARAJ is the retired block
            development officer in the department of Rural Developmentand &
            Panchayat Raj Government of Tamilnadu. Thus his experience in
            developing rural area is pivotal. The two best teachers awardees had
            come voluntarily as a grass root campaigner and promoted as director
            of the board, on his merit. Therefore, the team has been aiming the
            equitable society with peace. It was established in the year 1994
            for the good cause that to remove the poverty from the world and for
            holding hands for justice for the voiceless community.
          </p>
        </div>

        {/* Right Images Grid */}
        <div className="relative w-full min-h-[450px] md:min-h-[500px] lg:min-h-[550px]">
          <img
            src={Image1}
            alt="img1"
            className="absolute top-[10px] left-30 w-62 h-70 object-cover rounded-lg shadow-lg z-10"
          />
          <img
            src={Image4}
            alt="img2"
            className="absolute top-70 left-45 w-40 h-45 object-cover rounded-lg shadow-md z-20"
          />
          <img
            src={Image3}
            alt="img3"
            className="absolute top-50 left-8 w-32 h-36 object-cover rounded-lg border-4 border-white shadow-md z-30"
          />
          <img
            src={Image2}
            alt="img4"
            className="absolute top-30 left-95 w-55 h-45 object-cover  shadow-lg z-10"
          />
          <img
            src={Dot}
            alt="Dot"
            className="absolute top-10 left-95 object-cover z-10"
          />

          <img
            src={Dot}
            alt="Dot"
            className="absolute top-60 left-35 object-cover z-10 opacity-100"
          />
        </div>
      </div>
      {/* Full-width bottom paragraph */}
      <div className="w-full mt-10 bg-white md:mt-2 ">
        <p className="text-gray-800 leading-relaxed">
          It changes its goals during the passage of time on need based
          sustainable approach based development and some have it worked in
          disasters relief measures like Tsunami 2004 and Geja cyclone in 2018
          etc. The organization has been working in association of 75 volunteers
          base in 100 village panchayats of Trichirappalli, Karur, Dindigul and
          Namakal districts. It is registered nonprofit service organization
          under the Tamilnadu state Societies Registration Act 1975 and also
          registered with Foreign Contributions & Regulations Act for receiving
          grants and funds from overseas. Subsequently it is exempted for tax
          and donations u/s 12 AA & 80G of Income Tax Act. It is also registered
          with e- Darpan of the Government of India. Since from the inception,
          the organization has been working with under privileged, disadvantaged
          and downtrodden community and thus the staff has a good rapport with
          all the people like HIV affected community, single women, differently
          able , women victims of domestic violence, etc.....
          {/* (rest of your paragraph) */}
        </p>
      </div>
    </section>
  );
};

export default AboutUS;
