import React from "react";

// Certificate Image
import Certificate from "../../assets/Images/iit_certificate.png";

function IIT_Certificate() {
  return (
    <div className="py-10 px-5 flex flex-col items-center justify-center gap-10 bg-[#f9f9f9] lg:flex-row">

      {/* Details */}
      <div className="max-w-md w-full flex flex-col gap-5">

        {/* Heading */}
        <h1 className="text-2xl text-center font-semibold">
          Program <span className="text-[#4164bd]">Certificate</span>
        </h1>

        {/* Paragraph */}
        <p className="text-sm font-light">
          E&ICT IIT Guwahati will award a certificate of successful completion
          to participants who complete the program successfully with 70% of the
          score in the evaluation. You should have watched at least 70% of the
          course content in your classroom to be considered eligible for program
          completion criteria and receive a certificate from E&ICT, IIT
          Guwahati.
        </p>

        {/* Note */}
        <h6 className="mt-2.5 text-[0.7rem] text-gray-700 leading-4">
          Note: All certificate images are for illustrative purposes only and
          may be subject to change at the discretion of E&ICT IIT Guwahati.
        </h6>
        
      </div>

      {/* Certificate */}
      <img
        src={Certificate}
        alt=""
        className="max-w-lg w-full shadow-[0_0_10px_rgba(0,_0,_0,_0.5)]"
      />

    </div>
  );
}

export default IIT_Certificate;
