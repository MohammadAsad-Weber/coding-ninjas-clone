import React from "react";

// Goodies Image
import Goodies from "../../assets/Images/goodies.png";

function FeelLikeElite() {
  return (
    <div className="py-10 px-5 flex flex-col items-center justify-center gap-14 lg:flex-row">

      {/* Details */}
      <div className="max-w-md w-full flex flex-col gap-4">

        {/* Heading */}
        <h3 className="text-2xl font-medium lg:text-3xl">
          Feel like Elite <span className="text-[#4164bd]">Elite</span>
        </h3>

        {/* Description */}
        <p className="font-light text-gray-500">
          Immerse yourself in the IIT atmosphere & feel the pride.
        </p>

        {/* Details */}
        <div className="flex items-center gap-x-3">
          <i className="bx bxs-graduation text-[#4164bd] text-xl"></i>
          <p className="text-sm font-light text-gray-700">
            Experience program{" "}
            <span className="text-[#d5977e]">
              orientation at E&ICT IIT Guwahati.
            </span>
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <i className="bx bxs-bank text-[#4164bd] text-xl"></i>
          <p className="text-sm font-light text-gray-700">
            Benefit from the{" "}
            <span className="text-[#d5977e]">AI infused curriculum</span>{" "}
            co-designed with E&ICT IIT faculties
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <i className="bx bxs-user-voice text-[#4164bd] text-xl"></i>
          <p className="text-sm font-light text-gray-700">
            Get access to E&ICT IIT faculty{" "}
            <span className="text-[#d5977e]">Guest Lectures</span>
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <i className="bx bxs-id-card text-[#4164bd] text-xl"></i>
          <p className="text-sm font-light text-gray-700">
            Get an{" "}
            <span className="text-[#d5977e]">
              admission letter, ID Card, T-Shirt
            </span>{" "}
            to solidify your connection to the institution
          </p>
        </div>

        {/* Enroll Button */}
        <button className="self-center mt-3 py-2.5 px-5 text-sm text-white bg-[#4164bd] rounded-md lg:text-base lg:py-3 lg:px-6">
          Enroll Now
        </button>

      </div>

      {/* Goodies Image */}
      <img src={Goodies} alt="" className="max-w-lg w-full" />

    </div>
  );
}

export default FeelLikeElite;
