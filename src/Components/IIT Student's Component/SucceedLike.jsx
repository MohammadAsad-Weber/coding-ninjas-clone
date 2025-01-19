import React from "react";

// Images - { Succes }
import One from "../../assets/Images/Success/one.jpg";
import Two from "../../assets/Images/Success/two.jpg";
import Three from "../../assets/Images/Success/three.jpg";
import Four from "../../assets/Images/Success/four.jpg";

function SucceedLike() {
  return (
    <div className="py-10 px-5 flex flex-col items-center justify-center gap-14 lg:flex-row">

      {/* Details */}
      <div className="max-w-md w-full flex flex-col gap-4">

        {/* Heading */}
        <h3 className="text-2xl font-medium lg:text-3xl">
          Succeed like <span className="text-[#4164bd]">Top 1%</span>
        </h3>

        {/* Description */}
        <p className="font-light text-gray-500">
          Unlock the path to success with the mindset and perseverance of an
          IITian.
        </p>

        {/* Details */}
        <div className="flex items-center gap-x-3">
          <i className="bx bxs-graduation text-[#4164bd] text-xl"></i>
          <p className="text-sm font-light text-gray-700">
            Celebrate your achievements with a prestigious{" "}
            <span className="text-[#d5977e]">
              graduation ceremony at E&ICT Academy, IIT Guwahati
            </span>
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <i className="bx bxs-bank text-[#4164bd] text-xl"></i>
          <p className="text-sm font-light text-gray-700">
            Participate offline for 2 days in an exclusive hackathon at{" "}
            <span className="text-[#d5977e]">E&ICT IIT Guwahati campus</span>
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <i className="bx bxs-user-voice text-[#4164bd] text-xl"></i>
          <p className="text-sm font-light text-gray-700">
            Get an{" "}
            <span className="text-[#d5977e]">
              E&ICT IIT Guwahati alumni status
            </span>{" "}
            and connect with top professionals
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <i className="bx bxs-id-card text-[#4164bd] text-xl"></i>
          <p className="text-sm font-light text-gray-700">
            <span className="text-[#d5977e]">Career services</span> post program
            completion by Coding Ninjas
          </p>
        </div>

        {/* Enroll Button */}
        <button className="self-center mt-3 py-2.5 px-5 text-sm text-white bg-[#4164bd] rounded-md lg:text-base lg:py-3 lg:px-6">
          Request Callback
        </button>

      </div>

      {/* Grid Photos */}
      <div className="max-w-lg w-full grid grid-cols-2 gap-3">
        <img src={One} alt="" className="rounded-lg" />
        <img src={Two} alt="" className="rounded-lg" />
        <img src={Three} alt="" className="rounded-lg" />
        <img src={Four} alt="" className="rounded-lg" />
      </div>
      
    </div>
  );
}

export default SucceedLike;
