import React from "react";

// Image - { IIT Institute }
import IIT from "../../assets/Images/iit.webp";

// Logos
import CNLogo from "../../assets/SVGs/logo.svg";
import IITLogo from "../../assets/Images/Logos/iit.png";

function Curriculum() {
  return (
    <div className="pt-16 px-5 pb-10 flex flex-col items-center gap-10 lg:gap-14">

      {/* Heading */}
      <h1 className="text-xl text-center font-semibold md:text-2xl">
        The Coding Ninjas and E&ICT Academy, IIT Guwahati partnership
      </h1>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-14">

        {/* Image */}
        <img src={IIT} alt="" className="aspect-video max-w-md w-full" />

        {/* Details */}
        <div>

          {/* Paragraph */}
          <p className="max-w-md w-full text-gray-800">
            Coding Ninjas has developed this program in partnership with E&ICT
            Academy, IIT Guwahati. E&ICT Academy is an initiative of MeitY
            (Ministry of Electronics and Information Technology, Govt. of India)
            formed with an aim to develop state-of-the-art training facilities
            for professionals.
          </p>

          {/* Collabration */}
          <div className="mt-5 flex items-center gap-2.5 min-[580px]:gap-5 min-[580px]:mt-10">
            <img src={CNLogo} alt="" className="h-5 min-[580px]:h-8" />
            <i className="bx bx-x text-2xl translate-y-[2.5px] min-[580px]:text-3xl"></i>
            <img src={IITLogo} alt="" className="h-5 min-[580px]:h-8" />
          </div>
          
        </div>

      </div>

    </div>
  );
}

export default Curriculum;
