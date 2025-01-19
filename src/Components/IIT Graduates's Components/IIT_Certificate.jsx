import React, { useContext } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// Certificate
import IITCertificate from "../../assets/Images/iit_certificate.png";

// Icons
import Folder from "../../assets/Images/Icons/folder.webp";
import Hat from "../../assets/Images/Icons/hat.webp";
import Mic from "../../assets/Images/Icons/mic.webp";
import Building from "../../assets/Images/Icons/building.webp";

// Sub-Component
function Card(props) {
  return (
    <div className="p-4 flex flex-col items-start gap-5 bg-white rounded-xl shadow-[0_0_10px_rgba(0,_0,_0,_0.25)]">
      <img
        style={{ backgroundColor: props.background }}
        src={props.img}
        alt=""
        className="aspect-square h-14 p-4 rounded-full"
      />
      <p className="text-xs text-gray-800">{props.description}</p>
    </div>
  );
}

function IIT_Certificate() {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  return (
    <div className="pt-16 px-5 pb-10 flex flex-col items-center gap-10 lg:gap-14">

      {/* Heading */}
      <h1 className="text-2xl text-center font-semibold">
        Collaboration with E&ICT Academy, IIT Guwahati opens doors to
      </h1>

      {/* Content */}
      <div className="max-w-screen-lg grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr] md:gap-2.5">

        {/* Certificate */}
        <div className="p-4 flex flex-col items-center gap-5 bg-[#1f1f1f] rounded-2xl order-2 md:flex-col-reverse md:row-span-2 md:order-1">
          <h3 className="pt-2 px-4 pb-0 text-lg text-center font-semibold text-transparent bg-[linear-gradient(268.3deg,_#ffe153_4.06%,_#fb813e_98.93%)] bg-clip-text md:pt-0 md:pb-2">
            PG certificate from E&ICT Academy, IIT Guwahati
          </h3>
          <img
            src={IITCertificate}
            alt=""
            className="max-w-lg w-full rounded-2xl"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-2.5 order-1 md:order-2">
          <Card
            background="#e6ecfc"
            img={Folder}
            description="AI-infused curriculum co-designed with IIT faculty"
          />
          <Card
            background="#fff6e4"
            img={Hat}
            description="Earn an E&ICT Academy, IIT Guwahati alumni status"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-2.5 order-3 md:order-3">
          <Card
            background="#e8f5f5"
            img={Mic}
            description="Orientation, Graduation ceremony at E&ICT, IIT Guwahati campus"
          />
          <Card
            background="#e8e4f6"
            img={Building}
            description="Guest lectures by IIT faculty"
          />
        </div>

      </div>

      {/* Buttons */}
      <div className="hidden items-center justify-center gap-5 md:flex">
        <button
          onClick={() => scroll("callback")}
          className="w-56 h-12 flex items-center justify-center text-black font-medium bg-white border-[1px] border-black/90 rounded-lg hover:bg-black/90 hover:text-white"
        >
          Request callback
        </button>
        <button
          onClick={() => scroll("webinar")}
          className="w-56 h-12 flex items-center justify-center text-white font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254]"
        >
          Book a free webinar
        </button>
      </div>
      
    </div>
  );
}

export default IIT_Certificate;
