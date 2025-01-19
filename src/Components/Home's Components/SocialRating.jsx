import React from "react";

// SVGs/PNGs - { Logos of the Company }
import Google from "../../assets/SVGs/google.svg";
import Facebook from "../../assets/SVGs/facebook.svg";
import CNLogo from "../../assets/Images/Logos/cn_logo.png";

// Sub-Component
function RatingCard(props) {
  return (
    <div className="py-3 px-6 flex justify-center items-center gap-2.5">
      <img
        src={props.img}
        alt=""
        className="aspect-square max-h-10 h-full min-h-10"
      />
      <div>
        <h4 className="font-bold text-[#f8f8f8] flex items-center gap-1">
          {props.rating} <i className="bx bxs-star text-yellow-500 -translate-y-[1.5px]"></i>
        </h4>
        <h4 className="text-sm font-bold text-[#838485]">{props.reviews}</h4>
      </div>
    </div>
  );
}

function SocialRating() {
  return (
    <div className="px-5 pb-20 flex justify-center bg-[#141414]">

      {/* Inner div */}
      <div className="max-w-screen-lg w-full pb-14 flex flex-col items-center gap-5 bg-wings-sm bg-no-repeat bg-contain bg-center min-[920px]:bg-wings">

        {/* Divider */}
        <div className="w-40 h-[1px] mb-10 bg-gray-800 rounded-3xl"></div>

        {/* Heading */}
        <h2 className="text-center text-xl font-bold text-[#e3e3e3]">
          Trusted by learners
        </h2>

        {/* Description */}
        <p className="-mt-2.5 text-center text-sm text-[#adadae]">
          1,00,000+ Coding Ninjas alumni from 1,100+ companies & 4,400+ colleges
          working in top product companies
        </p>

        {/* Rating Cards */}
        <div className="flex flex-col items-center justify-center gap-5 min-[920px]:flex-row">
          <RatingCard img={Facebook} rating={4.9} reviews="700+ reviews" />
          <RatingCard img={Google} rating={4.7} reviews="2300+ reviews" />
          <RatingCard img={CNLogo} rating={4.8} reviews="Course rating" />
        </div>

      </div>
      
    </div>
  );
}

export default SocialRating;
